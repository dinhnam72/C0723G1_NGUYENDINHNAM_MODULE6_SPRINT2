package com.example.back_end.service.customer;

import com.example.back_end.model.Customer;

public interface ICustomerService {
    Customer findCustomerByUsername(String username);
}
