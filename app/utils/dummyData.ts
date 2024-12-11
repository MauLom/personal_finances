import { Account, Transaction } from "./types";

export const generateRandomAccounts = (count: number): Account[] => {
  const accountNames = ["Bank of America", "Cash", "Cryptos", "Savings", "Investments"];
  const randomAccounts: Account[] = [];

  for (let i = 0; i < count; i++) {
    const randomName =
      accountNames[Math.floor(Math.random() * accountNames.length)];
    const randomBalance = Math.floor(Math.random() * 10000) / 100;

    randomAccounts.push({
      id: Date.now() + i,
      name: randomName,
      balance: randomBalance,
    });
  }

  return randomAccounts;
};

export const generateRandomTransactions = (
  accounts: Account[],
  count: number
): Transaction[] => {
  const transactionDescriptions = ["Salary", "Groceries", "Investments", "Shopping", "Rent"];
  const randomTransactions: Transaction[] = [];

  for (let i = 0; i < count; i++) {
    const randomAccount = accounts[Math.floor(Math.random() * accounts.length)];
    const randomDescription =
      transactionDescriptions[
        Math.floor(Math.random() * transactionDescriptions.length)
      ];
    const randomAmount:number = (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 1000) / 100;

    randomTransactions.push({
      id: Date.now() + i,
      accountId: randomAccount.id,
      description: randomDescription,
      amount: randomAmount,
    });
  }

  return randomTransactions;
};
