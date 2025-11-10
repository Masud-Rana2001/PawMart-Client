# GreenNest

Indoor Plant Care & Store — single page React app for exploring plant care
guides, buying plants, and booking consultations.

Live Demo: <https://green-nest-mr.netlify.app/>  



## Project Summary

GreenNest is a minimalist, responsive SPA designed for plant lovers. It
demonstrates secure Firebase authentication (email/password + Google),
client-side routing, protected routes, and JSON-driven product data.

## Goals & Requirements

- Responsive, calming UI with persistent Navbar & Footer.
- Firebase Auth: Signup, Login, Google Sign-in, Forgot Password,
  updateProfile().
- Fetch plant data from a local JSON file.
- Protected plant details & profile pages.
- No page crashes / reload errors when navigating.

## Features

- Hero slider (Swiper.js or Framer Motion)
- Top Rated Indoor Plants (cards from plants.json)
- Plant Details (protected): full data + booking form
- Authentication: Signup, Login, Google Sign-In, Forgot Password
- My Profile: view & update displayName/photoURL
- Persistent Navbar & Footer with conditional rendering
- Toast notifications for actions & errors

## Tech Stack

- React (CRA / Vite)
- React Router DOM
- Firebase Auth (v9 modular)
- Swiper.js or Framer Motion (hero)
- Tailwind CSS / CSS Modules / plain CSS
- react-toastify (toasts)
- Axios / fetch for JSON
- Optional: Vercel / Netlify for deployment

## Project Structure

Adjust to your implementation. Key files and folders:

```
GreenNest/
├─ .gitignore
├─ README.md
├─ package.json
├─ plants.json
├─ public/
│  └─ index.html
├─ src/
│  ├─ main.jsx / index.js
│  ├─ App.jsx
│  ├─ assets/
│  │  └─ images/
│  ├─ components/
│  │  ├─ Navbar/
│  │  ├─ Footer/
│  │  └─ PlantCard/
│  ├─ pages/
│  │  ├─ Home/
│  │  ├─ PlantsList/
│  │  ├─ PlantDetails/   (protected)
│  │  ├─ Login/
│  │  ├─ Signup/
│  │  ├─ Profile/        (protected)
│  │  └─ NotFound/
│  ├─ routes/
│  │  └─ ProtectedRoute.jsx
│  ├─ services/
│  │  └─ firebase.js
│  ├─ utils/
│  └─ styles/
└─ README.md
```

## plants.json (example)

Place in project root or public folder and fetch it:

```json
[
  {
    "plantId": 1,
    "plantName": "Snake Plant",
    "category": "Air Purifier",
    "price": 18,
    "rating": 4.8,
    "availableStock": 10,
    "careLevel": "Easy",
    "description": "A hardy plant that purifies indoor air and thrives in low light.",
    "image": "https://i.postimg.cc/example1.png",
    "providerName": "UrbanGreen Studio"
  },
  {
    "plantId": 2,
    "plantName": "Pothos",
    "category": "Hanging",
    "price": 12,
    "rating": 4.6,
    "availableStock": 15,
    "careLevel": "Easy",
    "description": "Fast-growing trailing plant, ideal for shelves and hanging baskets.",
    "image": "https://i.postimg.cc/example2.png",
    "providerName": "GreenThumb Co"
  }
  /* add >= 7 items */
]
```

## Routing & Pages

- "/" — Home (hero, top-rated, tips, experts)
- "/plants" — All plants listing
- "/plants/:id" — Plant Details (protected)
- "/login" — Login page (email/password + Google)
- "/signup" — Signup page (name, email, photoURL, password)
- "/profile" — My Profile (protected)
- "\*" — NotFound

Navbar and Footer should be rendered outside the <Routes> so they persist.

## Authentication & Firebase

- Use Firebase modular SDK (v9+).
- Methods required:
  - createUserWithEmailAndPassword
  - signInWithEmailAndPassword
  - signInWithPopup (GoogleAuthProvider)
  - sendPasswordResetEmail
  - updateProfile
  - onAuthStateChanged (to keep auth state)
- After successful login/signup, redirect to the previous requested route or
  home.

## Protected Routes

Implement a ProtectedRoute component that:

- Checks auth state (context or hook)
- If authenticated → render children
- If not → redirect to /login and preserve intended path in state (navigate
  after login)

Example behavior:

- User clicks "View Details" on a plant → if unauthenticated, go to /login, then
  upon success navigate back to /plants/:id.

## Forms & Interactions

- Login: email, password, forgot password link, Google button, password
  show/hide toggle.
- Signup: name, email, photoURL, password (validate: uppercase, lowercase, min
  6), password toggle, Google button.
- Forgot Password: enter email → sendPasswordResetEmail, show toast.
- Plant Details: show large image, details, and "Book Consultation" form (name,
  email, Book Now). On submit -> show success toast and clear form.
- Profile: displayName, email, photo; allow updating displayName/photoURL with
  updateProfile() and reflect changes immediately via onAuthStateChanged or
  context refresh.

## Run Locally (Windows)

1. Clone git clone <your-repo-url>
2. Install cd GreenNest npm install
3. Add environment variables (see below)
4. Start dev server npm start
5. Build npm run build

## Environment Variables

Create a .env.local (or .env) and add Firebase config (replace with your
values):

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

Note: For Create React App, prefix with REACT*APP*. For Vite use VITE\_ prefix.

## Deployment

- Build (npm run build) and deploy to Vercel / Netlify / Firebase Hosting.
- Make sure environment variables are set in the hosting dashboard.

## Testing & Validation

- Manual: test routing, auth flows, protected pages, forgot password flow,
  booking form.
- Add unit tests for key components (React Testing Library / Jest).
- Confirm password validation prevents invalid registrations and shows inline
  error.

## Notes / Tips

- Keep Navbar links conditional based on auth state: show avatar + dropdown when
  logged in; otherwise show Login / Register.
- Persist auth in an AuthContext to avoid prop drilling.
- Use local JSON to simulate backend; fetch from /plants.json (public) or import
  it directly.
- Use react-toastify for consistent feedback.
- Ensure no full-page reloads on navigation: use Link from react-router-dom.


## License

MIT License — include LICENSE file if required.

## Contact

Project author / maintainer: <MASUD> 
