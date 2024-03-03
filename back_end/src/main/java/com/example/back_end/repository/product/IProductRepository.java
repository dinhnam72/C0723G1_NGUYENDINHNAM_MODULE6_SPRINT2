package com.example.back_end.repository.product;

import com.example.back_end.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select p.*\n" +
            "from products p \n" +
            "join trademarks t on p.id_trademark = t.id \n" +
            "where p.name like :nameSearch and p.quantity>0 ",
            nativeQuery = true,
            countQuery = "select count(*) from products p join trademarks t on p.id_trademark = t.id where p.name like :nameSearch and p.quantity>0")
    Page<Product> findAllProduct(Pageable pageable,@Param("nameSearch") String name);

    @Query(value = "select * from products where id = :id",nativeQuery = true)
    Product getProduct(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "update prodcuts set quantity= :#{#product.quantity} where id= :#{#product.id}",nativeQuery = true)
    void updateQuantity(@Param("product") Product product);
}
