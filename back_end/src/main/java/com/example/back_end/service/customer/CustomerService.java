package com.example.back_end.service.customer;

import com.example.back_end.model.Customer;
import com.example.back_end.repository.auth.IAccountRepository;
import com.example.back_end.repository.cart.ICartRepository;
import com.example.back_end.repository.customer.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private IAccountRepository accountRepository;
    @Override
    public Customer findCustomerByUsername(String username) {
        try {
            Integer idAccount= accountRepository.findAccountByUsername(username);
            try {
                return customerRepository.findCustomerByAccountId(idAccount);

            }catch (Exception e){
                return null;
            }
        }catch (Exception e){
            return null;
        }
    }
}
