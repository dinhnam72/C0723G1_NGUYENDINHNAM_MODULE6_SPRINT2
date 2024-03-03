package com.example.back_end.controller.cart;

import com.example.back_end.model.Cart;
import com.example.back_end.service.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/cart")
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
    @GetMapping("list/{id}")
    public ResponseEntity<?> listCart(@PathVariable Integer id){
        List<Cart> cartList = cartService.listCart(id);
        if (cartList==null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(cartList, HttpStatus.OK);
        }
    }

    @PostMapping("/delete/{idCustomer}/{idProduct}")
    public ResponseEntity<?> deleteCart(@PathVariable Integer idCustomer,
                                     @PathVariable Integer idProduct){
        boolean flag = cartService.deleteCart(idCustomer,idProduct);
        if (!flag){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PostMapping("/addAmount/{idCustomer}/{idProduct}/{calculation}")
    public ResponseEntity<?> addAmount(@PathVariable Integer idCustomer,
                                        @PathVariable Integer idProduct,
                                       @PathVariable String calculation){
        boolean flag = cartService.addAmount(idCustomer,idProduct,calculation);
        if (!flag){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
