mkdir webpack-practice
cd webpack-practice

npm init -y

npm install webpack webpack-cli --save-dev

npm install style-loader css-loader --save-dev

npm install normalize.css --save-dev

npm i html-webpack-plugin -D

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

Saas Loader
npm i sass-loader node-sass -D

loader는 배열이 큰 값부터 작은 값 순으로 체이닝

npm i postcss postcss-loader autoprefixer -D

npm i stylelint stylelint-scss stylelint-webpack-plugin stylelint-config-standard -D

npm i @babel/cli @babel/core @babel/preset-env babel-loader -D
