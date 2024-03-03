package com.example.back_end.repository.cart;

import com.example.back_end.model.Cart;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into cart(id_customer,id_product)\n " +
            "values (:idCustomer, :idProduct)",nativeQuery = true)
    void addCart(@Param("idCustomer") Integer idCustomer,@Param("idProduct") Integer idProduct);

    @Query(value = "select * from cart where id_customer = :id and is_delete=0",nativeQuery = true)
    List<Cart> listCart(@Param("id") Integer id);

    @Query(value = "select * from cart where id_customer = :idCustomer and id_product = :idProduct and is_delete=0",nativeQuery = true)
    Cart getCartByIdCustomer(@Param("idCustomer") Integer idCustomer,@Param("idProduct") Integer idProduct);

    @Transactional
    @Modifying
    @Query(value = "delete from cart \n" +
            "where id_customer = :idCustomer and id_product = :idProduct",nativeQuery = true)
    void deleteCart(@Param("idCustomer") Integer idCustomer,@Param("idProduct") Integer idProduct);

    @Transactional
    @Modifying
    @Query(value = "delete from cart \n" +
            "where id_customer = :idCustomer ",nativeQuery = true)
    void deleteAllCart(@Param("idCustomer") Integer idCustomer);

    @Query(value = "select * from cart where id_customer = :idCustomer and id_product= :idProduct and is_delete=0",nativeQuery = true)
    Cart getCart(@Param("idCustomer") Integer idCustomer,@Param("idProduct") Integer idProduct);
    @Transactional
    @Modifying
    @Query(value = "update cart \n" +
            "set amount = :amount\n" +
            "where id_customer = :idCustomer and id_product = :idProduct and is_delete=0",nativeQuery = true)
    void updateAmount(@Param("idCustomer") Integer idCustomer,@Param("idProduct") Integer idProduct,@Param("amount") Integer amount);
}
