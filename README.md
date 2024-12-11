# Personal Finances Web App

A personal finance management application built with **Next.js**, **React**, and **Tailwind CSS**. This app allows users to track their accounts, manage transactions, and view an overview of their finances. It includes features for adding, editing, and deleting accounts and transactions, along with an optional dummy data generator for testing purposes.

---

## **Features**

### 1. **Dashboard**
- Displays an overview of total account balances.
- Shows the total number of transactions.
- Highlights the most recent transactions.

### 2. **Accounts Management**
- Add, edit, and delete accounts.
- View a list of accounts with their current balances.

### 3. **Transactions Management**
- Add, edit, and delete transactions linked to specific accounts.
- Filter and view recent transactions.

### 4. **Dummy Data Generator**
- If local storage is empty, the app detects the test user and prompts to load dummy data.
- Randomly generates accounts and transactions for testing.

---

## **Technologies Used**

- **Next.js**: For server-rendered and statically generated pages.
- **React**: For building UI components.
- **Tailwind CSS**: For styling and responsive design.
- **Local Storage**: To persist user data locally.

---

## **Getting Started**

### **1. Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **2. Installation**

Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/yourusername/personal-finances-web-app.git

# Navigate into the project directory
cd personal-finances-web-app

# Install dependencies
npm install
# or
yarn install
```

### **3. Run the Development Server**

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## **Project Structure**

```
app/
  accounts/
    page.tsx      # Accounts page
  dashboard/
    page.tsx      # Dashboard page
  transactions/
    page.tsx      # Transactions page
components/
  Layout.tsx      # Main layout with sidebar and top bar
  Modal.tsx       # Reusable modal component
utils/
  dummyData.ts    # Utility to generate random accounts and transactions
  storage.ts      # Local storage helper functions
  types.ts        # Shared TypeScript types
```

---

## **Key Files and Folders**

### **`components/`**
Contains reusable UI components:
- **`Layout.tsx`**: Handles the sidebar, top bar, and main content layout.
- **`Modal.tsx`**: A reusable modal component for user prompts.

### **`utils/`**
Contains utility functions and shared types:
- **`dummyData.ts`**: Generates random accounts and transactions for testing.
- **`storage.ts`**: Helper functions for interacting with local storage.
- **`types.ts`**: Shared TypeScript interfaces for `Account` and `Transaction` objects.

### **`app/`**
Contains the main application pages:
- **`dashboard/`**: Displays the dashboard overview.
- **`accounts/`**: Manages user accounts.
- **`transactions/`**: Manages user transactions.

---

## **Usage**

### **Dummy Data Generation**
- If no accounts or transactions are found in local storage, the app prompts the user to load dummy data for testing.
- Dummy data includes:
  - Randomly named accounts with random balances.
  - Random transactions associated with accounts.

### **Accounts Page**
- Add accounts by providing a name and initial balance.
- Edit or delete existing accounts.

### **Transactions Page**
- Add transactions by selecting an account, entering a description, and specifying an amount.
- Edit or delete existing transactions.

### **Dashboard**
- View a summary of total balances, transaction counts, and recent transactions.

---

## **Future Enhancements**

1. **Backend API Integration**:
   - Replace local storage with API calls for better scalability.
   - Add user authentication and multi-user support.

2. **Analytics and Reports**:
   - Visualize spending trends with charts and graphs.
   - Add budgeting and financial goal tracking.

3. **Responsive Enhancements**:
   - Optimize UI for tablets and smaller screens.

4. **Export and Import**:
   - Allow users to export and import accounts and transactions as CSV files.

---

## **Contributing**

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push to your branch.
4. Submit a pull request.

---

## **License**

This project is licensed under the MIT License.

---

## **Contact**
For questions or suggestions, feel free to reach out:
- **Email**: mauricio.lombano@gmail.com.com
- **GitHub**: [MauLom](https://github.com/MauLom)

