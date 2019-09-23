const grpc = require('grpc')
const pinger_grpc_pb = require('./proto/pb/pinger_grpc_pb')
const pinger_pb = require('./proto/pb/pinger_pb')

const client = new pinger_grpc_pb.PingerClient(
  '127.0.0.1:5300',
  grpc.credentials.createInsecure(),
);

const req = new pinger_pb.Empty();
//req.setId('book1')

client.ping(req, function(error, result) {
  if (error) console.log('Error: ', error);
  else console.log(result.toObject());
});
