package com.example.back_end.repository.product;

import com.example.back_end.dto.product.ProductDTO;
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
    @Query(value = "select p.id,p.code,p.main_image,p.quantity,p.date_added,p.color,p.start_price,p.promotional_price, \n" +
            "p.length,p.weight,p.hardness,p.handle_circumference,p.maximum_tension_level,t.name,s.image_one,s.image_two,s.image_three from products p \n" +
            "join secondary_image s on p.id = s.id_product \n" +
            "join trademarks t on t.id = p.id_trademark\n" +
            "where p.id = :id",nativeQuery = true)
    ProductDTO getProductDTO(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "update products set quantity= :#{#product.quantity} where id= :#{#product.id}",nativeQuery = true)
    void updateQuantity(@Param("product") Product product);


}
