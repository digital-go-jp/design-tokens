# Design Tokens

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/@jpdigitalagency)のデザイントークンを css, scss, js + d.ts のいずれかで扱える仕組みを実装したリポジトリです。
変換されたデザイントークンは npm パッケージとして公開しています。  

[![npm version](https://badge.fury.io/js/@takumi-hatta%2Fdesign-tokens-test.svg)](https://badge.fury.io/js/@takumi-hatta%2Fdesign-tokens-test)

npm パッケージを使ったサンプルは[こちら](https://github.com/takumi-hatta-dig/design-tokens-test-examples)です。

## デザイントークンの変換の仕組み

1. [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)で管理中のデザイントークンを json として出力
2. 出力された json を StyleDictionary で扱いやすい json に変換
3. StyleDictionary を実行し、css, scss, js + d.ts ファイルを出力

## 環境構築

```
$ npm install
```

## 運用について

### ローカルで css, scss, js+d.ts を生成したい場合

```
# dist以下にcss, scss, js + d.tsが出力されます
$ npm run transform
```

### figma ブランチについて

[Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin) との連携用のブランチです。  
figma/tokens.json が更新された場合のみ、StyleDictionary 用の json に変換して PR を作成してくれる Actions が実行されます。  
また、スクリプトの作成や更新等もこのブランチを元に行います。

## 主なプラグインやライブラリ

- [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)
- [Token Transformer](https://github.com/tokens-studio/figma-plugin/tree/main/token-transformer)
- [StyleDictionary](https://github.com/amzn/style-dictionary)
