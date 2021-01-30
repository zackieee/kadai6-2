# kadai6-2
CORSを理解する クライアント側プログラム

## 実行方法
1. ローカルにクローン

2. クローンフォルダに移動
```
npm install
```

3. 下記urlへの代入URLをngorkで実行中のURLに変更する(kadai6リポジトリのREADME.md実施時に控えたURL)  
[kadai6-2]>[views]>[index.ejs] 7行目  

```
const url = 'https://6f07da5bcf83.ngrok.io';
```

4. 下記コマンド実行
```
$ node ./bin/www
```

5. ブラウザで`http://localhost:3001`にアクセスする  

## ボタン押下時の動作について  
`http://localhost:3001`ページ表示時の動作  

[シンプルリクエスト]   
　メソッド：POST　コンテンツタイプ：application/x-www-form-urlencoded  
　→　メソッドおよび、コンテンツタイプともにシンプルリクエストの条件に合致しているため、プリフライトリクエストは送信されない  
 　　結果:POST処理が正常に終了しました

[プリフライトが必要]  
　メソッド：POST　コンテンツタイプ：application/json  
　→ コンテンツタイプがシンプルリクエストの条件に合致しないため、プリフライトリクエストが送信される  
 　　結果:POST処理が正常に終了しました

[PUTメソッドの送信]  
　メソッド：PUT　コンテンツタイプ：application/json  
　→　kadai6で非許可メソッドのため、プリフライトリクエストが送信された後、PUTメソッドの送信は抑止（CORSエラーと判断）される  
 　　エラー：${各ブラウザごとのCORS違反時のエラーメッセージ等}
