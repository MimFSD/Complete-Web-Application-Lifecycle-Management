# Project Overview

**_ParallaX Properties_** is a **luxury** focused real estate website that allows users to search for properties, view property details, and contact the property owner. The website is built using React, Tailwind CSS, and Firebase. The website is fully responsive and has a clean and modern design.

### Live link: https://parallax-properties.web.app/

## Features and Characteristics:
-   User Authentication: Enables users to create accounts, log in, and access their personalized profiles, ensuring a secure and tailored experience.

-   Profile Management: Allows users to edit their profile information, including personal details and preferences, providing them with control over their account.
-   Private Routes: Implements private routes accessible only to logged-in users, ensuring restricted access to sensitive or exclusive content such as bookings or special offers.
-   Blog Section: Provides informative and engaging blog content related to hospitality, featuring articles on travel tips, destination guides, hotel reviews, and more, enriching the user experience with valuable insights and inspiration.


## npm Packages Used
-  Vite with React Template: Set up the project with Vite and React.
-  React Router DOM: Implement client-side routing for seamless navigation.
-  localforage: Manage user data using asynchronous local storage.
-  tailwindcss and daisyui: Utilize Tailwind CSS and DaisyUI for modern styling.
-  react-firebase: Integrate Firebase services for user authentication and database functionalities.
-  react-multi-carousel: used for a updated slider.
-  aos: used for a All Property Animation.
-  Animate.css: used for a carousel slider animation.


## More Features

-   Dynamic titles for each page

-   Responsive design

-   Scroll to top of the page button on all pages

-   Navbar

    -   fixed to the top and shows up on all pages
    -   active routes are highlighted
    -   links to Home, Properties, Favorites, and Profile
    -   Login, Register and Logout buttons
        -   Login button redirects to the login page
        -   Register button redirects to the register page
        -   on refresh a loading skeleton is shown while the user is being authenticated
        -   Logout button logs the user out and redirects to the home page
            -   Logout button is only visible if the user is logged in with user profile image and tooltip with users name on hover

-   Login page

    -   Form with email and password fields
    -   Login button
    -   Redirects to the home page after successful login
    -   Google login
    -   Github login
    -   link to register page
    -   error toast shown with relevant error message if login fails
    -   hide or show password **(Challenge Part)**
    -   nagivates to home page if user is already logged in

-   Register page

    -   Form with email, password, photo url, and confirm password fields
    -   Register button
    -   Redirects to the home page after successful registration
    -   link to login page
    -   error toast shown with relevant error message if registration fails
    -   error handling for password criteria met
    -   hide or show password **(Challenge Part)**
    -   nagivates to home page if user is already logged in

-   Home page

    -   banner with 4 slides
    -   estate section as Featured Properties
    -   for rent section with a slider showing the properties for rent
    -   for sale section with a slider showing the properties for sale

-   Footer

    -   shows up on all pages
    -   links to Home, Properties, Favorites, and Profile
    -   social media links
    -   contact information
    -   uses hash links to scroll to specific id's on the page from "Our Properties" section

-   Private Routes for authenticated users:

    -   Profile page with user name, email, and photo, and allows the user to update their photo and name **(Challenge Part)**
    -   Detailed property page (Estate Details)
    -   Favorites page, unique to each user. Saved the properties that the user liked to local storage using their email, so it persists even if they user logs out. A different user cannot view the favorites of another user.

-   404 Page

-   Loading Skeletons

    -   shown while the user is being authenticated
    -   shown while the properties are being fetched

-   Favorites page
    -   shows the properties that the user liked
    -   user can remove a property from their favorites
    -   user can view the details of a property
    -   favorites are unique to each user, but as local storage is used, they persist for a particular user even if they log out but only on the same device/browser


### Technology Used

- **Frontend:** React, Tailwind CSS, Vite
- **Authentication:** Firebase for secure authentication

### Steps to Clone and Run Locally

1. Clone the repository from GitHub: `git clone https://github.com/your-repo-url.git`
2. Navigate to the project directory: `cd proctor-real-estate`
3. Install dependencies: `npm install`
4. Set up environment variables for Firebase configuration.
5. Start the development server: `npm start`

### Development Plugins

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md):** Uses Babel for Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc):** Uses SWC for Fast Refresh.