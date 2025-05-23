# Design Tokens

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/community/file/1255349027535859598)のデザイントークン。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens.svg)](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens)

## インストール

```
$ npm install @digital-go-jp/design-tokens
```

## 使用例

### CSS

CSS 向けには `tokens.css` および `tokens-simple.css` を提供しています。`tokens.css` は全てのデザイントークンを含みます。`tokens-simple.css` はデザイントークンのサブセットで、色、フォントおよびエレベーションのみを含みます。

`tokens.css` の使用例として [examples](./examples/) ディレクトリを参照してください。

### JavaScript

[tailwind-theme-plugin](https://github.com/digital-go-jp/tailwind-theme-plugin) を参照してください。

## バージョン対応表

| Figma のバージョン | パッケージのバージョン |
| ------------------ | ---------------------- |
| 2.3.0              | 1.0.4                  |
| 2.2.0              | 1.0.4                  |
| 2.1.2              | 1.0.4                  |
| 2.1.1              | 1.0.4                  |
| 2.1.0              | 1.0.4                  |
| 2.0.4              | 1.0.4                  |
| 2.0.3              | 1.0.0                  |
| 2.0.2              | 0.1.7                  |
| 2.0.1              | 0.1.6                  |
| 1.4.3              | 0.1.6                  |

## 仕組み

1. Tokens Studio for Figma でデザイントークンを管理し、GitHub リポジトリと連携をします。
2. Figma 上でデザイントークンに更新があったら、連携先リポジトリの特定のブランチにプッシュをします。
3. GitHub の Release をトリガーに GitHub Actions（`.github/workflows/publish.yml`）が実行されます。この Actions では Style Dictionary を実行し、デザイントークン（json）を CSS および JavaScript で扱えるようにビルドし npm パッケージとしてリリースをします。

### 参考

- [Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma)
  - [Tokens Studio for Figma の GitHub 連携](https://docs.tokens.studio/token-storage-and-sync/sync-provider-github)
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)

## 求人情報

デジタル庁デザインシステムのチームメンバーを募集しています。行政のデジタル環境を支える基盤づくりに、あなたのスキルや経験を活かしてみませんか？　求人ページからご応募ください。

- [プロダクトデザイナー（デザインシステム） - デジタル庁](https://herp.careers/v1/digitalsaiyo/IjQ4ovK9BFPl)
