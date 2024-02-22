package com.example.back_end.controller.customer;

import com.example.back_end.model.Customer;
import com.example.back_end.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping("/{username}")
    public ResponseEntity<?> getEmployeeByEmail(@PathVariable String username) {
        Customer customer = customerService.findCustomerByUsername(username);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }
    }
}

