# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory in the Docker image
WORKDIR /app

# Copy package.json and package-lock.json to the Docker image
COPY package*.json ./

# Install the application dependencies in the Docker image
RUN npm install

# Copy the wait-for-it.sh script to the Docker image
COPY wait-for-it.sh ./wait-for-it.sh

# Make the script executable
RUN chmod +x ./wait-for-it.sh

# Copy the rest of the application to the Docker image
COPY . .

# Expose port 3030 for the application
EXPOSE 3030

#ENV ADRESS=0.0.0.0 PORT=3030

# Define the command to run the application
CMD ["./wait-for-it.sh", "mongo:27017", "--", "npm", "start"]
#CMD ["npm", "start"]