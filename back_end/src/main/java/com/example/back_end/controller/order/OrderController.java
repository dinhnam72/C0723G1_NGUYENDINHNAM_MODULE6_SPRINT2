package com.example.back_end.controller.order;

import com.example.back_end.model.*;
import com.example.back_end.service.cart.ICartService;
import com.example.back_end.service.customer.ICustomerService;
import com.example.back_end.service.order.IOrderDetailService;
import com.example.back_end.service.order.IOrderService;
import com.example.back_end.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Currency;
import java.util.List;
import java.util.Random;

@RequestMapping("/api/order")
@CrossOrigin("*")
@RestController
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IProductService productService;
    @Autowired
    private IOrderDetailService orderDetailService;
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private ICartService cartService;
    public static String generateRandomString() {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            int index = random.nextInt(characters.length());
            sb.append(characters.charAt(index));
        }
        return sb.toString();
    }

    @PostMapping("/create/{id}")
    public ResponseEntity<?> createOrder(@PathVariable Integer id) {
        LocalDateTime date = LocalDateTime.now();
        String code = generateRandomString();
        boolean flag = orderService.createOrder(date,code,id);
        if (!flag){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }else {
            Order order = orderService.findByCode(code);
            List<Cart> cartList = cartService.listCart(id);
            OrderDetail orderDetail = new OrderDetail();
            for (Cart c: cartList){
                orderDetail.setOrder(order);
                orderDetail.setAmount(c.getAmount());
                orderDetail.setPrice(c.getProduct().getPromotionalPrice());
                orderDetail.setProduct(c.getProduct());
                orderDetailService.createOrderDetail(orderDetail);
                Product product = productService.getProductById(c.getProduct().getId());
                int quantity = product.getQuantity()- c.getAmount();
                product.setQuantity(quantity);
                productService.updateQuantity(product);

            }
        }
//
//        if (orderNew != null) {
//            OrderDetails orderDetail = new OrderDetails();
//            for (OrderDetailDto o : orderDTO.getList()) {
//                orderDetail.setOrder(orderNew);
//                orderDetail.setQuantity(o.getAmount());
//                orderDetail.setPrice(o.getPrice());
//                Products products = productService.getProductById(o.getId());
//                orderDetail.setProducts(products);
//                orderDetailService.createOrderDetail(orderDetail);
//                Integer quantity = products.getQuantity()-o.getAmount();
//                products.setQuantity(quantity);
//                productService.updateQuantityByProduct(products);
//
//            }
//        } else {
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
