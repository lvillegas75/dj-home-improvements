# Construction Company Website

This is a React-based website for a construction company that allows users to submit their information to receive a bid. The project includes a contact form that sends the submitted information via email and text to the owner.

## Project Structure

```
construction-company-website
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   └── BidRequest.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── services
│   │   └── emailService.js
│   ├── styles
│   │   └── App.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Features

- **Responsive Design**: The website is designed to be responsive and user-friendly.
- **Contact Form**: Users can submit their contact information to request a bid.
- **Email and SMS Notifications**: Submitted information is sent to the owner via email and text message.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd construction-company-website
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Technologies Used

- React
- React Router
- CSS
- Node.js (for backend email service)
- Twilio (for SMS notifications)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.