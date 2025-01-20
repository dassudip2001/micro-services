package com.sudip.customer.data;

public record CustomerResponse(
        String id,
        String name,
        String email,
        Address address) {
}
