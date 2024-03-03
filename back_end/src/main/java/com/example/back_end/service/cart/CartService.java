package com.example.back_end.service.cart;

import com.example.back_end.model.Cart;
import com.example.back_end.repository.cart.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    private ICartRepository cartRepository;
    @Override
    public boolean addCart(Integer idCustomer, Integer idProduct) {
        try {
            Cart cart = cartRepository.getCartByIdCustomer(idCustomer,idProduct);
            if (cart==null){
                cartRepository.addCart(idCustomer,idProduct);

            }else {
                cart.setAmount(cart.getAmount()+1);
                cartRepository.updateAmount(idCustomer,idProduct,cart.getAmount());
            }
            return true;

        }catch (Exception e){
           return false;
        }
    }

    @Override
    public List<Cart> listCart(Integer id) {
        try {
            List<Cart> cartList = cartRepository.listCart(id);
            return cartList;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public boolean deleteCart(Integer idCustomer, Integer idProduct) {
        try {
            cartRepository.deleteCart(idCustomer,idProduct);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public boolean deleteAllCart(Integer idCustomer) {
        try {
            cartRepository.deleteAllCart(idCustomer);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public boolean addAmount(Integer idCustomer, Integer idProduct, String calculation) {
        try {
            Cart cart = cartRepository.getCart(idCustomer,idProduct);
            switch (calculation){
                case "+":
                    cart.setAmount(cart.getAmount()+1);
                    break;
                case "-":
                    cart.setAmount(cart.getAmount()-1);
                    break;

            }
            cartRepository.updateAmount(idCustomer,idProduct,cart.getAmount());
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
