# FROM node:14

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm install -g serve

# RUN npm run build

# EXPOSE 3000

# CMD ["serve", "-s", "build", "-l", "3000"]

# Utiliser une image de base avec Nginx préinstallé
FROM nginx:alpine

# Supprimer la configuration par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copier le fichier de configuration personnalisé
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers de l'application dans le répertoire de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
