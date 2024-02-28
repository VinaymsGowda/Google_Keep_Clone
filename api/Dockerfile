FROM node:17-alpine
WORKDIR /app
COPY package.json .
RUN npm install -g nodemon
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "nodemon","index.js" ]

