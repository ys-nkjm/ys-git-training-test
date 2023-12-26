# プルリクエスト作成からマージするまで

各Stepごとに答えを記載します。

## Githubで `new pull request` を作成してください。

作成方法は2パターンあります。

### push後すぐ作成する場合

push後すぐであれば、以下のようなUIが表示されているので、そこから作成が可能です。

![プルリクエスト作成01](/public/images/training/step03/answer-step03-01.png)

### ブランチから作成

`branches` のタブから、ブランチ一覧を表示します。  
プルリクエストを作成したいブランチの３点リーダーをクリックすると `New pull request` の項目があります。  
そこをクリックすることで、新規プルリクエストを作成することができます。

![プルリクエスト作成02](/public/images/training/step03/answer-step03-02.png)

## マージ先を `develop` に変更、プルリクエスト作成完了まで行いましょう。

画像赤枠の箇所から、developに選択しましょう。

![ブランチ変更](/public/images/training/step03/answer-step03-03.png)

タイトルや説明は記載してあればOKとします。  
内容を記載できたら、`create pull request` でプルリクエストを作成します。

![プルリクエスト作成](/public/images/training/step03/answer-step03-04.png)

### おまけ - DraftのPRを作成する

実装は完了していないが、相談したい・意見を欲しいという時は `create pull request` 横の「▼」をクリックしてください。  
`create draft pull request` を選択して、 `draft pull request` をクリックしてください。

![DraftPRを作成](/public/images/training/step03/answer-step03-04-01.png)

これでレビューはできるが、マージはできないプルリクエストを作成できます。

## Githubの操作で `マージ` してください。

プルリクエストの作成が完了したら `merge pull request` をクリックしてください。  
マージするタイトルやマージ先に問題がないことを確認できたら `confirm merge` をクリックしてください。

![merge pull request](/public/images/training/step03/answer-step03-05.png)
![merge pull request](/public/images/training/step03/answer-step03-06.png)

## practice

[step03の練習問題](../../practice/step03/untilMerge.md) へ戻る
