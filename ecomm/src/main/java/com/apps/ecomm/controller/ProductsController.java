package com.apps.ecomm.controller;

import com.apps.ecomm.dto.Response;
import com.apps.ecomm.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1/products")
public class ProductsController {
    private final ProductService service;

    @Autowired
    public ProductsController(ProductService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/search/{phrase}")
    public ResponseEntity<Response> findByNameContaining(@PathVariable("phrase") String phrase){
        Response response = new Response(service.findByNameContainingIgnoreCase(phrase));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
