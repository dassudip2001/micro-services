package com.sudip.customer.data;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public record CustomerRequest(
        String id,

        @NotNull(message = "Name cannot be null") String name,
        @NotNull(message = "Email cannot be null") @Email(message = "Email should be valid") String email,
        Address address) {
}
