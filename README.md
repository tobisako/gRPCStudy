# gRPCStudy

## gRPCSimple
gPRC @grpc/proto-loader node.js
https://noumenon-th.net/programming/2019/07/05/grpc/

### 実行
$ node server.js
$ node client.js
-----------------------------------
HELLO! ID:1TAROU
-----------------------------------

## node-typescript-grpc-example
https://github.com/daisaru11/node-typescript-grpc-example

Node.jsとTypeScriptでgRPCを動かす
https://qiita.com/daisaru11/items/67366061f7244378639c

### 実行
$ yarn ts-node src/server.ts
$ yarn ts-node src/client.ts
-----------------------------------
{ book: { title: 'Book1', author: 'Author1' } }
-----------------------------------


## pinger
https://tech.smartcamp.co.jp/entry/2019/03/28/175137
  ※clientをrails->nodeへ変更

### 実行
$ go run golang/server.go
$ yarn start
-----------------------------------
{ text: 'pongu' }
-----------------------------------

Node.jsのコード生成をおこなうには、grpc-toolsというnpmパッケージを使用します。
これには、 protoc と その gRPC Node プラグインが同梱されています。

$ npm install -g grpc-tools
 => grpc_tools_node_protoc
$ ./protoc.sh

※go側作成
$ protoc -I ./proto pinger.proto --go_out=plugins=grpc:.
