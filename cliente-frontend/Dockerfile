FROM node:16.8.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@8.1.3 && npm ci --silent && npm install react-scripts@3.4.1 -g --silent
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]

