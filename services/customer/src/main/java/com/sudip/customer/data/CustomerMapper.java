package com.sudip.customer.data;

import org.springframework.stereotype.Component;

@Component
public class CustomerMapper {

    public Customer toCustomer(CustomerRequest customerRequest) {
        if (customerRequest == null) {
            return null;
        }
        return Customer.builder()
                .id(customerRequest.id())
                .name(customerRequest.name())
                .email(customerRequest.email())
                .address(customerRequest.address())
                .build();
    }

    public CustomerResponse toCustomerResponse(Customer customer) {
        if (customer == null) {
            return null;
        }
        return new CustomerResponse(
                customer.getId(),
                customer.getName(),
                customer.getEmail(),
                customer.getAddress());
    }

}
