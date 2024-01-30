FROM node:18
# FROM node:20-slim

# Copy all files to /app directory
ADD . /app

# Set the working directory to /app
WORKDIR /app

# List the contents for debugging
RUN ls /app -al

# Install dependencies and build the discordbot
RUN npm install && npm run build app-a

# Copy specific files to the dist directory
COPY apps/app-a/tsconfig.app.json dist/apps/app-a/


# Expose port 3001
EXPOSE 3000

# List the contents for debugging
RUN ls dist/apps/app-a -al
RUN ls /app -al

# Command to run when the container starts
# CMD npm run start:prod discordbot
CMD ["npm", "run", "start:app-a:prod"]