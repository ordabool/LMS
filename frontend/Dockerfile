FROM node:20.7

# Update packages
RUN apt-get update

# Setup /app as the workdir with src
COPY ./app /app/
WORKDIR /app

# Install npm packages
RUN npm install

# Run the Vite server
CMD [ "npm", "run", "dev", "--", "--host" ]