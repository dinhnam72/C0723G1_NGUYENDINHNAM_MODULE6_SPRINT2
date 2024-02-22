package com.example.back_end.service.cart;

import com.example.back_end.repository.cart.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public boolean addCart(Integer idCustomer, Integer idProduct) {
        try {
            cartRepository.addCart(idCustomer,idProduct);
            return true;
        }catch (Exception e){
           return false;
        }
    }
}
