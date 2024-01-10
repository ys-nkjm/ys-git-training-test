# リモートリポジトリにプッシュ

各Stepごとに答えを記載します。

<br>

## `feature/check-type`をチェックアウトしているか確認しましょう。

今どこのブランチにいるかは、以下のコマンドをターミナルに入力することで確認できます。

```
% git branch
```

もし`feature/check-type`をチェックアウトしていなければ以下のコマンドを実行してください。

```
% git checkout feature/check-type
```

以下のように表示されていれば成功です。

```
  develop
* feature/check-type
  main
```
<br>

## 変更したファイルの`状態`を確認しましょう。

変更したファイルの状態を確認するには以下のコマンドを実行してください。

```
% git status
```

以下のように表示されれば成功です。

```
On branch feature/check-type
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.js

no changes added to commit (use "git add" and/or "git commit -a")
```

## 変更したファイルを`ステージングエリア`に追加しましょう。

以下のコマンドで変更したファイルをステージングエリアに追加することができます。  

下記は特定のファイルのみをステージングエリアに追加します。

```
% git add [directory/**/file]
```

下記は変更したファイル全てをステージングエリアに追加します。

```
% git add .
```

`add`コマンドを実行した後に、再度 `git status` で状態を確認してみましょう。  
以下のように表示されれば、変更したファイルがステージングエリアに追加されています。  

```
On branch feature/check-type
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   index.js
```
<br>

### おまけ：`git restore`について

git restoreは`すでにローカルリポジトリに存在するファイル`に対して、変更の取り消しを行います。

```
% git restore [directory/**/file]
```

新規で作成したファイルに対しては、実行できません。  
**(TODO: 新規で作成したファイルの変更を破棄する方法を記載すること。)**

<br>

## ステージングエリアにある変更ファイルをローカルリポジトリに`コミット`しましょう。

以下のコマンドでステージングエリアからローカルリポジトリにコミットすることができます。  
今回の条件として、 **コミットする際、「型をチェックする」という`コメント`を追加してください。** とあります。以下のように記載することで、コミットにコメントをつけることが可能です。

```
% git commit -m "型をチェックする"
```

以下のようなログが流れたら成功です。

```
[feature/check-type 5a6d05b] 型をチェックする
 1 file changed, 9 insertions(+), 4 deletions(-)
```
<br>

## ローカルリポジトリにコミットした内容をリモートリポジトリに`プッシュ`しましょう。

以下のコマンドで、ローカルリポジトリからリモートリポジトリにプッシュすることができます。

```
% git push origin [branch_name]
```

または以下でも問題ありません。

```
% git push origin HEAD
```

以下に似たログが流れたら成功です。

```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 455 bytes | 455.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: Create a pull request for 'feature/check-type' on GitHub by visiting:
remote:      https://github.com/〇〇/ys-git-training-fizz-buzz/pull/new/feature/check-type
remote:
To github.com:〇〇/ys-git-training-fizz-buzz.git
 * [new branch]      HEAD -> feature/check-type
```

HEADは今作業しているブランチを表しています。

<br>

## practice

[step02の練習問題](../../practice/step02/index.md) へ戻る
