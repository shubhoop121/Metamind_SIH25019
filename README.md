# MetaMind-SIH

A web-based solution developed for the **Smart India Hackathon 2025**, MetaMind-SIH integrates a modern **React** frontend with **Firebase** backend services for secure authentication and real-time data management. The project is designed to deliver a scalable, user-centric platform with a focus on security, performance, and developer experience.

---

## 📖 Overview

MetaMind-SIH is built to address the challenges of the Smart India Hackathon 2025. It leverages Firebase for secure authentication and data storage, combined with a responsive React frontend styled with TailwindCSS. The project supports rapid local development through the Firebase Emulator Suite and follows a structured Git workflow for collaborative development.

### Key Features
- 🔐 **Secure Authentication**: Firebase Authentication for user login, registration, and logout.
- 🗂 **Real-Time Data Management**: Firestore with per-user data isolation for secure CRUD operations.
- ⚡ **Local Development**: Firebase Emulator Suite for testing authentication and Firestore locally.
- 🎨 **Modern UI/UX**: Built with React, React Router, and TailwindCSS for a responsive and intuitive interface.
- 🚀 **Scalable Workflow**: Git branching model (main, dev, feature-*) for collaborative development.

---

## 📂 Project Structure

```
MetaMind-SIH/
├── .gitignore
├── README.md
├── docs/                     # Documentation and assets
│   ├── architecture.md       # System architecture and flow
│   ├── wireframes/           # Figma wireframe exports
│   └── presentation.pptx     # SIH pitch deck
├── backend/                  # Firebase configuration
│   ├── firebase.json         # Firebase emulator and hosting config
│   ├── firestore.rules       # Firestore security rules
│   ├── firestore.indexes.json # Firestore indexes
│   ├── .firebaserc           # Firebase project config
│   └── functions/            # Optional Cloud Functions
└── frontend/                 # React frontend
    └── react_app/
        ├── public/           # Static assets
        ├── src/              # React source code
        │   ├── pages/        # Login, Register, Dashboard
        │   ├── services/     # Firebase service integration
        │   └── App.js        # Main app component
        ├── package.json      # Frontend dependencies
        └── tailwind.config.js # TailwindCSS configuration
```

---

## 🛠 Tech Stack

| **Layer**         | **Technology**                              |
|--------------------|---------------------------------------------|
| **Frontend**      | React, React Router, TailwindCSS            |
| **Backend**       | Firebase Auth, Firestore, Emulator Suite   |
| **Deployment**    | Vercel/Netlify (frontend), Firebase Hosting |
| **Version Control**| Git + GitHub (main, dev, feature-*)        |

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-org>/MetaMind-SIH.git
cd MetaMind-SIH
```

### 2️⃣ Install Dependencies

#### Frontend
```bash
cd frontend/react_app
npm install
```

#### Backend (if using Cloud Functions)
```bash
cd ../../backend
npm install
```

### 3️⃣ Start Firebase Emulator
```bash
cd backend
firebase emulators:start --only firestore,auth
```

Access the emulator UI at:
- Emulator UI: `http://127.0.0.1:4000`
- Firestore: `http://127.0.0.1:4000/firestore`
- Auth: `http://127.0.0.1:4000/auth`

### 4️⃣ Start Frontend
```bash
cd ../frontend/react_app
npm start
```

The React app will run at: `http://localhost:3000`

---

## 🔐 Features

- **User Authentication**: Secure login, registration, and logout using Firebase Auth.
- **Firestore CRUD**: Create, read, and delete data with per-user access control.
- **Secure Firestore Rules**: Enforce data isolation for enhanced security.
- **Local Development**: Test features locally using Firebase Emulator Suite.
- **Scalable Workflow**: Git branching strategy for collaborative development.

---

## 👨‍💻 Development Workflow

1. **Branch from `dev`**:
   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b feature-xyz
   ```

2. **Commit Changes**:
   ```bash
   git add .
   git commit -m "Added feature xyz"
   git push origin feature-xyz
   ```

3. **Open Pull Request**: Submit a PR to `dev` for review.
4. **Merge to `main`**: After testing, merge `dev` into `main` for deployment.

---

## 📖 Documentation

- **docs/architecture.md**: Details the system architecture and data flow.
- **docs/wireframes/**: Contains Figma exports for UI/UX designs.
- **docs/presentation.pptx**: Official SIH pitch deck for the project.

---

## 🚀 Deployment

### Frontend
Deploy the React app using:
- **Vercel**: Follow Vercel CLI instructions for deployment.
- **Netlify**: Use Netlify CLI or drag-and-drop deployment.

### Firebase
Deploy Firestore rules and auth configuration:
```bash
firebase deploy --only firestore,auth
```

---

## 📌 Contribution Guidelines

- Keep commits small, atomic, and meaningful.
- Update `README.md` and relevant documentation for any setup changes.
- Pull Requests (PRs) must be reviewed by at least one teammate before merging.
- Follow the branching strategy: create feature branches from `dev` and merge back via PRs.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.