package com.techelevator.dao;

import com.techelevator.model.Recipe;

import java.util.List;

public interface RecipeDao {


    public List<Recipe> getRecipeName(int userId);
}
