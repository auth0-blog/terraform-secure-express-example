# terraform-secure-express-example

This demo contains a Node.js Express application running on Docker. It's meant to be used in conjunction with the [Auth0 Blog post about configuring Auth0 using Terraform]().

## Getting Started

```bash
$ npm install
$ docker build . -t terraform-secure-express:1.0
```

## Running the Application

### Using Docker

This app requires an Auth0 Application and API to be created. Following the [Terraform blog post]() means that these will be created by Terraform. If you wish to run the application without Terraform, you can pass your Application and API credentials into the Docker container as environment variables. Replace `{CLIENT-ID}`, `{CLIENT-SECRET}`, `{CLIENT-DOMAIN}`, and `{API-IDENTIFIER}` with your values in the following command:

```bash
$ docker run --name terraform-secure-express -p 3000:3000 --env AUTH0_CLIENT_ID={CLIENT-ID} --env AUTH0_CLIENT_SECRET={CLIENT-SECRET} --env AUTH0_CLIENT_DOMAIN={CLIENT-DOMAIN} --env AUTH0_API_IDENTIFIER={API-IDENTIFIER} terraform-secure-express:1.0
```

You can also run this app without Docker:

```bash
$ AUTH0_CLIENT_DOMAIN={CLIENT-DOMAIN} AUTH0_CLIENT_ID={CLIENT-ID} AUTH0_CLIENT_SECRET={CLIENT-SECRET} AUTH0_API_IDENTIFIER={API-IDENTIFIER} npm start
```

After running these commands, go to [http://localhost:3000](http://localhost:3000) to see the running application.
