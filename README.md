# Kredentia Frontend

![Vite](https://img.shields.io/badge/Vite-Frontend-blue?logo=vite)
![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178c6?logo=typescript)
![Wagmi](https://img.shields.io/badge/Wagmi-Web3-yellow?logo=ethereum)

---

## 🚀 What is Kredentia?

Kredentia is a modern web platform for managing and signing digital documents, with Web3 wallet integration (such as MetaMask). Its goal is to make document validation and signing secure, fast, and transparent for both users and administrators.

### Who is it for?
- Companies that need to validate employee or client documents.
- Universities or institutions that issue digital certificates.
- Users who want to securely sign documents using their wallet.

---

## 🧭 How does the user flow work?

1. **Start and Dashboard:**
  - The user accesses the main dashboard, where they can see a summary and access different sections.
2. **Wallet Connection:**
  - The user connects their Web3 wallet (e.g., MetaMask) to authenticate and sign documents.
3. **Receiving Notifications:**
  - When there are documents pending signature, the user receives a visual and sound notification.
4. **Sign Panel:**
  - Clicking a notification opens the sign panel with the document and wallet details.
5. **Sign/Reject:**
  - The user can sign or reject the document, optionally leaving a reason.
6. **Real-time Update:**
  - The system updates the status of documents and notifications automatically.

---

## 🗂️ Project Structure (Explained)

```
├── public/                  # Public files and static resources
│   ├── vite.svg             # Vite logo
│   └── sounds/              # Notification sounds
│       └── notification.mp3
├── src/                     # Main source code
│   ├── App.tsx              # Root component, handles layout and view routing
│   ├── main.tsx             # React entry point
│   ├── config.ts            # Global config (if any)
│   ├── assets/              # Images and graphic resources
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Top bar, notifications, and wallet connection
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   ├── FirmarSidebar.tsx# List of wallets/documents to sign
│   │   ├── Firmar.tsx       # Document sign panel
│   │   ├── Dashboard.tsx    # Main view
│   │   ├── Pendientes.tsx   # Pending documents
│   │   └── ...
│   └── ...
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # Project documentation
```

---

## 🧩 Main Components and Their Function

### `Header.tsx`
- Shows the app name and user avatar.
- Allows wallet connect/disconnect.
- Shows the notification bell and menu.
- Clicking a notification opens the sign panel for the corresponding document.

### `Sidebar.tsx`
- Sidebar navigation between Dashboard, Pending, and Sign.
- If the view is "sign", shows the `FirmarSidebar` component.

### `FirmarSidebar.tsx`
- List of wallets/documents pending signature.
- Selecting one shows the sign panel (`Firmar.tsx`).

### `Firmar.tsx`
- Panel to view the selected document.
- Allows signing or rejecting the document (with reason).

### `Dashboard.tsx`
- Main view with summary and quick access.

### `Pendientes.tsx`
- List of all documents pending signature.

---

## 🔗 Props and Component Communication

- `setView(view)`: Changes the main view (dashboard, pending, sign).
- `setSelectedDoc(doc)`: Selects the document/wallet to show in the sign panel.
- `notifications`: Array of active notifications.

---

## 🛡️ Security and Web3

- Authentication and signing is done using the user's wallet (e.g., MetaMask) via the wagmi library.
- Notifications are fetched from the backend using the connected wallet address.
- Notification sound only plays when there are new notifications.

---

## 🖥️ Example User Flow

1. The user enters the app and connects their wallet.
2. Receives a notification: "You have a new signature pending from Wallet 2 (Diploma)".
3. Clicks the bell and then the notification.
4. The sign panel opens with the document and wallet details.
5. The user signs or rejects the document.
6. The state updates and the notification disappears.

---

## 🛠️ Technologies Used (Detailed)

- **Vite**: Ultra-fast bundler for modern development.
- **React**: Library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for robustness.
- **Wagmi**: Makes wallet and Web3 integration easy in React.
- **CSS Modules**: Enables component-scoped styles.

---

## 📦 Useful Scripts

| Command           | Description                |
|-------------------|---------------------------|
| `npm run dev`     | Start development mode    |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |

---

## 🤝 Contributions

Pull requests and suggestions are welcome! Feel free to open issues to report bugs or propose improvements.

---

## 📝 License

MIT

---
