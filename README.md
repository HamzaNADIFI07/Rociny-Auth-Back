# Rociny Auth Back — Initial Setup

Rociny Auth Back est un service d’authentification basé sur le framework **NestJS**.
Ce projet servira de base pour la gestion des utilisateurs, la création de tokens JWT, et la sécurisation des endpoints d’une future application Rociny.

### Installation et Configuration

1. Cloner le projet
```bash
git clone https://github.com/HamzaNADIFI07/Rociny-Auth-Back
cd rociny-auth-back
```
2. Installer les dépendances
```bash
npm install
```
3. Lancer le serveur
```bash
npm run start
```
4. Test du fonctionnement (Facultatif)

- Après lancement du serveur, soit on ouvre le navigateur sur `http://localhost:4000/`, et on aura comme rendu **Hello World!**.

- Sinon, on utilise Postman sur l'adresse `http://localhost:4000/` avec la méthode `GET`, et on a aura comme rendu **Hello World!**.

![testHealth](./assets/testHealth.png)

### Convention de nommage des commits
Ce projet suit la convention Conventional Commits.

1. Format général:
```bash
<type>(scope?): <message clair et concis>
```
2. Types courants:

| Type       | Signification                                              |
| ---------- | ---------------------------------------------------------- |
| `feat`     | Nouvelle fonctionnalité                                    |
| `fix`      | Correction de bug                                          |
| `docs`     | Modification de la documentation                           |
| `style`    | Changement de formatage (indentation, espaces, etc.)       |
| `refactor` | Refactorisation sans ajout ni correction de fonctionnalité |
| `perf`     | Amélioration des performances                              |
| `test`     | Ajout ou modification de tests                             |
| `chore`    | Tâches diverses (build, dépendances, config, etc.)         |

3. Exemples:
```
feat(auth): add JWT strategy and login endpoint
fix(users): correct password hashing in user service
docs(readme): add commit naming convention
refactor(core): move config module to separate folder
chore(deps): update NestJS to v11
```
