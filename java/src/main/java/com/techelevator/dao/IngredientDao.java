package com.techelevator.dao;

import com.techelevator.model.Ingredient;

import java.util.List;

public interface IngredientDao {

    public List<Ingredient> getIngredientName(int recipeId);
}
