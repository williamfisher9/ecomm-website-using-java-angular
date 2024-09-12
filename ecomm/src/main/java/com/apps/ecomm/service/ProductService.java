package com.apps.ecomm.service;

import com.apps.ecomm.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    List<Product> findByCategoryId(long id);
    Product createProduct(Product product);
    List<Product> getAllProducts();
    List<Product> findByNameContainingIgnoreCase(String name);
    Product getProductById(long id);
}
