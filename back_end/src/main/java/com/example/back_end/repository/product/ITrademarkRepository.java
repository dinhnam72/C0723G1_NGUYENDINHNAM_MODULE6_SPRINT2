package com.example.back_end.repository.product;

import com.example.back_end.model.Trademark;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITrademarkRepository extends JpaRepository<Trademark,Integer> {
    @Query(value = "select * from trademarks" ,nativeQuery = true)
    List<Trademark> findAllTrademark();
}
