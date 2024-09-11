package com.apps.ecomm.configs;

import com.apps.ecomm.dao.CategoryRepository;
import com.apps.ecomm.dao.ProductRepository;
import com.apps.ecomm.model.Category;
import com.apps.ecomm.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;


@Configuration
public class AppConfigs implements CommandLineRunner {
    private final CategoryRepository categoryRepository;
    private final ProductRepository productRepository;

    @Autowired
    public AppConfigs(CategoryRepository categoryRepository, ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Category category1 = new Category("everything", "fa-solid fa-list");
        Category category2 = new Category("computers", "fa-solid fa-desktop");
        Category category3 = new Category("keyboards", "fa-solid fa-keyboard");
        Category category4 = new Category("display", "fa-solid fa-tv");
        Category category5 = new Category("tools", "fa-solid fa-server");

        categoryRepository.save(category1);
        categoryRepository.save(category2);
        categoryRepository.save(category3);
        categoryRepository.save(category4);
        categoryRepository.save(category5);

        Product product1 = new Product("Dell Laptop", "uki2819", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 2);
        Product product2 = new Product("Lenovo Laptop", "hdj1234", "Best portable", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 2);
        Product product3 = new Product("Camera", "kas1213", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product4 = new Product("Mouse", "kaa1222", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product5 = new Product("Keyboard", "opl1234", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 3);
        Product product6 = new Product("Monitor", "gsh1123", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 4);
        Product product7 = new Product("Mouse Pad", "qwq1123", "Best mouse pad", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product8 = new Product("Case", "wqw1121", "Best case", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product9 = new Product("Dell Laptop", "uki2819", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 2);
        Product product10 = new Product("Lenovo Laptop", "hdj1234", "Best portable", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 2);
        Product product11 = new Product("Camera", "kas1213", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product12 = new Product("Mouse", "kaa1222", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product13 = new Product("Keyboard", "opl1234", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 3);
        Product product14 = new Product("Monitor", "gsh1123", "Best laptop", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 4);
        Product product15 = new Product("Mouse Pad", "qwq1123", "Best mouse pad", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);
        Product product16 = new Product("Case", "wqw1121", "Best case", 1900F, 800, LocalDate.now(), LocalDate.now(), true, "assets/02.jpg", 5);

        productRepository.save(product1);
        productRepository.save(product2);
        productRepository.save(product3);
        productRepository.save(product4);
        productRepository.save(product5);
        productRepository.save(product6);
        productRepository.save(product7);
        productRepository.save(product8);
        productRepository.save(product9);
        productRepository.save(product10);
        productRepository.save(product11);
        productRepository.save(product12);
        productRepository.save(product13);
        productRepository.save(product14);
        productRepository.save(product15);
        productRepository.save(product16);
    }
}
