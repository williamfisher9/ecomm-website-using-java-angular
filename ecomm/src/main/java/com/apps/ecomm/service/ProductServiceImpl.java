package com.apps.ecomm.service;

import com.apps.ecomm.dao.ProductRepository;
import com.apps.ecomm.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class ProductServiceImpl implements ProductService{
    private final ProductRepository repository;

    @Autowired
    public ProductServiceImpl(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<Product> getProductById(long id) {
        return repository.findById(id);
    }

    @Override
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    @Override
    public Product createProduct(Product product) {
        return repository.save(product);
    }
}
