# hands-on/AWS/typescript-workshop

## 概要
AWS CDKおよびtypescriptについてのハンズオンです。

## 参照元
- [TypeScript の基礎から始める AWS CDK 開発入門](https://catalog.workshops.aws/typescript-and-cdk-for-beginner/ja-JP)
- 2026/10/16開始


## メモ
- TypeScriptの基礎
  - プロジェクトの作成
    - `npx ts-node helloWorld.ts`を実行したところ、`TypeError: Cannot read properties of undefined (reading 'fileExists')`というエラーにより実行できなかった。[同エラー名の記事](https://zenn.dev/tomoboo/articles/2f792c3e1d1b5d)に従い、npmのバージョンを下げて無事実行できた。(2026/10/16)。