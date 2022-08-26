# Twerlo Task

For first time, you will need to run.

```
docker compose -f docker-compose.yml --build
```

- Angular app work on `port:80` AKA `http://localhost/`, the Angular app is built and deployed on the NGIX server.

- Node app work on `port:3000` AKA `http://localhost:3000/`, the Node app work on production configuration.

## Backend file strucutre

        |---common        contain all shared files across internal layers.
        |---controllers   contain all controllers and act as a gateway for the internal layer.
        |---core          contain all application models and interfaces for all layers.
        |---framework     contain all third-party dependencies and express configuration.
        |---use-case      contain all business logic.
