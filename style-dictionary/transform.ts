import * as StyleDictionary from 'style-dictionary';
import config from './config.json';

StyleDictionary.registerTransformGroup({
  name: 'da/css',
  transforms: StyleDictionary.transformGroup['css'] ?? [],
});

StyleDictionary.registerTransformGroup({
  name: 'da/scss',
  transforms: StyleDictionary.transformGroup['scss'] ?? [],
});

StyleDictionary.registerTransformGroup({
  name: 'da/ts',
  transforms: StyleDictionary.transformGroup['js'] ?? [],
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
