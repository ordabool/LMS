FROM node:20.7

WORKDIR /app

RUN apt-get update
COPY ./app /app/

WORKDIR /app/lms-frontend

RUN npm install


CMD [ "npm", "run", "dev", "--", "--host" ]