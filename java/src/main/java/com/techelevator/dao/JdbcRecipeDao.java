package com.techelevator.dao;

import com.techelevator.model.Recipe;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcRecipeDao implements RecipeDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcRecipeDao(DataSource ds) {
        this.jdbcTemplate = new JdbcTemplate(ds);
    }



@Override
public List <Recipe> getRecipeName(int userId) {
    List<Recipe> recipes = new ArrayList<>();


    String sql = "SELECT recipe_name, user_id, recipe_id FROM recipes  WHERE user_id = ?";
    SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);


    while (results.next()) {
        recipes.add(mapRowToRecipe(results));

    }
    return recipes;



}




    private Recipe mapRowToRecipe(SqlRowSet rs)  {
        Recipe recipe = new Recipe();

        recipe.setUserId(rs.getInt("user_id"));
        recipe.setRecipeName(rs.getString("recipe_name"));
        recipe.setRecipeId(rs.getInt("recipe_id"));
        return recipe;

    }


}
