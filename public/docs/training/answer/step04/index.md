# ローカルリポジトリにあるブランチの最新化

各Stepごとに答えを記載します。

<br>

## ローカルにある`develop`ブランチを、リモートリポジトリにあるdevelopと同様に最新化してください。

developブランチをチェックアウトしているか確認します。

```
% git branch
```

以下の一覧が返ってきます。developに「*」がついていればOKです。

```
* develop
  feature/check-type
  main
```

最新化する上で方法は2つありますが、行っていることは同じです。

<br>

### git pullのみ

以下のコマンドでdevelopブランチをリモートと同じ状態にできます。

```
% git pull origin develop
```
<!-- TODO: 実行結果を記載する -->

#### おまけ

mainブランチやdevelopブランチなど、共通のブランチに対して

```
% git pull
```

だけでも最新の状態にする方法があります。  
詳しくは[upstream](./upstream.md)をご確認ください。

<br>

### git fetchを使う

まずローカルリポジトリとリモートリポジトリをの履歴を同期します。

```
% git fetch --prune
```
<!-- TODO: 実行結果を記載する -->

リモートのdevelopブランチをローカルのdevelopブランチにマージします。

```
% git merge origin develop
```
<!-- TODO: 実行結果を記載する -->

<br>

## マージして不要となった`feature/check-type`ブランチをローカルリポジトリから削除してください。

以下のコマンドを実行して削除してください。

```
% git branch -D feature/check-type
```

以下のような文章が返ってきます。

```
Deleted branch feature/check-type (was [commitID]).
```
<br>

## `feature/add-list-item`ブランチにローカルの`developブランチ`を取り込んでください。

2パターンがあります。どちらが絶対良いということはありません。  
現場の進め方に合わせて選択してください。  

以下のコマンドを実行する前に、ブランチを切り替えましょう。

```
% git checkout feature/add-list-item
```
<br>

### mergeする方法

以下のコマンドを実行することで、developの内容を取り込むことができます。

```
% git merge develop
```
<!-- TODO: 実行結果を記載する -->
<br>

### rebaseする方法

以下のコマンドを実行することで、developの内容を取り込むことができます。

```
% git rebase develop
```

以下のような文章が返ってきたらOKです

```
Successfully rebased and updated refs/heads/develop
```
<br>

## practice

[step03の練習問題](../../practice/step04/index.md) へ戻る
