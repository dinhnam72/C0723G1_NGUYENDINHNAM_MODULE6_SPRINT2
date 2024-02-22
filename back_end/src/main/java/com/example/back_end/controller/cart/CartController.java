package com.example.back_end.controller.cart;

import com.example.back_end.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    @PostMapping("/add/{idCustomer}/{idProduct}")
    public ResponseEntity<?> addCart(@PathVariable Integer idCustomer,
                                     @PathVariable Integer idProduct){
        boolean flag = cartService.addCart(idCustomer,idProduct);
        if (!flag){
            return new ResponseEntity<>("Thêm vào giỏ hàng thất bại!",HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
