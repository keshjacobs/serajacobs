FROM node:latest
WORKDIR /serajacobs
COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 7000
CMD [ "npm", "run", "start" ]