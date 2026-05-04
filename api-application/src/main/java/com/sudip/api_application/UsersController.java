package com.sudip.api_application;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Value("${server.port}")
    private String port;

    @GetMapping
    public ResponseEntity<List<Map<String, String>>> getUsers() {
        List<Map<String, String>> users = List.of(
                Map.of("id", "1", "name", "Alice"),
                Map.of("id", "2", "name", "Bob"),
                Map.of("id", "3", "name", "Charlie"));
        for (Map<String, String> user : users) {
            System.out.println("User ID: " + user.get("id") + ", Name: " + user.get("name"));
        }
        return ResponseEntity.ok(users);
    }

    @GetMapping("/lb")
    public String getLb() {
        return "Response from port: " + port;
    }

}
