package com.example.back_end.repository.order;

import com.example.back_end.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
    @Transactional
    @Modifying
    @Query(value = "insert into order_details (amount,price,id_order,id_product) " +
            "values (:#{#orderDetail.amount},:#{#orderDetail.price},:#{#orderDetail.order.id},:#{#orderDetail.product.id})",nativeQuery = true)
    void createOrderDetail(@Param("orderDetail") OrderDetail orderDetail);
}
