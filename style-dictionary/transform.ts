import * as StyleDictionary from 'style-dictionary';
import config from './config.json';

StyleDictionary.registerTransform({
  name: 'px-rem-transformer',
  type: 'value',
  matcher: (token) => {
    return token.name.includes('font-size') || token.name.includes('FontSize');
  },
  transformer: (token) => {
    const px = Number(token.value.replace('px', ''));
    const rem = (1 / 16) * px + 'rem';
    if (token.name.includes('font-size') || token.name.includes('FontSize')) {
      return rem;
    }
    return token.value;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'da/css',
  transforms: (StyleDictionary.transformGroup['css'] ?? []).concat(['px-rem-transformer']),
});

StyleDictionary.registerTransformGroup({
  name: 'da/scss',
  transforms: (StyleDictionary.transformGroup['scss'] ?? []).concat(['px-rem-transformer']),
});

StyleDictionary.registerTransformGroup({
  name: 'da/ts',
  transforms: (StyleDictionary.transformGroup['js'] ?? []).concat(['px-rem-transformer']),
});

StyleDictionary.registerFilter({
  name: 'da/filter-tokens',
  matcher: (token) => {
    if (token.name.includes('token-set') || token.name.includes('TokenSet')) {
      return false;
    }

    return true;
  },
});

StyleDictionary.extend(config).buildAllPlatforms();
