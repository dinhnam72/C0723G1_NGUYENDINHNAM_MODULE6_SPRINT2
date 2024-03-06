package com.example.back_end.dto.product;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
public class ProductDTO {
    private Integer id;
    private String name;
    private String code;
    private String mainImage;
    private Integer quantity;
    private LocalDateTime dateAdded;
    private String color;
    private Double startPrice;
    private Double promotionalPrice;
    private String length;
    private String weight;
    private String hardness;
    private String handleCircumference;
    private String maximumTensionLevel;
    private String nameTrademark;





}
