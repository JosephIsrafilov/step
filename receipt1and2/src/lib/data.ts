export const recipes = [
  {
    title: "Chocolate Cake",
    slug: "chocolate-cake",
    category: "dessert",
    description: "Rich and moist chocolate cake",
    ingredients: ["Flour", "Sugar", "Cocoa", "Eggs", "Butter"],
    steps: ["Preheat oven", "Mix ingredients", "Bake for 30 minutes"],
  },
  {
    title: "Tomato Soup",
    slug: "tomato-soup",
    category: "soup",
    description: "Simple and delicious tomato soup",
    ingredients: ["Tomatoes", "Garlic", "Onion", "Basil"],
    steps: ["Blend ingredients", "Boil", "Serve hot"],
  },
  {
    title: "Caesar Salad",
    slug: "caesar-salad",
    category: "salad",
    description: "Classic Caesar salad with homemade dressing",
    ingredients: [
      "Romaine lettuce",
      "Parmesan cheese",
      "Croutons",
      "Garlic",
      "Lemon",
      "Olive oil",
    ],
    steps: [
      "Wash and chop lettuce",
      "Make dressing",
      "Toss with croutons",
      "Add cheese",
    ],
  },
  {
    title: "Beef Steak",
    slug: "beef-steak",
    category: "main",
    description: "Perfectly grilled beef steak",
    ingredients: [
      "Beef steak",
      "Salt",
      "Pepper",
      "Olive oil",
      "Garlic",
      "Butter",
    ],
    steps: [
      "Season steak",
      "Heat pan",
      "Cook 3-4 minutes each side",
      "Rest for 5 minutes",
    ],
  },
  {
    title: "Apple Pie",
    slug: "apple-pie",
    category: "dessert",
    description: "Traditional apple pie with flaky crust",
    ingredients: [
      "Apples",
      "Pie crust",
      "Sugar",
      "Cinnamon",
      "Butter",
      "Flour",
    ],
    steps: [
      "Prepare crust",
      "Slice apples",
      "Mix filling",
      "Bake for 45 minutes",
    ],
  },
  {
    title: "Chicken Noodle Soup",
    slug: "chicken-noodle-soup",
    category: "soup",
    description: "Comforting chicken noodle soup",
    ingredients: [
      "Chicken",
      "Noodles",
      "Carrots",
      "Celery",
      "Onion",
      "Chicken broth",
    ],
    steps: [
      "Boil chicken",
      "Add vegetables",
      "Add noodles",
      "Simmer until done",
    ],
  },
];

export type Recipe = (typeof recipes)[0];

export const categories = ["dessert", "soup", "salad", "main"] as const;
export type Category = (typeof categories)[number];
