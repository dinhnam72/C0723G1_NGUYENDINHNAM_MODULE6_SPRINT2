package com.example.back_end.repository.cart;

import com.example.back_end.model.Cart;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into cart(id_customer,id_product)\n " +
            "values (:idCustomer, :idProduct)",nativeQuery = true)
    void addCart(@Param("idCustomer") Integer idCustomer,@Param("idProduct") Integer idProduct);

}
