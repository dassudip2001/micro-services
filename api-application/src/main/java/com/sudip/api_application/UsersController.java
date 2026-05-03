package com.sudip.api_application;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Value("${server.port}")
    private String port;

    @GetMapping
    public String getUsers() {
        return "Response from instance on port: " + port;
    }

}
