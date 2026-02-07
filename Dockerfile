FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# le code sera monté via volume
EXPOSE 3000

CMD ["npm", "start"]
