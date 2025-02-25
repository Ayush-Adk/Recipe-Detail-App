

Recipe Detail App
Welcome to Recipe Detail App, a sophisticated and elegant web application for sharing, discovering, and creating culinary masterpieces. Built with React and styled with a classic, timeless design.

Features
Elegant Design: A formal, classic theme with a palette of Forest Green, Deep Burgundy, and Antique Gold, inspired by high-end cookbooks.
Smooth Animations: Subtle yet captivating effects like zoomIn, spinPulse, bounce, and ripple enhance interactivity without overwhelming the user.
Recipe Showcase: Display recipes in a responsive grid or list view with hover effects that elevate cards for a premium feel.
Recipe Creation: A refined form interface with animated underlines, ripple effects on buttons, and a luxurious layout.
Responsive Layout: Adapts seamlessly across devices, from desktops to mobiles, maintaining elegance at every breakpoint.
Design Highlights
Color Palette
Forest Green (#355e3b): Conveys freshness and nature, used as the primary color.
Deep Burgundy (#8b0000): Adds warmth and sophistication, perfect for accents.
Antique Gold (#d4a017): Highlights key elements with a touch of luxury.
Soft Ivory (#f5f5f5): A warm, classic background that enhances readability.
Typography
Playfair Display: Used for headings, offering an elegant, serif style.
Lora: Applied to body text and inputs, providing a refined, readable contrast.
Best Animations
zoomIn: Gently scales and fades in elements like the form container and recipe cards for a smooth entrance.
spinPulse: A subtle rotation with a glowing shadow, used on the submit button hover for a dynamic effect.
ripple: Creates a circular expansion on button clicks, adding a tactile feel.
bounce: A gentle up-and-down motion for interactive elements, keeping the design lively yet understated.
UI Components
Hero Section: A gradient header with a subtle shadow and animated icon (subtlePulse).
Recipe Cards: Hover effects lift cards with a soft shadow and border color change.
Form Inputs: Animated underlines on labels and focus states with a golden glow.
Getting Started
Prerequisites
Node.js (v16 or higher)
npm or yarn
Git
Installation
Clone the Repository:

bash
git clone https://github.com/Ayush-Adk/Recipe-Detail-App.git
cd Recipe-Detail-App
Install Dependencies:

bash
npm install
Or using yarn:

bash
yarn install
Run the App:

bash
npm run dev
Or with yarn:

bash
yarn dev
Open http://localhost:5173 (or the port specified in your setup) in your browser.

Project Structure
plaintext
Recipe-Detail-App/
├── src/
│   ├── components/
│   │   ├── RecipeCard.tsx    # Displays individual recipes
│   │   ├── SearchBar.tsx     # Search functionality
│   │   └── ui/
│   │       └── button.tsx    # Reusable button component
│   ├── pages/
│   │   ├── Index.tsx         # Home page with recipe showcase
│   │   └── Create.tsx        # Recipe creation page
│   ├── store/
│   │   └── recipeStore.ts    # Zustand store for recipe state
│   └── Index.css             # Global styles with animations
├── public/                   # Static assets
└── README.md                 # This file
Usage
Home Page: Browse featured recipes, toggle between grid and list views, or search for inspiration.
Create Recipe: Fill out the elegant form to share your culinary creations, with animated feedback on every interaction.
Push Changes: After making updates, sync with the remote repository:
bash
git pull origin main
git add .
git commit -m "Your message"
git push origin main
Contributing
Fork the repository.
Create a feature branch:
bash
git checkout -b feature/your-feature
Commit your changes:
bash
git commit -m "Add your feature"
Push to the branch:
bash
git push origin feature/your-feature
Open a pull request on GitHub.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React: For the powerful frontend framework.
Lucide Icons: For elegant, customizable icons.
Playfair Display & Lora: For the classic typography.
