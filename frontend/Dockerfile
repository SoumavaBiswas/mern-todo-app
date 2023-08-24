# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .
COPY src/style.css ./src/style.css

# Build the React app
RUN npm run build

# Serve the built app using a lightweight server
CMD ["npx", "serve", "-s", "build"]
