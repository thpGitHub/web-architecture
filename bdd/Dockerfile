# Use the official MongoDB image as the base image
FROM mongo:latest

# Ajoute un script de configuration
COPY mongo-init.js /docker-entrypoint-initdb.d/

# Exécute le serveur MongoDB
CMD ["mongod"]

# Expose the default MongoDB port
EXPOSE 27017


