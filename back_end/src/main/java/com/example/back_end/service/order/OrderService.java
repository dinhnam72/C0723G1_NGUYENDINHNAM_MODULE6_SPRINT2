package com.example.back_end.service.order;

import com.example.back_end.model.Order;
import com.example.back_end.repository.order.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public boolean createOrder(LocalDateTime date, String code, Integer idCustomer) {
        try {
            orderRepository.addOrder (date,code,idCustomer);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    @Override
    public Order findByCode(String code) {
        try {
            Order order =orderRepository.findByCode(code);
            return order;
        }catch (Exception e){
            return null;
        }

    }
}
