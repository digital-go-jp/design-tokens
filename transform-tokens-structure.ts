import fs from 'fs';
import path from 'path';

interface TokenValue {
  value: string;
  type: string;
  [key: string]: unknown;
}

interface TokensObject {
  [key: string]: TokensObject | TokenValue;
}

const isTokenValue = (obj: unknown): obj is TokenValue => {
  return obj !== null && typeof obj === 'object' && 'value' in obj && 'type' in obj;
};

const hasColorTokens = (obj: TokensObject | TokenValue): boolean => {
  if (isTokenValue(obj)) {
    return obj.type === 'color';
  }

  for (const value of Object.values(obj)) {
    if (isTokenValue(value)) {
      if (value.type === 'color') return true;
    } else if (hasColorTokens(value)) {
      return true;
    }
  }
  return false;
};

const updateColorReferences = (value: string): string => {
  return value.replace(/\{([^}]+)\}/g, (match, path) => {
    if (path.startsWith('Semantic.')) {
      return match;
    }
    return `{Color.${path}}`;
  });
};

const transformTokenValue = (token: TokenValue): TokenValue => {
  if (token.type === 'color' && typeof token.value === 'string' && token.value.includes('{')) {
    return {
      ...token,
      value: updateColorReferences(token.value),
    };
  }
  return token;
};

const processTokens = (obj: TokensObject): TokensObject => {
  const result: TokensObject = {};

  for (const [key, value] of Object.entries(obj)) {
    if (isTokenValue(value)) {
      result[key] = transformTokenValue(value);
    } else {
      result[key] = processTokens(value as TokensObject);
    }
  }

  return result;
};

const transformTokens = (tokens: TokensObject): TokensObject => {
  const result: TokensObject = {
    Color: {},
  };

  for (const [key, value] of Object.entries(tokens)) {
    if (key === 'Semantic') {
      const transformedValue = processTokens(value as TokensObject);
      for (const [semanticKey, semanticValue] of Object.entries(transformedValue)) {
        result.Color[semanticKey] = semanticValue;
      }
    } else if (hasColorTokens(value)) {
      result.Color[key] = value;
    } else {
      result[key] = value;
    }
  }

  return result;
};

const main = (): void => {
  try {
    const inputPath = path.resolve(__dirname, 'style-dictionary/tokens.json');
    const outputPath = path.resolve(__dirname, 'style-dictionary/tokens.transformed.json');

    const tokens = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    const transformedTokens = transformTokens(tokens);

    fs.writeFileSync(outputPath, JSON.stringify(transformedTokens, null, 2));
    console.log('Tokens successfully transformed and saved to', outputPath);
  } catch (error) {
    console.error('Error processing tokens:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
};

main();
