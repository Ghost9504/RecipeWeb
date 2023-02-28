FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
# CMD npm start
#CMD ["node",  "app.js"]
CMD npm run start
