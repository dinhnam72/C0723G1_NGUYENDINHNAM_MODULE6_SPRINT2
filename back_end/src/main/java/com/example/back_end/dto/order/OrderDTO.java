package com.example.back_end.dto.order;

public class OrderDTO {
    private Integer idCustomer;

    public OrderDTO() {
    }

    public OrderDTO(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }

    public Integer getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(Integer idCustomer) {
        this.idCustomer = idCustomer;
    }
}
