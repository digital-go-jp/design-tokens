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

const sd = new StyleDictionary('style-dictionary/config.json');

const run = async (sd: StyleDictionary) => {
  await sd.hasInitialized;
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

run(sd);
