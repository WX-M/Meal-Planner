package com.techelevator.controller;

import com.techelevator.dao.IngredientDao;
import com.techelevator.dao.RecipeDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.Ingredient;
import com.techelevator.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;


@RestController
@PreAuthorize("isAuthenticated()")
public class IngredientController {


    @Autowired
    private IngredientDao ingredientDao;
    @Autowired
    private UserDao userDao;

    @RequestMapping(path = "/ingredient/{id}", method = RequestMethod.GET)
    public List<Ingredient> getIngredientName(@PathVariable int id) {
        return ingredientDao.getIngredientName(id);


    }
}
