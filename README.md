# ContactForm-react
ContactForm-react
<h1 align="center">📬 ContactForm - React + Node App</h1>

<p align="center">
  <a href="https://contact-form-react-sepia.vercel.app/"><strong>Live Demo</strong></a>   •   
  <a href="https://github.com/your-username/contactform-react"><strong>GitHub Repo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-18.0-blue" alt="React Badge" />
  <img src="https://img.shields.io/badge/typescript-4.x-blueviolet" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/build-vite-yellow" alt="Vite Badge" />
  <img src="https://img.shields.io/badge/backend-node--ts-green" alt="Node TypeScript Badge" />
  <img src="https://img.shields.io/badge/styling-CSS-lightblue" alt="CSS Badge" />
  <img src="https://img.shields.io/badge/email-nodemailer-orange" alt="Nodemailer Badge" />
  <img src="https://img.shields.io/badge/license-Apache--2.0-green" alt="License Badge" />
</p>

**ContactForm-react** is a full-stack contact form application built with **React + TypeScript + Vite** on the frontend and a **Node.js + TypeScript** backend using **Nodemailer** for email delivery. Users can fill out their **name**, **email**, and **message**, which will be sent to your inbox securely via the backend.

---

## ✨ Features

- 🧾 **Form Fields**  
  Collects:
  - Full Name
  - Email Address
  - Message

- 📬 **Email Delivery via Backend**  
  Submissions are securely sent to your email using a backend API built with Node.js and Nodemailer.

- 🧪 **Form Validation**  
  Client-side validation ensures all fields are correctly filled.

- ⚡ **Vite-Powered Frontend**  
  Fast development and build times with Vite.

- 🔐 **Security Considerations**  
  Basic backend-level spam protection and validation included.

- 🧭 **Responsive Design**  
  Mobile-friendly layout and usability.

---

## 🏗️ Project Structure

```plaintext
CONTACTFORM-REACT/
├── ContactForm/                       # Frontend (React + Vite)
│   ├── node_modules/
│   ├── public/
│   ├── src/                           # React components, pages, logic
│   ├── .env                           # Environment variables
│   ├── .gitignore
│   ├── eslint.config.js              # ESLint configuration
│   ├── index.html                    # Main HTML file
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.app.json             # TypeScript config (App-specific)
│   ├── tsconfig.json                 # Base TypeScript config
│   ├── tsconfig.node.json            # Node-specific TypeScript config
│   ├── vercel.json                   # Deployment config for Vercel
│   ├── vite.config.ts                # Vite build tool configuration
│   ├── README.md
│   └── LICENSE

├── ContactFormBackend/               # Backend (Node.js + Express)
│   ├── assets/                       # Static assets, if any
│   ├── node_modules/
│   ├── src/                          # Backend routes, controllers, logic
│   ├── .env
│   ├── .gitignore
│   ├── nodemon.json                  # Nodemon config for dev reloading
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json                 # TypeScript config for backend
│   └── LICENSE

├── .gitignore                        # Root-level git ignore
├── LICENSE                           # Root-level license
└── README.md                         # Root-level project overview

```

---

## 🛠️ Installation

To run this project locally:

```bash
git clone https://github.com/deepanshubajaj/ContactForm-react.git
```
1. For Backend:

```bash
cd ContactFormBackend
```
```bash
npm install
```
```bash
nodemon server.ts   # To start the server in local
```
```bash
node server.ts   # To start the server in production
```

2. For Frontend:

```bash
cd ContactForm
```
```bash
npm install
```
```bash
npm run dev   # To start the application in local
```
```bash
vite build   # To start the application in production
```

Once the development server is up and running, open your web browser and go to `http://localhost:5173` to see the project in action.

---

## ⚙️ Set up environment variables

Create .env file for

1. Backend:

```env
# ContactForm Backend .env file

# Mail Service Credentials
EMAIL_USER=your_email
EMAIL_APP_PASSWORD=your_password

# MongoDB Credentials
MONGODB_URI=your_mongodb_uri
PORT=your_mongodb_port
```

##

2. Frontend:

