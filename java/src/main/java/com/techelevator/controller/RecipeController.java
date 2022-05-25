package com.techelevator.controller;

import com.techelevator.dao.RecipeDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.security.Principal;
import java.util.List;

@RestController
@PreAuthorize("isAuthenticated()")
public class RecipeController {

    @Autowired
    private RecipeDao recipeDao;
    @Autowired
    private UserDao userDao;

    @RequestMapping(path = "/recipes", method = RequestMethod.GET)
    public List<Recipe> getRecipeName(Principal principal) {
        return recipeDao.getRecipeName(userDao.findIdByUsername(principal.getName()));

    }


}
