# convers
application de Conversion de Devises

## Description

Ceci est une application web simple qui convertit des devises en utilisant des taux de change prédéfinis. L'application se compose d'un front-end HTML, CSS pour le style, et JavaScript pour la fonctionnalité. Elle inclut également une configuration Docker pour la conteneurisation et une configuration CI/CD utilisant GitHub Actions.


## Fonctionnalités

- Conversion entre USD, EUR et GBP.
- Gestion des entrées invalides et affichage des messages appropriés.
- Assure que la conversion n'est pas effectuée avec la même devise.

## Installation

1. **Cloner le dépôt :**

    ```bash
    git clone https://github.com/wafooliver/convers.git
    cd convers
    ```

2. **Installer les dépendances :**

    Si vous travaillez directement avec le code :

    ```bash
    npm install
    ```

## Utilisation

1. **Exécuter l'application en local :**

    - Ouvrez `index.html` dans votre navigateur web pour interagir avec l'application.

2. **Configurer les taux de change :**

    Les taux de change sont codés en dur dans `scripts.js`. Modifiez l'objet `exchangeRates` dans `scripts.js` si nécessaire.

## Exécution des Tests

Pour exécuter les tests en local :

1. **Assurez-vous d'avoir les dépendances nécessaires :**

    ```bash
    npm install
    ```

2. **Exécutez les tests avec Jest :**

    ```bash
    npm test
    ```

## Construction de l'Image Docker

1. **Créer un Dockerfile :**

    Assurez-vous d'avoir un fichier `Dockerfile` à la racine de votre projet avec le contenu suivant :

    ```dockerfile
    # Utiliser l'image officielle Nginx
    FROM nginx:alpine
    
    # Copier les fichiers statiques dans le répertoire Nginx
    COPY . /usr/share/nginx/html
    
    # Exposer le port 80
    EXPOSE 80
    ```

2. **Construire l'image Docker :**

    ```bash
    docker build -t convers:latest .
    ```

## Déploiement de l'Application

1. **Pousser l'image Docker sur Docker Hub :**

    ```bash
    docker tag convers:latest wafooliver/convers:latest
    docker push wafooliver/convers:latest
    ```

2. **Déployer l'image Docker :**

    Déployez l'image sur votre serveur en utilisant des commandes Docker ou une plateforme de déploiement. Exemple en utilisant SSH :

    ```bash
    ssh utilisateur@votre-serveur "docker pull wafoolivier/convers:latest && docker run -d -p 80:80 wafooliver/convers:latest"
    ```

## Pipeline CI/CD

Le pipeline CI/CD est configuré avec GitHub Actions et comprend les étapes suivantes :

1. **Test :** Exécute les tests à chaque push sur la branche `main`.
2. **Build :** Construit l'image Docker si les tests passent.
3. **Déploiement :** Pousse l'image Docker sur Docker Hub et déploie l'image sur un serveur.

La configuration du pipeline se trouve dans le fichier `.github/workflows/ci-cd.yml`.

## Contribuer

1. **Forker le dépôt.**
2. **Créer une branche pour votre fonctionnalité :**

    ```bash
    git checkout -b feature/ma-fonctionnalité
    ```

3. **Commiter vos modifications :**

    ```bash
    git commit -am 'Ajouter une nouvelle fonctionnalité'
    ```

4. **Pousser la branche :**

    ```bash
    git push origin feature/ma-fonctionnalité
    ```

5. **Ouvrir une Pull Request.**


