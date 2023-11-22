FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the wait-for-it.sh script to the Docker image
COPY wait-for-it.sh ./wait-for-it.sh

# Make the script executable
RUN chmod +x ./wait-for-it.sh

COPY . .

# EXPOSE 2368
EXPOSE 3000

CMD ["npm", "start"]
