package com.example.back_end.repository.customer;

import com.example.back_end.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {
    @Query(value = "select * from customers where id_account = :id",nativeQuery = true)
    Customer findCustomerByAccountId(@Param("id") Integer idAccount);
}
