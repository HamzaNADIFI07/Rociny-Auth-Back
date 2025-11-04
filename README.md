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

### Fonctionnalités actuelles

- Authentification JWT avec Passport
- Vérification du mot de passe via bcrypt
- Simulation d’une base de données en mémoire (10 utilisateurs auto-générés)
- Validation des données avec DTOs + class-validator
- Routes d’authentification :
  - GET /auth → test de santé
  - POST /auth/login → connexion + token JWT

### Endpoints disponibles:

1. GET /auth — Vérification de l’état de l’API

    **But:** s’assurer que l’API fonctionne
    ```bash
    curl http://localhost:4000/auth
    ```
    **Réponse:** 
    ```bash
    API fonctionne
    ```
    **Test avec Postman:**
    ![Health](./assets/testHealth.png)
---
2. POST /auth/login — Connexion utilisateur

    **But:** authentifier un utilisateur et retourner un token JWT
    ```bash
    curl -X POST http://localhost:4000/auth/login \
      -H "Content-Type: application/json" \
      -d '{"email":"user1@rociny.com","password":"mdp123"}'
    ```
    **Réponse:** 
    ```json
    {
        "accessToken":    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoidXNlcjFAcm9jaW55LmNvbSIsImlhdCI6MTc2MjIyMDI1MywiZXhwIjoxNzYyMjIzODUzfQ.CK3s6BFnPZY3YnOVYQn2p55V_wZkWyDWeKd_y1HTT2U",
        "user": {
            "id": 1,
            "email": "user1@rociny.com",
            "name": "User 1"
        }
    }
    ```
    **Test avec Postman:**
    ![User 1](./assets/testLoginUser1.png)
    ![User 1](./assets/testLoginUser3.png)




