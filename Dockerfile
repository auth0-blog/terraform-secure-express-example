FROM node:14.0.0

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]