Handlebars 실습

npm i handlebars -D
npm i handlebars-loader -D

npm i clean-webpack-plugin -D

pm install mini-css-extract-plugin -D

Chunk

npm i jquery -S

최적화

cssnano
npm install cssnano -D

optimize-css-assets-webpack-plugin 사용

terser - 자바스크립트 최적화. webpack설치시 포함 모듈.

npm i terser-webpack-plugin -D

설정파일 분리

npm i webpack-merge -D

npm i webpack-dev-server -D

./node_modules/.bin/webpack-dev-server --config webpack.dev.js
dist 출력 폴더와 상관없이 메모리 상에서 처리

historyApiFallback : false/true or rewrites 등의 설정 가능
historyApiFallback: {
rewrites: [
{ from: /^\/subpage$/, to: "subpage.html" },
{ from: /./, to: "404.html" }
]
}

dev server Options
open
overlay
port

이미지 파일 다루기
npm i file-loader -D

uriloader
//data:mediatype:base64,data

npm i url-loader -D
