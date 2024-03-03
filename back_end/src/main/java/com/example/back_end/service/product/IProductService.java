package com.example.back_end.service.product;

import com.example.back_end.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> findAllProduct(Pageable pageable,String name );

    Product getProductById(Integer id);

    void updateQuantity(Product product);
}
