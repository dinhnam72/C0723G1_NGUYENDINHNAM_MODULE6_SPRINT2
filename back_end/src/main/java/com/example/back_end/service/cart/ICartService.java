package com.example.back_end.service.cart;

import com.example.back_end.model.Cart;

import java.util.List;

public interface ICartService {
    boolean addCart(Integer idCustomer, Integer idProduct);
    List<Cart> listCart (Integer id);

    boolean deleteCart(Integer idCustomer, Integer idProduct);

    boolean addAmount(Integer idCustomer, Integer idProduct, String calculation);
}
