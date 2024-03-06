package com.example.back_end.service.product;

import com.example.back_end.dto.product.ProductDTO;
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
    public Page<Product> findAllProduct(Pageable pageable,String name) {
        Page<Product> page = productRepository.findAllProduct(pageable,"%"+name+"%");
        return page;
    }

    @Override
    public Product getProductById(Integer id) {
        try {
            Product product = productRepository.getProduct(id);
            return product;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public ProductDTO getProduct(Integer id) {
        try {
            ProductDTO product = productRepository.getProductDTO(id);
            return product;
        }catch (Exception e){
            return null;
        }
    }

    @Override
    public void updateQuantity(Product product) {
        try {
            productRepository.updateQuantity(product);
        }catch (Exception e){
            e.getMessage();
        }
    }
}
