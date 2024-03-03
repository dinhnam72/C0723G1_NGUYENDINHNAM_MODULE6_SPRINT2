package com.example.back_end.service.order;

import com.example.back_end.model.Order;

import java.time.LocalDateTime;

public interface IOrderService {
    boolean createOrder(LocalDateTime date, String code, Integer idCustomer);

    Order findByCode(String code);
}
