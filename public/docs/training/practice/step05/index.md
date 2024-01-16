# 復習 - 修正からdevelopにマージまで行う

今までの復習を兼ねて、以下のことを行なってください。

1. `feature/add-list-item` ブランチをチェックアウトしているか確認してください。  
他のブランチをチェックアウトしている場合、`feature/add-list-item` ブランチをチェックアウトをしてください。

<br>

2. `index.js` を以下の内容に修正しましょう。  
※ 内容は深く理解しなくて大丈夫です。
    <details>
      <summary>index.jsの変更内容</summary>

      ```
      function outputText(message) {
        const unOrderListElem = document.getElementById('list');

        let newListItemElem = document.createElement('li');
        newListItemElem.textContent = message;

        unOrderListElem.appendChild(newListItemElem);
      }

      function fizzBuzz() {
        const val = document.getElementById('input-max-number').value;
        const maxNumber = parseInt(val, 10);

        if(typeof maxNumber !== 'number') {
          console.log('入力内容は数値にしてください。')
          return;
        }

        for(let i = 1; i <= maxNumber; i++) {
          if (i % 15 === 0) {
            outputText('FizzBuzz');
            console.log('FizzBuzz');
          }
          else if (i % 3 === 0) {
            outputText('Fizz');
            console.log('Fizz');
          }
          else if (i % 5 === 0) {
            outputText('Buzz');
            console.log('Buzz')
          }
          else {
            outputText(String(i));
            console.log(i)
          }
        }
      }

      document.addEventListener('DOMContentLoaded', function() {
        const buttonElem = document.getElementById('button');
        buttonElem.addEventListener('click', fizzBuzz, false);
      })
      ```
    </details>
<br>

3. `index.html` を以下の内容に修正しましょう。  
※ 内容は深く理解しなくて大丈夫です。
    <details>
      <summary>index.htmlの変更内容</summary>

      ```
      <!DOCTYPE html>
        <html lang="ja">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Gitカリキュラム</title>
          </head>
          <body>
            <div>
              <h1>Fizz-Buzz</h1>
              <p>コンソールに実行結果が表示されます。</p>
              <div>
                <label for="input-max-number">
                  最大値を入力してください。
                  <input id="input-max-number" type="text">
                </label>
              </div>
              <button id="button" type="button">計算を実行</button>
              <div>
                <ul id="list"></ul>
              </div>
            </div>
            <script src="./index.js"></script>
          </body>
        </html>
      ```
    </details>
<br>

4. 変更したファイルの `状態` をターミナルで確認してください。

<br>

5. 変更ファイル全てを `ステージングエリア` に追加してください。

<br>

6. ステージングエリアに追加したファイルを `コミット` してください。  
コミットメッセージは「FizzBuzzの結果をブラウザに描画する」としてください。

<br>

7. コミットした内容をリモートに `プッシュ` してください。

<br>

8. マージ先をdevelopブランチにして、`PRを作成` してください。  
PRのタイトルや説明はしっかり記載しましょう。

<br>

9. developブランチに `マージ` してください。

<br>

10. ローカルのdevelopブランチを `最新化` してください。

## わからなくなったら

問題の内容は少しだけ現場でも使う表現にしています。  
何を言っているのかわからない場合は、過去のstepの内容を確認してみましょう。  

## Previous Practice

← [ローカルリポジトリにあるブランチの最新化](../step04/index.md)

## Next Practice

<!-- TODO: 作成したらURLを追加する -->
[次へ]() →

## answer

答えは[こちら](/public/docs/training/answer/step02/index.md)を確認してください。

