package com.sudip.customer.data;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository;
    private final CustomerMapper customerMapper;

    public String createCustomer(CustomerRequest customerRequest) {
        var customer = customerRepository.save(customerMapper.toCustomer(customerRequest));
        return customer.getId();
    }

    public String updateCustomer(CustomerRequest customerRequest, String customerId) {
        var customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new CustomerNotFoundException(

                ));
        customer = customerMapper.toCustomer(customerRequest);
        customer.setId(customerId);
        customerRepository.save(customer);
        return customer.getId();

    }

    public List<CustomerResponse> getCustomers() {
        return customerRepository.findAll()
                .stream()
                .map(customerMapper::toCustomerResponse)
                .collect(Collectors.toList());
    }

    public CustomerResponse getCustomer(String customerId) {
        return customerRepository.findById(customerId)
                .map(customerMapper::toCustomerResponse)
                .orElseThrow(() -> new CustomerNotFoundException(

                ));
    }

    public void deleteCustomer(String customerId) {
        if (!customerRepository.existsById(customerId)) {
            throw new CustomerNotFoundException(

            );
        } else {
            customerRepository.deleteById(customerId);
        }
    }

}
