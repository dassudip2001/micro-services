package com.sudip.customer.data;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = false)
@Data
public class CustomerNotFoundException extends RuntimeException {
    private String message;

}
