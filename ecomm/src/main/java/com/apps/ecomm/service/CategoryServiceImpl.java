package com.apps.ecomm.service;

import com.apps.ecomm.dao.CategoryRepository;
import com.apps.ecomm.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoryServiceImpl implements CategoryService{
    private final CategoryRepository repository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository repository) {
        this.repository = repository;
    }


    @Override
    public List<Category> getAllCategories() {
        return repository.findAll();
    }
}
