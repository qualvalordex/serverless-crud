FROM node:14-alpine

WORKDIR /home/serverless

RUN npm install -g serverless
RUN npm install -g sequelize-cli

EXPOSE 3000

CMD tail -f /dev/null