const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')
const PROTO_PATH = __dirname + '/hello.proto'
 
const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    }
)
const helloProto = grpc.loadPackageDefinition(packageDefinition)
 
const client = new helloProto.hello.Greeter('127.0.0.1:50051', grpc.credentials.createInsecure())
 
client.SayHello({ id: 1, name: 'TAROU' }, (error, response) => {
    if (!error) {
        console.log(response.message) // HELLO! ID:1TAROU
    } else {
        console.error(error)
    }
})
