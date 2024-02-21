package com.example.back_end.controller.product;

import com.example.back_end.model.Product;
import com.example.back_end.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private IProductService productService;
    @GetMapping("/list")
    public ResponseEntity<?> getAllProduct(
//            @RequestParam(name = "nameProduct", defaultValue = "", required = false) String name,
//            @RequestParam(name = "trademark", defaultValue = "", required = false) String trademark,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable = PageRequest.of(page, 12);
        Page<Product> productPage = productService.findAllProduct(pageable);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
}
