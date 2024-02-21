package com.example.back_end.service.product;

import com.example.back_end.model.Product;
import com.example.back_end.repository.product.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    @Override
    public Page<Product> findAllProduct(Pageable pageable) {
        Page<Product> page = productRepository.findAllProduct(pageable);
        return page;
    }
}
