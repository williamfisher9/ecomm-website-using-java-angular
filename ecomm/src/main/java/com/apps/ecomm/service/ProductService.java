package com.apps.ecomm.service;

import com.apps.ecomm.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    List<Product> findByCategoryId(long id);
    Product createProduct(Product product);
    List<Product> getAllProducts();
    List<Product> findByNameContainingIgnoreCase(String name);
}
