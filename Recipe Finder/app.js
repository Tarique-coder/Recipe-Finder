let recipes = {
  pasta: `"<span class="edit">Pasta Recipe</span>"
    - Ingredients:
  - 200g pasta
  - 2 tbsp olive oil
  - 2 cloves garlic, minced
  - 1 cup tomato sauce
  - Salt and pepper to taste
- Instructions:
  1. Boil pasta in salted water until al dente.
  2. Heat olive oil in a pan, sauté garlic until fragrant.
  3. Add tomato sauce, simmer for 5 minutes.
  4. Toss pasta in sauce, season with salt and pepper.
  5. Serve hot!`,
  chicken: `"<span class="edit">Chicken Recipe</span>"
- Ingredients:
  - 500g chicken breast, cubed
  - 1 tbsp curry powder
  - 1 cup coconut milk
  - 1 onion, chopped
  - Salt to taste
- Instructions:
  1. Sauté onion in a pan until soft.
  2. Add chicken and curry powder, cook until browned.
  3. Pour in coconut milk, simmer for 20 minutes.
  4. Season with salt and serve with rice.`,
  biryani: `"<span class="edit">Biryani Recipe</span>"
- Ingredients:
  - 2 cups basmati rice
  - 500g chicken, cubed
  - 2 tbsp biryani masala
  - 1 onion, sliced
  - 1 cup yogurt
- Instructions:
  1. Marinate chicken in yogurt and biryani masala for 1 hour.
  2. Fry onion until golden, add chicken and cook until browned.
  3. Parboil rice with spices, layer over chicken.
  4. Cover and cook on low for 20 minutes.
  5. Serve with raita.`,
  butterchicken: `"<span class="edit">Butter Chicken</span>"
- Ingredients:
  - 500g chicken, cubed
  - 1 cup tomato puree
  - 1/2 cup cream
  - 2 tbsp butter
  - 1 tbsp garam masala
- Instructions:
  1. Marinate chicken with spices and yogurt for 30 minutes.
  2. Cook chicken in butter until browned.
  3. Add tomato puree and simmer for 15 minutes.
  4. Stir in cream, cook for 5 more minutes.
  5. Serve with naan.`,
  paneertikka: `"<span class="edit">Paneer-Tikka Recipe</span>"
- Ingredients:
  - 200g paneer, cubed
  - 1 cup yogurt
  - 1 tbsp tandoori masala
  - 1 bell pepper, cubed
  - 1 onion, cubed
- Instructions:
  1. Marinate paneer, bell pepper, and onion in yogurt and tandoori masala for 1 hour.
  2. Skewer ingredients alternately.
  3. Grill or bake at 400°F (200°C) for 15 minutes.
  4. Serve with mint chutney.`,
  samosa: `"<span class="edit">Samosa Recipe</span>"
- Ingredients:
  - 2 cups flour
  - 2 potatoes, boiled and mashed
  - 1/2 cup peas
  - 1 tsp cumin
  - Oil for frying
- Instructions:
  1. Make dough with flour and water, rest for 30 minutes.
  2. Mix potatoes, peas, and cumin for filling.
  3. Roll dough into circles, fill, and fold into triangles.
  4. Fry until golden.
  5. Serve with chutney.`,
  palakpaneer: `"<span class="edit">Palak-Paneer Recipe</span>"
- Ingredients:
  - 200g paneer, cubed
  - 2 cups spinach, blended
  - 1 onion, chopped
  - 1 tsp garam masala
  - 2 tbsp cream
- Instructions:
  1. Sauté onion until golden.
  2. Add spinach and garam masala, cook for 5 minutes.
  3. Add paneer and simmer for 10 minutes.
  4. Stir in cream.
  5. Serve with rice.`,
  gulabjamun: `"<span class="edit">Gulaab-Jamun Recipe</span>"
- Ingredients:
  - 1 cup milk powder
  - 1/4 cup flour
  - 1 cup sugar
  - Oil for frying
  - Cardamom powder
- Instructions:
  1. Make dough with milk powder and flour, form balls.
  2. Fry balls until golden.
  3. Make sugar syrup with cardamom.
  4. Soak balls in warm syrup.
  5. Serve warm.`,
  maggie: `"<span class="edit">Maggie Recipe</span>"
- Ingredients:
  - 1 packet Maggi noodles (70g)
  - 1.5 cups water
  - 1 tsp Maggi masala (from packet)
  - 1 tbsp butter
  - 1/4 cup chopped vegetables (e.g., peas, carrots)
- Instructions:
  1. Boil water in a pan, add Maggi noodles.
  2. Cook for 2 minutes until noodles soften.
  3. Add Maggi masala and vegetables, stir well.
  4. Add butter and cook until water reduces.
  5. Serve hot!`,
};

let dishInput = document.querySelector("#dishInput");
let btn = document.querySelector("button");
let outPut = document.querySelector(".output");

btn.addEventListener("click", function () {
  console.log("button was clicked");
  let input = dishInput.value.trim().toLowerCase();
  if (input == "") {
    alert("Write the dish name first!");
  }
  let recipe =
    recipes[input] ||
    `sorry! no results for "<span class="highlight">${input}</span>". search someother dishes`;
  outPut.innerHTML = recipe;
  dishInput.value = "";
});

dishInput.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    btn.click();
  }
});
