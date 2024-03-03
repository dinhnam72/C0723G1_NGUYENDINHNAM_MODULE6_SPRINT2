package com.example.back_end.repository.order;

import com.example.back_end.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

public interface IOrderRepository extends JpaRepository<Order,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into orders (code, `date`, id_customer) \n" +
            "values (:code,:date,:idCustomer)",nativeQuery = true)
    void addOrder(@Param("date") LocalDateTime date,@Param("code") String code,@Param("idCustomer") Integer idCustomer);

    @Query(value = "select * from orders where code = :code",nativeQuery = true)
    Order findByCode(@Param("code") String code);
}