```env
# ContactForm Frontend .env file

VITE_CREATOR_NAME=your_name
VITE_GITHUB_URL=your_github_url
VITE_LINKEDIN_URL=your_linkedin_url
VITE_INSTAGRAM_URL=your_instagram_url
VITE_SNAPCHAT_URL=your_snapchat_url
VITE_EMAIL=your_email
VITE_WEBSITE_URL=your_website_url
VITE_TWITTER_URL=your_twitter_url
VITE_FACEBOOK_URL=your_facebook_url
VITE_ECARD_URL=your_ecard_url
VITE_API_URL=your_api_url
VITE_COPYRIGHT_YEAR=copyright_year
```

---

## 🛠 Tech Stack

| Layer     | Technology         | Description                         |
|-----------|--------------------|-------------------------------------|
| Frontend  | React 18           | UI Library                          |
|           | TypeScript         | Type-safe JavaScript                |
|           | Vite               | Lightning-fast dev/build tool       |
|           | CSS                | Styling                             |
| Backend   | Node.js            | Server runtime                      |
|           | TypeScript         | Backend type safety                 |
|           | Express            | Web framework for API routes        |
|           | Nodemailer         | Email sending service               |
| Tools     | dotenv             | Environment variable management     |
|           | Vercel             | Deployment platform (Frontend)      |
|           | Any Node Host      | Deployment platform (Backend)       |

---

## ⚙️ API Reference

### POST `/api/contact`

Sends an email using the contact form data submitted from the frontend.

#### Request Body

| Field   | Type   | Required | Description                  |
|---------|--------|----------|------------------------------|
| name    | string | ✅       | Full name of the sender      |
| email   | string | ✅       | Sender's email address       |
| message | string | ✅       | Message content              |

#### Example Request

```json
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I'm interested in your work!"
}
```

---

## 🖼️ App Icon

<p align="center">
  <img src="ProjectOutputs/Snapshots/ReportrixLogo.png" alt="Icon1" width="40%"  />
</p>

<p align="center">
  *This is the App Icon.*
</p>

---

## 🖼️ Screenshots

<p align="center">
  <img src="ProjectOutputs/Snapshots/im1.png" alt="Image1"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im2.png" alt="Image2"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im3.png" alt="Image3"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im4.png" alt="Image4"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im5.png" alt="Image5"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im6.png" alt="Image6"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im7.png" alt="Image7"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im8.png" alt="Image8"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im9.png" alt="Image9"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im10.png" alt="Image10"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im11.png" alt="Image11"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im12.png" alt="Image12"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im13.png" alt="Image13"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im14.png" alt="Image14"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im15.png" alt="Image15"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im16.png" alt="Image16"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im17.png" alt="Image17"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im18.png" alt="Image18"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im19.png" alt="Image19"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im20.png" alt="Image20"  />
</p>

##

<p align="center">
  <img src="ProjectOutputs/Snapshots/im21.png" alt="Image21"  />
</p>

##

<p align="center">
  *Snapshots of the Running Application*
</p>

---

## 🚀 Video Demo

Here’s a short video showcasing the app's functionality:

[Watch the Working Demo](https://github.com/user-attachments/assets/928202a6-33a9-4238-b5bc-0296ab213eb9)

##

➤ <a href="ProjectOutputs/WorkingVideos/WorkingVideo.mp4">🎥 Watch Working Video</a>

---

## 🤝 Contributing

Thank you for your interest in contributing to this project!  
I welcome contributions from the community.

- You are free to use, modify, and redistribute this code under the terms of the **Apache-2.0 License**.
- If you'd like to contribute, please **open an issue** or **submit a pull request**.
- All contributions will be reviewed and approved by the author — **[Deepanshu Bajaj](https://github.com/deepanshubajaj?tab=overview&from=2025-03-01&to=2025-03-31)**.

---

## 📌 How to Contribute

To contribute:

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:
   ```bash
   git commit -m 'Add your feature'
   ```

4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request.

---

## 📃 License

This project is licensed under the [Apache-2.0 License](./LICENSE).  
You are free to use this project for personal, educational, or commercial purposes — just make sure to provide proper attribution.

> **Clarification:** Commercial use includes, but is not limited to, use in products,  
> services, or activities intended to generate revenue, directly or indirectly.

---

## 📩 Contact

You can reach out to me [here](https://contact-form-react-sepia.vercel.app/).