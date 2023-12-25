# Design Tokens

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/community/file/1255349027535859598)のデザイントークンです。
CSS, JavaScript のいずれかで扱えます。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens.svg)](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens)

## パッケージのインストール

```
$ npm install @digital-go-jp/design-tokens
```

## 使用例

### CSS

```css
@import url("node_modules/@digital-go-jp/design-tokens/dist/tokens.css");

.std-45B-4 {
  font-size: var(--font-size-45);
  font-weight: var(--font-weight-700);
  line-height: var(--line-height-1-4);
  letter-spacing: var(--letter-spacing-0-1125);
}
```

### JavaScript

```ts
import plugin from "tailwindcss/plugin";
import tokens from "@digital-go-jp/design-tokens";

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
        "std-45B-4": [
          tokens.FontSize["48"].value,
          {
            fontWeight: tokens.FontWeight["700"].value,
            lineHeight: tokens.LineHeight["1_4"].value,
            letterSpacing: tokens.LetterSpacing["0_1125"].value,
          },
        ],
      },
    },
  },
});

export default myPlugin;
```

## Figma（デザインシステム）とのバージョン対応表

| Figma のバージョン | npm のバージョン |
| ------------------ | ---------------- |
| 1.4.1              | 0.1.2            |
| 1.4.0              | 0.0.16           |

## 関連パッケージ

- @digital-go-jp/tailwind-theme-plugin
  - [npm](https://www.npmjs.com/package/@digital-go-jp/tailwind-theme-plugin)
  - [GitHub](https://github.com/digital-go-jp/tailwind-theme-plugin)
