FROM node

RUN mkdir -p /var/www/docker-demo

WORKDIR /var/www/docker-demo

COPY package.json package.json

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["/bin/bash", "-c", "npm start"]
