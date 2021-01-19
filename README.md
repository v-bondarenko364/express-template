# Sample

## Run API

Run MongoDB and Redis containers:

```sh
docker-compose build
docker-compose run start_dependencies
```

## Development setup

To start development:

* Create `.env.dev` and `.env.prod` using `.env.example`
* Install dependencies
* Run `npm run start:dev`

## Running project

> To run project type `docker-compose up`

When you alter webpack.config.js you have to run `docker-compose build` for adding updated webpack config to docker-container
