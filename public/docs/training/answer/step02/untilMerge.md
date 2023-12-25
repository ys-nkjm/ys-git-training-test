# プルリクエストを作成するまで

各Stepごとに答えを記載します。

## `feature/check-type`をチェックアウトしているか確認しましょう。

今どこのブランチにいるかは、以下のコマンドをターミナルに入力することで確認できます。

```
git branch
```

もし`feature/check-type`をチェックアウトしていなければ以下のコマンドを実行してください。

```
git checkout feature/check-type
```

以下のように表示されていれば成功です。

```
  develop
* feature/check-type
  main
```

## 変更したファイルの`状態`を確認しましょう。

変更したファイルの状態を確認するには以下のコマンドを実行してください。

```
git status
```

以下のように表示されれば成功です。

```
On branch feature/check-type
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.js

no changes added to commit (use "git add" and/or "git commit -a")
```

## 変更したファイルを`ステージングエリア`に追加しましょう。

以下のコマンドで変更したファイルをステージングエリアに追加することができます。  

下記は特定のファイルのみをステージングエリアに追加します。

```
git add [directory/**/file]
```

下記は変更したファイル全てをステージングエリアに追加します。

```
git add .
```

`add`コマンドを実行した後に、再度 `git status` で状態を確認してみましょう。  
以下のように表示されれば、変更したファイルがステージングエリアに追加されています。  

```
On branch feature/check-type
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.js
```

### おまけ：`git restore`について

git restoreは`すでにローカルリポジトリに存在するファイル`に対して、変更の取り消しを行います。

```
git restore [directory/**/file]
```

新規で作成したファイルに対しては、実行できません。  
**(TODO: 新規で作成したファイルの変更を破棄する方法を記載すること。)**

## ステージングエリアにある変更ファイルをローカルリポジトリに`コミット`しましょう。

以下のコマンドでステージングエリアからローカルリポジトリにコミットすることができます。  
今回の条件として、 **コミットする際、「型をチェックする」という`コメント`を追加してください。** とあります。以下のように記載することで、コミットにコメントをつけることが可能です。

```
git commit -m "型をチェックする"
```

## ローカルリポジトリにコミットした内容をリモートリポジトリに`プッシュ`しましょう。

以下のコマンドで、ローカルリポジトリからリモートリポジトリにプッシュすることができます。

```
git push origin [branch_name]
```

または以下でも問題ありません。

```
git push origin HEAD
```

HEADは今作業しているブランチを表しています。

## practice

[練習問題](../../practice/step02/untilMerge.md) へ戻る
