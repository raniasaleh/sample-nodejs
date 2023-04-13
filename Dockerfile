FROM registry.access.redhat.com/ubi8/nodejs-16:1-90
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT 3002
CMD [ "node", "server.js" ]
