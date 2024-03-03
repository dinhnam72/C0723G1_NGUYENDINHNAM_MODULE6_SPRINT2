package com.example.back_end.controller.product;

import com.example.back_end.model.Product;
import com.example.back_end.model.Trademark;
import com.example.back_end.service.product.ITrademarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/trademark")
public class TrademarkController {
    @Autowired
    private ITrademarkService trademarkService;
    @GetMapping("/list")
    public ResponseEntity<?> getAllTrademark() {
        List<Trademark> trademarkList = trademarkService.listTrademark();
        if (trademarkList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(trademarkList, HttpStatus.OK);
    }
}
