# Azure Coast Resort

**Project:** Beach resort landing page and booking request site

Azure Coast Resort is a beach resort concept built for the final project. It features a premium luxury aesthetic, curated stay packages, and a reservation-style enquiry form that works with the PHP/AJAX setup.

## Features

- Responsive HTML and CSS layout for desktop and mobile screens.
- JavaScript interactions for package loading, form submission, and theme switching.
- AJAX resort loading from `hello.php?action=projects` without reloading the page.
- AJAX contact submission to `hello.php?action=contact` with server-side validation.
- Local storage remembers the visitor’s light/dark theme preference.
- Ocean-inspired hero section with layered shapes, glass panels, and warm resort tones.
- Clear success and error messages for network, validation, and server failures.

## Project Files

- `index.html` - Main beach resort landing page and booking form.
- `styles.css` - Resort branding, responsive layout, and visual design.
- `script.js` - AJAX requests, DOM updates, form handling, and local storage.
- `hello.php` - PHP backend for project data and contact processing.
- `data.txt` - JSON resort package data returned by the projects endpoint.

## Setup with XAMPP

1. Start Apache in the XAMPP Control Panel.
2. Keep this folder at `/Applications/XAMPP/xamppfiles/htdocs/precious/my_final_project`.
3. Open `http://localhost/precious/my_final_project/` in a browser.
4. Click **Load packages** to fetch stay offers asynchronously.
5. Submit the booking form to test the PHP request.

PHP is used through XAMPP Apache. Do not open the page with `file://`, because AJAX requests require a web server.

## How It Works

The load button sends a `GET` request to `hello.php?action=projects`. PHP reads `data.txt`, decodes the JSON, and returns it to JavaScript. The JavaScript creates the resort cards in the page.

The booking form sends a JSON `POST` request to `hello.php?action=contact`. PHP checks that all fields are present and that the email address is valid, then returns a JSON success or error message. The page displays the response without refreshing.

The theme button toggles the `light-theme` class and stores the selected theme in `localStorage`, so the preference remains after a reload.

## Test and Debug Checklist

- Static page loads through XAMPP Apache.
- Project AJAX request returns three resort package cards.
- Contact AJAX request accepts valid data and returns a success message.
- Empty contact fields are rejected by the browser and PHP.
- Invalid email addresses return HTTP 400 with an error message.
- Missing or invalid package data returns a server error message.
- Desktop layout uses three resort columns.
- Mobile layout switches to one card column below 700px.
- Theme selection persists after reload.
- JavaScript and PHP syntax checks pass.

## Summary

The project now presents a beach resort brand experience with luxury coastal styling, curated vacation packages, and a functional booking request form.
