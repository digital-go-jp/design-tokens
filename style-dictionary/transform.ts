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

StyleDictionary.registerTransform({
  name: 'shadow',
  type: 'value',
  matcher: function (prop) {
    return prop.type === 'boxShadow';
  },
  transformer: function (token) {
    const v1 = token.value[0];
    const v2 = token.value[1];

    return `${v1.x} ${v1.y} ${v1.blur} ${v1.spread} ${v1.color}, ${v2.x} ${v2.y} ${v2.blur} ${v2.spread} ${v2.color}`;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'da/css',
  transforms: (StyleDictionary.transformGroup['css'] ?? []).concat([
    'px-rem-transformer',
    'shadow',
  ]),
});

StyleDictionary.registerTransformGroup({
  name: 'da/scss',
  transforms: (StyleDictionary.transformGroup['scss'] ?? []).concat([
    'px-rem-transformer',
    'shadow',
  ]),
});

StyleDictionary.registerTransformGroup({
  name: 'da/ts',
  transforms: (StyleDictionary.transformGroup['js'] ?? []).concat(['px-rem-transformer', 'shadow']),
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
