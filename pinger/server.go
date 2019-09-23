package main

import (
	"context"
	"log"
	"net"

	pinger "./proto/pb"
	"google.golang.org/grpc"
)

func main() {
	listener, err := net.Listen("tcp", ":5300")
	if err != nil {
		log.Fatalf("failed to listen: %v\n", err)
		return
	}
	grpcSrv := grpc.NewServer()
	pinger.RegisterPingerServer(grpcSrv, &server{})
	log.Printf("Pinger service is running!")
	grpcSrv.Serve(listener)
}

type server struct{}

func (s *server) Ping(ctx context.Context, req *pinger.Empty) (*pinger.Pong, error) {
	log.Printf("Pinger-Ping")
	pong := &pinger.Pong{
		Text: "pongu",
	}
	return pong, nil
}
