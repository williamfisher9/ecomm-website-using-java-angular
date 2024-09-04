package com.apps.ecomm.service;

import com.apps.ecomm.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    Optional<Product> getProductById(long id);
    List<Product> getAllProducts();
    Product createProduct(Product product);
}
