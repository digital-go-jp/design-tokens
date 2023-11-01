# Design Tokens

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/community/file/1255349027535859598)のデザイントークンを CSS, JavaScript のいずれかで扱える仕組みを実装したリポジトリです。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens.svg)](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens)

## パッケージのインストール

```
$ npm install @digital-go-jp/design-tokens
```

## 使用例

### CSS

```css
@import url("node_modules/@digital-go-jp/design-tokens/dist/tokens.css");

.button {
  padding: 16px;
  font-size: var(--text-button-font-size)
  font-weight: var(--text-button-font-weight);
  line-height: var(--text-button-line-height);
  letter-spacing: var(--text-button-letter-spacing)
  background-color: var(--color-light-button-normal);
  border-radius: var(--border-radius-sm);
  color: var(--light-text-on-fill);
}

.button:hover {
  background-color: var(--light-button-hover);
}
```

### JavaScript

```ts
import plugin from 'tailwindcss/plugin';
import tokens from '@digital-go-jp/design-tokens';

const myPlugin = plugin(() => {}, {
  theme: {
    extend: {
      colors: {
        cyan: {
          50: tokens.Color.Primitive.Cyan[50].value,
          100: tokens.Color.Primitive.Cyan[100].value,
          200: tokens.Color.Primitive.Cyan[200].value,
          300: tokens.Color.Primitive.Cyan[300].value,
          400: tokens.Color.Primitive.Cyan[400].value,
          500: tokens.Color.Primitive.Cyan[500].value,
          600: tokens.Color.Primitive.Cyan[600].value,
          700: tokens.Color.Primitive.Cyan[700].value,
          800: tokens.Color.Primitive.Cyan[800].value,
          900: tokens.Color.Primitive.Cyan[900].value,
          1000: tokens.Color.Primitive.Cyan[1000].value,
          1100: tokens.Color.Primitive.Cyan[1100].value,
          1200: tokens.Color.Primitive.Cyan[1200].value,
        },
      },
      fontSize: {
        heading1: [
          tokens.Text.FontSize['48'].value,
          {
            fontWeight: tokens.FontWeight.Bold.value,
            lineHeight: tokens.LineHeight['1-5'].value,
            letterSpacing: tokens.LetterSpacing.md.value,
          },
        ],
      },
    },
  },
});

export default myPlugin;
```

## Figma（デザインシステム）とのバージョン対応表

| Figmaのバージョン | npmのバージョン |
| ----------------- | --------------- |
| 1.4.0             | 0.0.16          |
| 1.3.4             | 0.0.13          |

## デザイントークンの変換の仕組み

1. [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)でデザイントークンを json として出力
2. 出力された json を StyleDictionary で扱いやすい json に変換
3. StyleDictionary を実行し、css, js ファイルを出力

## 主な利用プラグインやライブラリ

- [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)
- [Token Transformer](https://github.com/tokens-studio/figma-plugin/tree/main/token-transformer)
- [StyleDictionary](https://github.com/amzn/style-dictionary)
