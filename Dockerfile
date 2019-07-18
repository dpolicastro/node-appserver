FROM node:8 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

RUN npm run build

COPY ./src/templates ./dist/templates

CMD ["npm", "start"]
