FROM node:19

WORKDIR /code

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","start"]