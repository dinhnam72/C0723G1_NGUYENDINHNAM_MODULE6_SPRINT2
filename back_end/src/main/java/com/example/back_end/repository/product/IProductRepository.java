package com.example.back_end.repository.product;

import com.example.back_end.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select p.*\n" +
            "from products p \n" +
            "join trademarks t on p.id_trademark = t.id",nativeQuery = true)
    Page<Product> findAllProduct(Pageable pageable);
}
