package com.apps.ecomm.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "categories")
public class Category implements Serializable {
    private static final long serialVersionUID = -920190L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String categoryName;

    private String categoryStyle;

    public Category() {
    }

    public Category(String categoryName, String categoryStyle) {
        this.categoryName = categoryName;
        this.categoryStyle = categoryStyle;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getCategoryStyle() {
        return categoryStyle;
    }

    public void setCategoryStyle(String categoryStyle) {
        this.categoryStyle = categoryStyle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return id == category.id && Objects.equals(categoryName, category.categoryName) && Objects.equals(categoryStyle, category.categoryStyle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, categoryName, categoryStyle);
    }

    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", categoryName='" + categoryName + '\'' +
                ", categoryStyle='" + categoryStyle + '\'' +
                '}';
    }
}
