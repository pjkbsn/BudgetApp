# BudgetApp

## 📝 Description

BudgetApp is a React Native application designed to help users track their financial transactions over various time periods. With a clean and intuitive interface, users can view their spending and income data categorized into daily, weekly, monthly, and yearly views. Additionally, a comprehensive "Transactions" section allows users to review and manage all their transactions in one place.

> - Daily/Weekly/Monthly/Yearly Views:

- View transactions grouped and sorted by specific time periods.
- Easily navigate between different time ranges to monitor spending patterns

> - Comprehensive Transactions List:

- A dedicated Transactions screen with a SectionList component.
- Transactions are grouped by month and sorted with the latest transaction appearing first.
- Each transaction displays:
   -Amount
   -Type (Income or Expense)
   -Category
   -Date

> - Interactive Transaction Management

- Add new transactions with an intuitive form.
- Remove transactions directly from the Transactions screen using a trash icon for each item.

## Technologies Used

### Frontend

React Native: Framework for building the mobile app.

React Navigation: For managing the navigation between screens, including the Drawer and different tabs.

React Native Paper: For UI components and styling.

Date-FNS: For date manipulation and formatting.

### Backend

JSON Server: Mock server for handling CRUD operations for transactions.

Axios: For HTTP requests to interact with the backend.

State Management

React Context: To manage state for transactions and modals across the app.

## 🔧 Installation

To get started, clone the repository and install the dependencies.

### Prerequisites

Ensure you have the following installed:

- Node.js >= 12
- npm or yarn

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/pjkbsn/BudgetApp.git
   ```
2. Navigate into the project directory:
   ```bash
   cd repo
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

Here’s how you can start using the project. Run the following command to launch it:

4. Start the server:
   ```bash
   npx json-server db.json
   ```
5. Open new terminal and run:
   ```bash
   npx expo start
   ```
