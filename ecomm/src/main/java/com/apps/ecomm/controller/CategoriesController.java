package com.apps.ecomm.controller;

import com.apps.ecomm.dto.Response;
import com.apps.ecomm.model.Category;
import com.apps.ecomm.model.Product;
import com.apps.ecomm.service.CategoryService;
import com.apps.ecomm.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "/api/v1/categories")
public class CategoriesController {
    private final CategoryService categoryService;
    private final ProductService productService;

    @Autowired
    public CategoriesController(CategoryService categoryService, ProductService productService) {
        this.categoryService = categoryService;
        this.productService = productService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Response> getAllCategories(){
        Response response = new Response(categoryService.getAllCategories());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, path = "{id}")
    public ResponseEntity<Response> getCategoryProducts(@PathVariable("id") Long id){
        Response response;
        if(id == 1){
            response = new Response(productService.getAllProducts());
        } else {
            response = new Response(productService.findByCategoryId(id));
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
