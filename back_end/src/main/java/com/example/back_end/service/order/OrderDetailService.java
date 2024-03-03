package com.example.back_end.service.order;

import com.example.back_end.model.OrderDetail;
import com.example.back_end.repository.order.IOrderDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderDetailService implements IOrderDetailService{
    @Autowired
    private IOrderDetailRepository orderDetailRepository;
    @Override
    public void createOrderDetail(OrderDetail orderDetail) {
        try {
            orderDetailRepository.createOrderDetail(orderDetail);
        }catch (Exception e){
            e.getMessage();
        }
    }
}
