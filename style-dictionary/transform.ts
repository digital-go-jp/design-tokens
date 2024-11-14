import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

StyleDictionary.registerTransform({
  name: 'da/css/transform-color-name',
  type: 'name',
  transform: (token) => {
    if (token.type === 'color') {
      const name = token.name
        .split('-')
        .filter((part) => part.toLowerCase() !== 'semantic')
        .join('-');
      return `color-${name}`;
    }

    return token.name;
  },
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

const sd = new StyleDictionary('style-dictionary/config.json');

const run = async (sd: StyleDictionary) => {
  await sd.hasInitialized;
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

run(sd);
