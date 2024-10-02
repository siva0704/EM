# Use an official Nginx runtime as a parent image
FROM nginx:1.17.1-alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built Angular app to Nginx's html directory
COPY /dist/emileage /usr/share/nginx/html


# FROM nginx:alpine
# COPY /dist/emileage /usr/share/nginx/html