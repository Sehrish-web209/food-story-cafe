export interface MenuItem {
  id: string;
  name: string;
  price: number | null;
  description: string;
  category: string;
  tag?: string;
}

export const menuItems: MenuItem[] = [
  // =========================
  // Coffee
  // =========================
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    price: 690,
    description: 'Vanilla-flavoured latte.',
    category: 'Coffee',
  },
  {
    id: 'espresso-single',
    name: 'Espresso (Single)',
    price: 400,
    description: 'Single espresso.',
    category: 'Coffee',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 590,
    description: 'Classic cappuccino.',
    category: 'Coffee',
  },
  {
    id: 'mochaccino',
    name: 'Mochaccino',
    price: 590,
    description: 'Coffee with chocolate flavour.',
    category: 'Coffee',
  },
  {
    id: 'americano',
    name: 'Americano',
    price: 590,
    description: 'Classic Americano coffee.',
    category: 'Coffee',
  },
  {
    id: 'cafe-latte',
    name: 'Cafe Latte',
    price: 690,
    description: 'Classic cafe latte.',
    category: 'Coffee',
  },
  {
    id: 'hazelnut-latte',
    name: 'Hazelnut Latte',
    price: null,
    description: 'Hazelnut-flavoured latte.',
    category: 'Coffee',
  },
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    price: null,
    description: 'Caramel-flavoured latte.',
    category: 'Coffee',
  },
  {
    id: 'irish-latte',
    name: 'Irish Latte',
    price: null,
    description: 'Irish-flavoured latte.',
    category: 'Coffee',
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    price: 590,
    description: 'Available in Classic and White.',
    category: 'Coffee',
  },

  // =========================
  // Cold Coffee
  // =========================
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    price: 690,
    description: 'Available in Vanilla, Caramel, and Chocolate.',
    category: 'Cold Coffee',
  },
  {
    id: 'cold-frappe',
    name: 'Cold Frape',
    price: 690,
    description: 'Available in Irish, Hazelnut, and Mocca.',
    category: 'Cold Coffee',
  },

  // =========================
  // Ice Tea
  // =========================
  {
    id: 'ice-tea',
    name: 'Ice Tea',
    price: null,
    description: 'Available in Lemon, Strawberry, Peach, and Orange.',
    category: 'Ice Tea',
  },

  // =========================
  // Smoothies
  // =========================
  {
    id: 'mango-smoothie',
    name: 'Mango Smoothie',
    price: 590,
    description: 'Mango smoothie.',
    category: 'Smoothies',
  },
  {
    id: 'strawberry-smoothie',
    name: 'Strawberry Smoothie',
    price: null,
    description: 'Strawberry smoothie.',
    category: 'Smoothies',
  },
  {
    id: 'peach-smoothie',
    name: 'Peach Smoothie',
    price: null,
    description: 'Peach smoothie.',
    category: 'Smoothies',
  },
  {
    id: 'mixed-berry-smoothie',
    name: 'Mixed Berry Smoothie',
    price: null,
    description: 'Mixed berry smoothie.',
    category: 'Smoothies',
  },

  // =========================
  // Cold Beverages & Lemonade
  // =========================
  {
    id: 'lemonade',
    name: 'Lemonade',
    price: null,
    description: 'Available in Lemon and Mint Margarita.',
    category: 'Cold Beverages & Lemonade',
  },
  {
    id: 'mango-chiller',
    name: 'Mango Chiller',
    price: null,
    description: 'Mango-based chilled beverage.',
    category: 'Cold Beverages & Lemonade',
  },

  // =========================
  // Ice Creams & Desserts
  // =========================
  {
    id: 'ice-cream-shake',
    name: 'Ice Cream Shake',
    price: null,
    description: 'Ice cream shake.',
    category: 'Ice Creams & Desserts',
  },
  {
    id: 'rapper',
    name: 'Rapper',
    price: null,
    description: 'Ice cream dessert.',
    category: 'Ice Creams & Desserts',
  },
  {
    id: 'soft-cone',
    name: 'Soft Cone',
    price: null,
    description: 'Available in Regular and Large.',
    category: 'Ice Creams & Desserts',
  },
  {
    id: 'bouncer',
    name: 'Bouncer',
    price: null,
    description: 'Available in Caramel, Blueberry, Strawberry, Chocolate, and Vanilla.',
    category: 'Ice Creams & Desserts',
  },
  {
    id: 'brownie-with-ice-cream',
    name: 'Brownie With Ice Cream',
    price: null,
    description: 'Brownie served with ice cream.',
    category: 'Ice Creams & Desserts',
  },
  {
    id: 'cookies-cream-rapper',
    name: 'Cookies & Cream Rapper',
    price: null,
    description: 'Freshly made ice cream with cookies.',
    category: 'Ice Creams & Desserts',
  },

  // =========================
  // Fresh Milk Shakes
  // =========================
  {
    id: 'fresh-milk-shakes',
    name: 'Fresh Milk Shakes',
    price: null,
    description: 'Available in Mango and Banana.',
    category: 'Fresh Milk Shakes',
  },
  {
    id: 'oreo-shake',
    name: 'Oreo Shake',
    price: 590,
    description: 'Oreo milk shake.',
    category: 'Fresh Milk Shakes',
  },
  {
    id: 'foodstory-special-shake',
    name: 'Foodstory Special Shake',
    price: 590,
    description:
      'Fresh milk, banana, dates, cashews, and almonds.',
    category: 'Fresh Milk Shakes',
    tag: 'Signature',
  },

  // =========================
  // Fresh Juices
  // =========================
  {
    id: 'fresh-juices',
    name: 'Fresh Juices',
    price: null,
    description: 'Available in Peach, Strawberry, and Falsa.',
    category: 'Fresh Juices',
  },
  {
    id: 'black-grapes-juice',
    name: 'Black Grapes Juice',
    price: null,
    description: 'Fresh black grapes juice.',
    category: 'Fresh Juices',
  },
  {
    id: 'mango-juice',
    name: 'Mango Juice',
    price: null,
    description: 'Fresh mango juice.',
    category: 'Fresh Juices',
  },

  // =========================
  // Delicacies
  // =========================
  {
    id: 'plain-brownie',
    name: 'Plain Brownie',
    price: 300,
    description: 'Plain brownie.',
    category: 'Delicacies',
  },
  {
    id: 'walnut-brownie',
    name: 'Walnut Brownie',
    price: null,
    description: 'Brownie with walnuts.',
    category: 'Delicacies',
  },
  {
    id: 'nutella-brownie',
    name: 'Nutella Brownie',
    price: null,
    description: 'Brownie with Nutella.',
    category: 'Delicacies',
  },
  {
    id: 'chocolate-chip-muffin',
    name: 'Chocolate Chip Muffin',
    price: null,
    description: 'Chocolate chip muffin.',
    category: 'Delicacies',
  },
  {
    id: 'red-velvet-muffin',
    name: 'Red Velvet Muffin',
    price: null,
    description: 'Red velvet muffin.',
    category: 'Delicacies',
  },
  {
    id: 'walnut-tart',
    name: 'Walnut Tart',
    price: null,
    description: 'Walnut tart.',
    category: 'Delicacies',
  },
  {
    id: 'banana-bread-slice',
    name: 'Banana Bread Slice',
    price: null,
    description: 'Slice of banana bread.',
    category: 'Delicacies',
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinemon Roll',
    price: 300,
    description: 'Cinnamon roll.',
    category: 'Delicacies',
  },
  {
    id: 'molten-lava',
    name: 'Molten Lava',
    price: 450,
    description: 'Molten lava dessert.',
    category: 'Delicacies',
    tag: 'Popular',
  },
  {
    id: 'donut',
    name: 'Donut',
    price: null,
    description: 'Donut.',
    category: 'Delicacies',
  },
  {
    id: 'chocolate-cookie',
    name: 'Chocolate Cookie',
    price: null,
    description: 'Chocolate cookie.',
    category: 'Delicacies',
  },
  {
    id: 'hot-milk-cookie',
    name: 'Hot Milk Cookie',
    price: null,
    description: 'Hot milk cookie.',
    category: 'Delicacies',
  },

  // =========================
  // Cakes
  // =========================
  {
    id: 'chocolate-kit-kat-slice',
    name: 'Chocolate Kit Kat',
    price: null,
    description: 'Chocolate Kit Kat cake slice.',
    category: 'Cakes',
  },
  {
    id: 'lotus-cheese-slice',
    name: 'Lotus Cheese',
    price: 500,
    description: 'Lotus cheese cake slice.',
    category: 'Cakes',
    tag: 'Popular',
  },
  {
    id: 'chocolate-fudge-slice',
    name: 'Chocolate Fudge',
    price: 500,
    description: 'Chocolate fudge cake slice.',
    category: 'Cakes',
  },
  {
    id: 'dairy-milk-chocolate-slice',
    name: 'Dairy Milk Chocolate',
    price: null,
    description: 'Dairy Milk chocolate cake slice.',
    category: 'Cakes',
  },
  {
    id: 'three-milk-cake-slice',
    name: 'Three Milk Cake',
    price: null,
    description: 'Three milk cake slice.',
    category: 'Cakes',
  },

  // =========================
  // Mini Cakes
  // =========================
  {
    id: 'mini-lotus-cheese',
    name: 'Lotus Cheese',
    price: null,
    description: 'Mini Lotus cheese cake.',
    category: 'Mini Cakes',
  },
  {
    id: 'mini-chocolate-mousse',
    name: 'Chocolate Mousse',
    price: null,
    description: 'Mini chocolate mousse cake.',
    category: 'Mini Cakes',
  },
  {
    id: 'mini-blueberry',
    name: 'Blueberry',
    price: null,
    description: 'Mini blueberry cake.',
    category: 'Mini Cakes',
  },
  {
    id: 'mini-fudge',
    name: 'Fudge',
    price: null,
    description: 'Mini fudge cake.',
    category: 'Mini Cakes',
  },
  {
    id: 'mini-red-velvet',
    name: 'Red Velvet',
    price: null,
    description: 'Mini red velvet cake.',
    category: 'Mini Cakes',
  },

  // =========================
  // Savoury
  // =========================
  {
    id: 'bbq-chicken-sandwich',
    name: 'Bbq Chicken Sandwich',
    price: 590,
    description: 'BBQ chicken sandwich.',
    category: 'Savoury',
  },
  {
    id: 'grilled-chicken-panini',
    name: 'Grilled Chicken Panini',
    price: 590,
    description: 'Grilled chicken panini.',
    category: 'Savoury',
    tag: 'Popular',
  },
  {
    id: 'grilled-chicken-pita-sandwich',
    name: 'Grilled Chicken Pita Sandwich',
    price: null,
    description: 'Grilled chicken pita sandwich.',
    category: 'Savoury',
  },
  {
    id: 'tandoori-chicken-sandwich',
    name: 'Tandoori Chicken Sandwich',
    price: null,
    description: 'Tandoori chicken sandwich.',
    category: 'Savoury',
  },
  {
    id: 'roasted-chicken-sandwich',
    name: 'Roasted Chicken Sandwich',
    price: null,
    description: 'Roasted chicken sandwich.',
    category: 'Savoury',
  },
  {
    id: 'chicken-wrap',
    name: 'Chicken Wrap',
    price: 490,
    description: 'Chicken wrap.',
    category: 'Savoury',
  },

  // =========================
  // Pizza / Food Story
  // =========================
  {
    id: 'food-story-special',
    name: 'Food Story Special',
    price: null,
    description:
      'Topped with chicken tikka, chicken fajita, beef pepperoni, olives, mushrooms, and mozzarella cheese.',
    category: 'Pizza / Food Story',
    tag: 'Signature',
  },
  {
    id: 'chicken-tikka-pizza',
    name: 'Chicken Tikka',
    price: null,
    description:
      'Topped with chicken tikka, onions, capsicum, olives, mushrooms, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'chicken-fajita-pizza',
    name: 'Chicken Fajita',
    price: null,
    description:
      'Topped with chicken fajita, onions, capsicum, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'cheesy-cherry-pizza',
    name: 'Cheesy / Cherry',
    price: null,
    description: 'Topped with cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'chicken-fajita-sicilian',
    name: 'Chicken Fajita Sicilian',
    price: null,
    description:
      'A combination of beef, chicken, onions, green chilli, pizza sauce, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'meat-lover-pizza',
    name: 'Meat Lover',
    price: null,
    description:
      'Beef pepperoni, chicken, sausages, onions, green peppers, olives, mushrooms, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'barbecue-pizza',
    name: 'Barbecue',
    price: null,
    description:
      'BBQ chicken with BBQ sauce, onions, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'veggies-pizza',
    name: 'Veggies',
    price: null,
    description:
      'Seasonal, local, and imported vegetables with pizza sauce and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'chicken-supreme-pizza',
    name: 'Chicken Supreme',
    price: null,
    description:
      'Chicken tikka, chicken fajita, smoked chicken, chicken pepperoni, green peppers, olives, mushrooms, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'euro-pizza',
    name: 'Euro',
    price: null,
    description:
      'Smoked chicken, chicken sausages, onions, green peppers, olives, mushrooms, and mozzarella cheese.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'chicken-lasagna',
    name: 'Chicken Lasagna',
    price: null,
    description: 'Chicken lasagna.',
    category: 'Pizza / Food Story',
  },
  {
    id: 'garlic-bread-with-cheese',
    name: 'Garlic Bread With Cheese',
    price: null,
    description: 'Garlic bread topped with cheese.',
    category: 'Pizza / Food Story',
  },

  // =========================
  // Others
  // =========================
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    price: 690,
    description: 'Caesar salad.',
    category: 'Others',
  },
  {
    id: 'mineral-water',
    name: 'Mineral Water',
    price: null,
    description: 'Mineral water.',
    category: 'Others',
  },
  {
    id: 'lotus-cheese-cake',
    name: 'Lotus Cheese Cake',
    price: null,
    description: 'Lotus cheese cake.',
    category: 'Others',
  },
];