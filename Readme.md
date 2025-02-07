# CI/CD - ReactJS avec GitHub Actions

## Membres de l'équipe
- Maxime Chostak

## Présentation du projet  

Cette API permet de gérer des données pour un jeu de rôle inspiré de **Lord of the Rings**.  
Elle est construite avec **Fastify** et utilise **Sequelize** pour interagir avec une base de données **MySQL**.  

## Installation et Configuration  

### Installer les dépendances 
npm install

### lancer api en mode dev
npm run dev

## Verif code et tests

### Verif de qualité avec Linting
npm run lint

### Lancer test unitaires

npm test

## Intégration continue

### Créer un tag pour déclencher livraison 

git tag v1.0.0
git push origin v1.0.0

## Deploiement continue

### Quel est le livrable

C'est une API React JS qu'on peut lancer avec npm run dev

### Procédure pour les stagiaires 

- Vérifier que npm run dev compile bien le livrable
- S'assurer que les tests sont passés
- Déployer une nouvelle version avec git tag v1.0.1  et git push origin v1.0.0


