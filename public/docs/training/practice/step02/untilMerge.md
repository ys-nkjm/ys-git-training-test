# プルリクエストを作成するまで

以下のことをやってみましょう！

1. `feature/check-type`をチェックアウトしているか確認しましょう。  
チェックアウトしていなければ、ブランチを`切り替え`ましょう。
2. index.jsを以下の内容に修正しましょう。  
※ 内容は深く理解しなくて大丈夫です。
    <details>
      <summary>index.jsの変更内容</summary>

      ```
      function fizzBuzz() {
        const val = document.getElementById('input-max-number').value;
        const maxNumber = parseInt(val, 10);

        if(typeof maxNumber !== 'number') {
          console.log('入力内容は数値にしてください。')
          return;
        }

        for(let i = 1; i <= maxNumber; i++) {
          if (i % 15 === 0) {
            console.log('FizzBuzz');
          }
          else if (i % 3 === 0) {
            console.log('Fizz');
          }
          else if (i % 5 === 0) {
            console.log('Buzz');
          }
          else {
            console.log(i);
          }
        }
      }

      document.addEventListener('DOMContentLoaded', function() {
        const buttonElem = document.getElementById('button');
        buttonElem.addEventListener('click', fizzBuzz, false);
      })
      ```
    </details>

3. 変更したファイルの`状態`をターミナルで確認しましょう。
4. 変更したファイルを`ステージングエリア`に追加しましょう。
5. ステージングエリアにある変更ファイルをローカルリポジトリに`コミット`しましょう。  
コミットする際、「型をチェックする」という`コメント`を追加してください。
6. ローカルリポジトリにコミットした内容をリモートリポジトリに`プッシュ`しましょう。

## Previous Practice

← [ブランチを作成するまで](../step01/untilCreateBranch.md)

## Next Practice

<!-- TODO: 作成したらURLを追加する -->
[次へ]() →

## answer

答えは[こちら](/public/docs/training/answer/step02/untilMerge.md)を確認してください。
