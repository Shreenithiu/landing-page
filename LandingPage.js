import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Delicious Spaghetti Carbonara</h1>
        <p>A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
        <button className="cta-button" onClick={() => document.getElementById('recipe').scrollIntoView()}>View Recipe</button>
      </header>
      <section className="recipe-section" id="recipe">
        <h2>Ingredients</h2>
        <ul>
          <li>200g spaghetti</li>
          <li>100g pancetta</li>
          <li>2 large eggs</li>
          <li>50g pecorino cheese</li>
          <li>50g parmesan cheese</li>
          <li>Freshly ground black pepper</li>
          <li>Salt</li>
          <li>1 clove of garlic</li>
          <li>50g unsalted butter</li>
        </ul>
        <h2>Instructions</h2>
        <ol>
          <li>Boil the spaghetti in salted water until al dente.</li>
          <li>In a separate pan, fry the pancetta with the minced garlic in the butter until crispy.</li>
          <li>In a bowl, beat the eggs and mix in the grated pecorino and parmesan cheeses.</li>
          <li>Drain the cooked pasta and immediately add it to the pancetta pan, tossing to coat the pasta in the rendered fat.</li>
          <li>Remove the pan from heat and quickly pour in the egg and cheese mixture, stirring constantly to prevent the eggs from scrambling.</li>
          <li>Season with freshly ground black pepper and salt to taste.</li>
          <li>Serve immediately, garnished with extra grated cheese and parsley if desired.</li>
        </ol>
      </section>
      <section className="nutrition-facts">
        <h2>Nutrition Facts</h2>
        <table>
          <tr>
            <th>Amount Per Serving</th>
            <th>% Daily Value*</th>
          </tr>
          <tr>
            <td>Calories</td>
            <td>380</td>
          </tr>
          <tr>
            <td>Total Fat</td>
            <td>20g</td>
          </tr>
          <tr>
            <td>Saturated Fat</td>
            <td>8g</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>120mg</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>530mg</td>
          </tr>
          <tr>
            <td>Total Carbohydrate</td>
            <td>30g</td>
          </tr>
          <tr>
            <td>Dietary Fiber</td>
            <td>2g</td>
          </tr>
          <tr>
            <td>Sugars</td>
            <td>1g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>17g</td>
          </tr>
        </table>
        <p>*Percent Daily Values are based on a 2000 calorie diet.</p>
      </section>
    </div>
  );
}

export default App;
