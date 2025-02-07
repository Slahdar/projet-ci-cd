# CI/CD - ReactJS avec GitHub Actions

## Membres de l'équipe
- Maxime Chostak

## 🛠 CI - Intégration Continue
À chaque **pull request**, GitHub Actions exécute :
1. **Tests unitaires** avec `npm test`
2. **Linting** avec `npm run lint`
3. **Build de l’application** avec `npm run build`
4. **Stocke un artefact** du build

### Pour tester en local :
```sh
npm install
npm run lint
npm test
npm run build


## Présentation du projet  

Cette API permet de gérer des données pour un jeu de rôle inspiré de **Lord of the Rings**.  
Elle est construite avec **Fastify** et utilise **Sequelize** pour interagir avec une base de données **MySQL**.  

## Installation et Configuration  

### Installer les dépendances 
npm install

### lancer api en mode dev
npm run dev

### Lancer api en prod
npm start

## Verif code et test lint 

### Verif de qualité avec Linting
npm run lint

### Lancer test unitaires

npm run test
