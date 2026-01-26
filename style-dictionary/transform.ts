import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary, {
  excludeParentKeys: true,
});

StyleDictionary.registerFilter({
  name: 'tokens-filter',
  filter: (token) => {
    if (token.path.length === 0) {
      return true;
    }
    return token.path[0] !== 'tokenSetOrder';
  },
});

StyleDictionary.registerFilter({
  name: 'tokens-simple-filter',
  filter: (token) => {
    if (token.path.length === 0) {
      return true;
    }
    if (token.path[0] === 'tokenSetOrder') {
      return false;
    }

    // Exclude specified properties
    const excludedTypes = ['fontWeight', 'fontSize', 'lineHeight', 'dimension'];
    return !excludedTypes.includes(token.$type || '');
  },
});

const sd = new StyleDictionary('style-dictionary/config.json');

const run = async (sd: StyleDictionary) => {
  await sd.hasInitialized;
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

run(sd);
