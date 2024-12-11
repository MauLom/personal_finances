'use client';
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";
import { Account, Transaction } from "../utils/types";
import { generateRandomAccounts, generateRandomTransactions } from "../utils/dummyData";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load accounts and transactions from localStorage
    const storedAccounts = getFromLocalStorage("accounts") || [];
    const storedTransactions = getFromLocalStorage("transactions") || [];

    if (storedAccounts.length === 0 && storedTransactions.length === 0) {
      setShowModal(true); // Show modal if storage is empty
    } else {
      setAccounts(storedAccounts);
      setTransactions(storedTransactions);
    }
  }, []);

  const handleLoadDummyData = () => {
    const dummyAccounts = generateRandomAccounts(5);
    const dummyTransactions = generateRandomTransactions(dummyAccounts, 10);

    saveToLocalStorage("accounts", dummyAccounts);
    saveToLocalStorage("transactions", dummyTransactions);

    setAccounts(dummyAccounts);
    setTransactions(dummyTransactions);
    setShowModal(false);
  };

  const handleCancelDummyData = () => {
    setShowModal(false);
  };

  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);
  const recentTransactions = transactions.slice(-5).reverse();

  return (
    <Layout>
      <Modal
        isVisible={showModal}
        onAccept={handleLoadDummyData}
        onCancel={handleCancelDummyData}
      />
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Balance */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Total Balance</h3>
          <p className="text-2xl font-bold">${totalBalance.toFixed(2)}</p>
        </div>

        {/* Total Transactions */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Total Transactions</h3>
          <p className="text-2xl font-bold">{transactions.length}</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
        {recentTransactions.length > 0 ? (
          <ul className="divide-y">
            {recentTransactions.map((transaction) => {
              const account = accounts.find((a) => a.id === transaction.accountId);
              return (
                <li key={transaction.id} className="py-2 flex justify-between">
                  <div>
                    <p className="font-semibold">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{account?.name}</p>
                  </div>
                  <p
                    className={`${
                      transaction.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}
                    ${transaction.amount.toFixed(2)}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No recent transactions</p>
        )}
      </div>
    </Layout>
  );
}
