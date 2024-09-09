package com.apps.ecomm.service;

import com.apps.ecomm.model.Category;
import com.apps.ecomm.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CategoryService {
    List<Category> getAllCategories();
}
