package com.apps.ecomm.dao;

import com.apps.ecomm.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryId(long id);
    List<Product> findByNameContainingIgnoreCase(String name);
}
