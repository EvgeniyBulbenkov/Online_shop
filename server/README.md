# Server deployment

Requirements:
- NodeJS 
- npm (included in NodeJS)
- Docker & Docker-compose
OR
  - Postgress (and SQL client)
    

Deployment:
- clone the repo 
`git clone {repo URL}`
  
- cd into /server directory
- run 
`npm i`
  
- create file .env, containing fields:

PORT=  
DB_NAME=  
DB_USER=  
DB_PASSWORD=  
DB_HOST= 
DB_PORT=
SECRET_KEY=  
  
- fill .env according to your configuration (if using docker, according to the docker-compose.yml)
- (if using docker) run `docker-compose up` or start your postgress database
- run `node index.js`

to healthcheck the application run in browser: localhost:{PORT}. You'll get 'HelloWorld' message if it's OK.

#### HAVE FUN!!!!