# Spring Cloud Microservices Demo

This repository contains a small Spring Boot microservices sample with:

- `api-eureka` — Eureka service registry
- `api-application` — REST API service registered as `user-service`
- `api-gateway` — Spring Cloud Gateway routing requests to `user-service`

## Architecture

1. `api-eureka` runs on port `8761` and provides service discovery.
2. `api-application` registers with Eureka and exposes user endpoints on port `8081`.
3. `api-gateway` runs on port `8080` and forwards `/users/**` traffic to `user-service`.

## Prerequisites

- Java 17
- Maven (the project includes Maven wrappers)
- Internet access to download Spring Boot and Spring Cloud dependencies

## Run the services

Start the services in this order:

1. Start Eureka:

   cd api-eureka
   ./mvnw spring-boot:run

2. Start the API application:

   cd ../api-application
   ./mvnw spring-boot:run

3. Start the gateway:

   cd ../api-gateway
   ./mvnw spring-boot:run

> On Windows, use `mvnw.cmd` instead of `./mvnw`.

## Accessing the services

- Eureka dashboard: `http://localhost:8761`
- Gateway endpoint: `http://localhost:8080/users`
- Application endpoint: `http://localhost:8081`

## Build

From the repo root, you can build each module separately:

```bash
cd api-eureka && ./mvnw clean package
cd ../api-application && ./mvnw clean package
cd ../api-gateway && ./mvnw clean package
```

Or build a single module from its folder.

## Tests

Run unit tests per module:

```bash
cd api-eureka && ./mvnw test
cd ../api-application && ./mvnw test
cd ../api-gateway && ./mvnw test
```

## Notes

- `api-gateway` uses Spring Cloud Gateway with a route to `lb://USER-SERVICE`.
- `api-application` registers as `user-service`, matching the gateway route.
- `api-eureka` is configured as a standalone Eureka server and does not register itself.

## Repository layout

- `api-eureka/` — Eureka registry service
- `api-gateway/` — gateway service
- `api-application/` — backend user service
