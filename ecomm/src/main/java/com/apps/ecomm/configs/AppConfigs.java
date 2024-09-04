package com.apps.ecomm.configs;

import com.apps.ecomm.dao.ProductRepository;
import com.apps.ecomm.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class AppConfigs implements CommandLineRunner {
    private final ProductRepository repository;

    @Autowired
    public AppConfigs(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) throws Exception {
        Product product = new Product();
        product.setActive(true);
        product.setDescription("Laptop product with high specs");
        product.setName("Dell Laptop");
        product.setSku("ANK8829KSJ");
        product.setImageUrl("http://www.google.com");
        product.setUnitPrice(1999.7F);
        product.setUnitsInStock(1000);
        product.setDateCreated(LocalDate.now());
        product.setLastUpdated(LocalDate.now());

        repository.save(product);
    }
}
