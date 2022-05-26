package com.techelevator.dao;

import com.techelevator.model.Ingredient;
import com.techelevator.model.Recipe;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcIngredientDao implements IngredientDao {
    private JdbcTemplate jdbcTemplate;

    public JdbcIngredientDao(DataSource ds) {
        this.jdbcTemplate = new JdbcTemplate(ds);
    }



    @Override
    public List<Ingredient> getIngredientName(int recipeId) {
        List<Ingredient> ingredients = new ArrayList<>();


        String sql = "SELECT ingredients.ingredient_id, ingredients.ingredient_name\n" +
                "FROM ingredients\n" +
                "JOIN ingredient_recipe ON ingredient_recipe.ingredient_id = ingredients.ingredient_id  \n" +
                "JOIN recipes ON recipes.recipe_id = ingredient_recipe.recipe_id\n" +
                "WHERE recipes.recipe_id = ?";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, recipeId);

        System.out.println(results);
        while (results.next()) {
            ingredients.add(mapRowToIngredient(results));



        }
        return ingredients;


    }



    private Ingredient mapRowToIngredient(SqlRowSet rs)  {

        Ingredient ingredient = new Ingredient();
        ingredient.setIngredientName(rs.getString("ingredient_name"));
        ingredient.setIngredientId(rs.getInt("ingredient_id"));
        return ingredient;



    }
}
