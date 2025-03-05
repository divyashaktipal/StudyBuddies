# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:



```
Directory structure:
└── studybuddiesmentor-studybuddies_infosys_internship_oct2024/
    ├── README.md
    ├── LICENSE
    ├── backend/
    │   ├── readme.md
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── .env.sample
    │   ├── .gitignore
    │   ├── .prettierignore
    │   ├── .prettierrc
    │   ├── public/
    │   │   └── .gitkeep
    │   └── src/
    │       ├── index.js
    │       ├── controllers/
    │       │   ├── cardController.js
    │       │   ├── deckController.js
    │       │   ├── decktagController.js
    │       │   ├── tagController.js
    │       │   ├── userController.js
    │       │   └── voteController.js
    │       ├── db/
    │       │   ├── Card.js
    │       │   ├── Deck.js
    │       │   ├── DeckTag.js
    │       │   ├── Tag.js
    │       │   ├── User.js
    │       │   └── Vote.js
    │       ├── middlewares/
    │       │   ├── ImageValidate.js
    │       │   ├── auth.js
    │       │   ├── authoriz.js
    │       │   └── errorMiddleware.js
    │       ├── routes/
    │       │   ├── cardRoutes.js
    │       │   ├── deckRoutes.js
    │       │   ├── decktagRoutes.js
    │       │   ├── tagRoutes.js
    │       │   ├── userRoutes.js
    │       │   └── voteRoutes.js
    │       └── utils/
    │           ├── ApiError.js
    │           ├── ApiResponse.js
    │           ├── SenddeckMail.js
    │           ├── TagUtils.js
    │           ├── TagValidate.js
    │           ├── UserMail.js
    │           ├── asyncHandler.js
    │           └── cloudConfig.js
    ├── client/
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── tailwind.config.js
    │   ├── vite.config.js
    │   ├── .gitignore
    │   ├── public/
    │   └── src/
    │       ├── App.css
    │       ├── App.jsx
    │       ├── f.css
    │       ├── firebase.js
    │       ├── index.css
    │       ├── main.jsx
    │       ├── assets/
    │       │   ├── background_images/
    │       │   ├── icons/
    │       │   └── logo/
    │       ├── components/
    │       │   ├── About.jsx
    │       │   ├── Adminpage.jsx
    │       │   ├── Alert.jsx
    │       │   ├── Button.jsx
    │       │   ├── ContactUs.jsx
    │       │   ├── Deck.jsx
    │       │   ├── DeckFilter.jsx
    │       │   ├── DeckItem.jsx
    │       │   ├── Deck_explore.jsx
    │       │   ├── Deck_explore_admin.jsx
    │       │   ├── Deck_user.jsx
    │       │   ├── EditDeckPage.jsx
    │       │   ├── ExplorePage.jsx
    │       │   ├── ExplorePage_admin.jsx
    │       │   ├── Features.css
    │       │   ├── Features.jsx
    │       │   ├── Flashcard.jsx
    │       │   ├── Flashcards.jsx
    │       │   ├── Footer.css
    │       │   ├── Footer.jsx
    │       │   ├── ForgotPassword.css
    │       │   ├── ForgotPassword.jsx
    │       │   ├── Header.jsx
    │       │   ├── Help.jsx
    │       │   ├── HeroSection.css
    │       │   ├── HeroSection.jsx
    │       │   ├── Home.jsx
    │       │   ├── Homefeature.jsx
    │       │   ├── Homefooter.jsx
    │       │   ├── Login.css
    │       │   ├── Login.jsx
    │       │   ├── LogoutButton.jsx
    │       │   ├── MailVerification.css
    │       │   ├── MailVerification.jsx
    │       │   ├── MainDeck.jsx
    │       │   ├── MainPage.jsx
    │       │   ├── Nav.jsx
    │       │   ├── Navbar.jsx
    │       │   ├── OAuth.jsx
    │       │   ├── Otpchecker.jsx
    │       │   ├── Privacy.css
    │       │   ├── Privacy.jsx
    │       │   ├── ProtectedRoute.jsx
    │       │   ├── Register.jsx
    │       │   ├── ResetPassword.css
    │       │   ├── ResetPassword.jsx
    │       │   ├── TagSelector.jsx
    │       │   ├── TermNCondition.jsx
    │       │   ├── Testimonials.jsx
    │       │   ├── UpdateFlashcard.jsx
    │       │   ├── UserMonitoringPage.jsx
    │       │   ├── UserPage.jsx
    │       │   ├── Userflashcards.jsx
    │       │   ├── ViewDeckPage.jsx
    │       │   └── userFavourite.jsx
    │       ├── pages/
    │       │   └── DeckList.jsx
    │       └── styles/
    │           └── tailwind.css
    └── .github/
        └── workflows/
            └── auto-assign.yml
```


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
