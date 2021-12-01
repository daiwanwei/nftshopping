#!/bin/bash
cd ./backend/nftshopping-store-api
docker build  -f Dockerfile -t nftshopping-store-api:latest .
cd ../nftshopping-item-api
docker build  -f Dockerfile -t nftshopping-item-api:latest .
cd ../../
docker-compose down
docker-compose up
