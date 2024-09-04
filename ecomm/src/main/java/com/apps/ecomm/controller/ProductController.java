package com.apps.ecomm.controller;

import com.apps.ecomm.dto.Response;
import com.apps.ecomm.model.Product;
import com.apps.ecomm.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "/api/v1/products")
public class ProductController {
    private final ProductService service;

    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Response> getAll(){
        Response response = new Response(service.getAllProducts());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
