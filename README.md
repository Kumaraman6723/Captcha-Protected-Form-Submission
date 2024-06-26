

# Captcha-Protected Form Submission

This project demonstrates how to integrate Google reCAPTCHA with a form submission in a web application, ensuring bot protection and validating user input server-side.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Others:** Google reCAPTCHA API

## Setup Instructions

### Frontend (HTML, CSS, JavaScript)

1. Clone the repository:
   ```bash
   git clone https://github.com/Captcha-Protected-Form-Submission](https://github.com/Kumaraman6723/Captcha-Protected-Form-Submission
   cd Captcha-Protected-Form-Submission
   ```

2. Install dependencies:
   - None required for frontend.

3. Configure the Google reCAPTCHA:
   - Replace `data-sitekey` in `index.html` with your reCAPTCHA site key.
   - Ensure the `script1.js` file correctly handles form submission and reCAPTCHA validation.

### Backend (Node.js, Express.js)

1. Install Node.js and npm.

2. Clone the repository (if not already done).

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure the backend:
   - Replace the `secret` in `server.js` with your reCAPTCHA secret key.
   - Replace `remoteip` as needed for your server environment.

5. Start the server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in a web browser.
2. Fill out the form with valid data.
3. Complete the reCAPTCHA challenge.
4. Click on the "Submit" button.
5. Check the server console for validation status.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Google reCAPTCHA](https://developers.google.com/recaptcha/docs/)
- [Express.js](https://expressjs.com/)

---

Adjust any other details specific to your project before publishing.
