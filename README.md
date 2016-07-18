Build app docker image
`docker build -t docker-demo .`

Run Redis exposed to host
`docker run -d --name redis -p 6379:6379 redis:3.2.0-alpine`

Run app exposed to host
`docker run -d --name docker-demo -p 3000:3000 --link redis:redis docker-demo`
