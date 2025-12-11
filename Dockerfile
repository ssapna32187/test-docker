# Lightweight Node.js 18 image
FROM node:18-alpine

# App directory
WORKDIR /usr/src/app

# Install only what's needed first (better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# App will run on this port
EXPOSE 3000

# Start the server with clean, readable logs
CMD ["npm", "start"]
