# Design Tokens

[デジタル庁 デザインシステム（Figma）](https://www.figma.com/@jpdigitalagency)のデザイントークンを css, scss, js + d.ts のいずれかで扱える仕組みを実装したリポジトリです。
変換されたデザイントークンは npm パッケージとして公開しています。

[![npm version](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens.svg)](https://badge.fury.io/js/@digital-go-jp%2Fdesign-tokens)

## パッケージのインストール

```
$ npm install @digital-go-jp/design-tokens
```

## デザイントークンの変換の仕組み

1. [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)で管理中のデザイントークンを json として出力
2. 出力された json を StyleDictionary で扱いやすい json に変換
3. StyleDictionary を実行し、css, scss, js + d.ts ファイルを出力

## 主なプラグインやライブラリ

- [Tokens Studio for Figma](https://github.com/tokens-studio/figma-plugin)
- [Token Transformer](https://github.com/tokens-studio/figma-plugin/tree/main/token-transformer)
- [StyleDictionary](https://github.com/amzn/style-dictionary)

## 開発

### 環境構築

```
$ npm install
```

### ローカルで css, scss, js+d.ts を生成したい場合

```
# dist以下にcss, scss, js + d.tsが出力されます
$ npm run transform
```

## 注意事項

デザインシステムの変更がまだ多い状況のため、Design Tokens自体の変更が多いです。  
α版と思って利用してください。  
