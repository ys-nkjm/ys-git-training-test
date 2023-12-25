# ブランチを作成するまで

各Stepごとに答えを記載します。

## `mainブランチ`をチェックアウトしていることを確認しましょう

今どこのブランチにいるかは、以下のコマンドをターミナルに入力することで確認できます。

```
git branch
```

以下の内容が表示されていれば、成功です。

```
  develop
* main
```

## `developブランチ`をチェックアウトしましょう

`mainブランチ`から`developブランチ`に切り替えるには、以下のコマンドをターミナルに入力することでブランチを切り替えることができます。

```
git checkout [branch_name]
```

developブランチに切り替えるコマンド

```
git checkout develop
```

以下の内容が表示されていれば、成功です。

```
* develop
  main
```

## `developブランチ`から2つ新しいブランチを作成しましょう。  

`developブランチ`から新しいブランチを作成する際は、以下のコマンドをターミナルに入力します。  
ブランチの作成は1つずつ行います。複数まとめて作成はできないです。

```
git checkout -b [branch_name]
```

developブランチからブランチを作成

```
git checkout -b feature/check-type
```

`feature/check-typeブランチ`が作成されていれば成功です。  

```
  develop
* feature/check-type
  main
```

もう1つ作成する必要があります。`developブランチ`にチェックアウトしてから、`feature/add-list-itemブランチ`を作成しましょう。

## Practice

[step01の練習問題](../../practice/step01/untilCreateBranch.md) へ戻る
