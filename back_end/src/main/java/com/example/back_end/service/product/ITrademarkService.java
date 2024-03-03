package com.example.back_end.service.product;

import com.example.back_end.model.Trademark;
import com.example.back_end.repository.product.ITrademarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ITrademarkService {
    List<Trademark> listTrademark();

}
