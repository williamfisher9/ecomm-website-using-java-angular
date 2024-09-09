package com.apps.ecomm.dto;

import com.apps.ecomm.model.Category;
import com.apps.ecomm.model.Product;

import java.util.List;

public class Response {
    private Object items;

    public Response(Object items) {
        this.items = items;
    }

    public Object getItems() {
        return items;
    }

    public void setItems(Object items) {
        this.items = items;
    }
}
