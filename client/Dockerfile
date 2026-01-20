# client/Dockerfile

# Use Node 18 (LTS version)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install basic compatibility libraries
RUN apk add --no-cache libc6-compat

# Default command: Run development script
CMD ["npm", "run", "dev"]