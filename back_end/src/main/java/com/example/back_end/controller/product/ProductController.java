package com.example.back_end.controller.product;

import com.example.back_end.dto.product.ProductDTO;
import com.example.back_end.model.Product;
import com.example.back_end.service.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
            @RequestParam(name = "nameProduct", defaultValue = "", required = false) String name,
            @RequestParam(name = "sort", defaultValue = "", required = false) String sortPrice,
//            @RequestParam(name = "trademark", defaultValue = "", required = false) String trademark,
            @RequestParam(defaultValue = "0", required = false) int page
    ) {
        Pageable pageable;
        if (sortPrice.equals("")){
             pageable = PageRequest.of(page, 12);
        }else {
            Sort sort = sortPrice.equals("ASC") ? Sort.by("promotional_price").ascending() : Sort.by("promotional_price").descending();
             pageable = PageRequest.of(page, 12,sort);
        }

        Page<Product> productPage = productService.findAllProduct(pageable,name);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Integer id){
        Product product = productService.getProductById(id);
        if (product==null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<>(product, HttpStatus.OK);
        }
    }
}
