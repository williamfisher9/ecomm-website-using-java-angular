package com.apps.ecomm.dto;

import com.apps.ecomm.model.Product;

import java.util.List;

public class Response {
    private List<Product> products;

    public Response(List<Product> products) {
        this.products = products;
    }
}
