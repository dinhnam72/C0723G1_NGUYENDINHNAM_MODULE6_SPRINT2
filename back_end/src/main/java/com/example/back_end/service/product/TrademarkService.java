package com.example.back_end.service.product;

import com.example.back_end.model.Trademark;
import com.example.back_end.repository.product.ITrademarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrademarkService implements ITrademarkService{
    @Autowired
    private ITrademarkRepository trademarkRepository;

    @Override
    public List<Trademark> listTrademark() {
        try {
            List<Trademark> trademarkList = trademarkRepository.findAllTrademark();
            return trademarkList;
        }catch (Exception e){
            return null;
        }
    }
}
