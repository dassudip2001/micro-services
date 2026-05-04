# 🔐 Spring Boot Resource Server with Keycloak (JWT Authentication)

This project demonstrates how to secure a Spring Boot API using **Keycloak** and **OAuth2 Resource Server (JWT)**.

---

## 🚀 Overview

- Authentication handled by **Keycloak**
- Spring Boot acts as a **Resource Server**
- Uses **JWT tokens** for securing APIs
- Only authenticated users can access protected endpoints

---

## 🧰 Tech Stack

- Java + Spring Boot
- Spring Security
- OAuth2 Resource Server
- Keycloak

---

## 🔑 Get Access Token from Keycloak

Use the following `curl` command to generate a JWT token:

```bash
curl --location 'http://localhost:8080/realms/microservices/protocol/openid-connect/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_id=api-gateway' \
--data-urlencode 'username=sudipdas' \
--data-urlencode 'password=password' > output.json
```

📌 This will generate a JSON response containing:

- `access_token`
- `refresh_token`
- `expires_in`

---

## 📦 Dependencies

Add the following dependencies in your `pom.xml`:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>
</dependency>
```

---

## ⚙️ Security Configuration

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/actuator/health").permitAll()
                .anyRequest().authenticated()   // must have valid JWT
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .jwt(Customizer.withDefaults())
            );
        return http.build();
    }
}
```

---

## 🛠️ Application Configuration

Add the following in `application.yml` or `application.properties`:

### application.yml

```yaml
spring:
  security:
    oauth2:
      resourceserver:
        jwt:
          issuer-uri: http://localhost:8080/realms/microservices
```

📌 This tells Spring Boot to validate JWT using Keycloak realm.

---

## 🔐 Access Protected API

After getting the token, call your API:

```bash
curl --location 'http://localhost:8081/api/test' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

---

## ✅ Public Endpoint

```bash
GET /actuator/health
```

Accessible without authentication.

---

## ❌ Protected Endpoints

All other APIs require:

- Valid JWT token
- Authorization header

---

## 🧠 Flow Architecture

```
Client → Keycloak (Auth)
       → Access Token (JWT)
       → Spring Boot Resource Server
       → Protected API
```

---

## ⚠️ Common Issues

### 1. Invalid Token

- Check `issuer-uri`
- Ensure token is not expired

### 2. 403 Forbidden

- Token may lack required roles

### 3. 401 Unauthorized

- Missing or invalid Authorization header

---

## 📌 Notes

- Make sure Keycloak is running on `localhost:8080`
- Realm name must match (`microservices`)
- Client ID must match (`api-gateway`)

---

## 🚀 Next Improvements

- Add role-based authorization (RBAC)
- Integrate API Gateway
- Use refresh tokens
- Deploy on AWS / Docker

---

## 👨‍💻 Author

Sudip Das

---
