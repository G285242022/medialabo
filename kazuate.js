// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// ボタンを押したら hantei() を呼び出すイベント処理をする
document.getElementById('submit').addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  let yoso = parseInt(document.getElementById('guess').value);

  // kotae と yoso が一致するかどうか調べて結果を出力
  if (kotae === yoso) {
    resultElement.textContent = '正解です．おめでとう!';
  } else {
    // 回答回数をカウントアップ
    kaisu++;

    // 回答回数と予想の結果を表示
    kaisuElement.textContent = kaisu;
    answerElement.textContent = yoso;
    resultElement.textContent = kaisu + '回目の予想: ' + yoso;

    // 3回まちがった場合の処理
    if (kaisu === 3) {
      resultElement.textContent = ' まちがい．残念でした。答えは ' + kotae + ' です．';
    } else if (kaisu >= 4) {
      resultElement.textContent = ' 答えは ' + kotae + ' でした．すでにゲームは終わっています';
    } else {
      // 答えが大きいか小さいかを表示
      if (kotae > yoso) {
        resultElement.textContent = ' まちがい．答えはもっと大きいですよ';
      } else {
        resultElement.textContent = ' まちがい．答えはもっと小さいですよ';
      }
    }
  }
}

// 予想のメッセージをHTMLに出力するように修正
const kaisuElement = document.getElementById('kaisu');
const answerElement = document.getElementById('answer');
const resultElement = document.getElementById('result');






