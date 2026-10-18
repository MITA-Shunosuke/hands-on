# hands-on/AWS/typescript-workshop

## 概要

AWS CDKおよびtypescriptについてのハンズオンです。

## 参照元

- [TypeScript の基礎から始める AWS CDK 開発入門](https://catalog.workshops.aws/typescript-and-cdk-for-beginner/ja-JP)
- 2026/10/16開始

## 使用環境

- Node.js：v24.22.0
- NPM：11.19.1
- NPX：11.19.1
- AWS CLI：2.36.18
- AWS CDK：2.1145.0
- VSCode: 1.142.0

## メモ

- TypeScriptの基礎
  - プロジェクトの作成
    - `npx ts-node helloWorld.ts`を実行したところ、`TypeError: Cannot read properties of undefined (reading 'fileExists')`というエラーにより実行できなかった。[同エラー名の記事](https://zenn.dev/tomoboo/articles/2f792c3e1d1b5d)に従い、npmのバージョンを下げて無事実行できた。(2026/10/16)。
  - TypeScriptで書かれたファイルの実行の仕方
    - Pythonを触っていたときは右上の「実行」ボタンで実行していたのだが、TypeScriptでは（だから？）表示されず実行のやり方がわからなかった。TSはコンソール上で実行の操作を行うようだ。
      - やり方1:コンパイルと実行を同時に行う
        - `npx ts-node <TSファイルの場所>`
      - やり方2：コンパイルと実行の二つの手順をコンソールにて行う
        - コンパイル（TypeScriptのコードをコンパイルするとJavaScriptのプログラムになる）：`npx tsc`
          - [公式](https://code.visualstudio.com/docs/typescript/typescript-tutorial)のやり方ではtsconfig.jsonに記述したJavaSriptの出力先が無視される（[参考](https://qiita.com/RyosukeSomeya/items/3ef53eb42b890f419472)）
        - 実行：`node <JSファイルの場所>`
          - [公式](https://code.visualstudio.com/docs/typescript/typescript-tutorial)を参照
  