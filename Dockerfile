FROM node:14
RUN npm install -g serve # A simple webserver
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]