'use client';
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";
import { Account, Transaction } from "../utils/types"; // Import types

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(
    () => getFromLocalStorage("transactions") || []
  );

  const [accounts, setAccounts] = useState<Account[]>(
    () => getFromLocalStorage("accounts") || []
  );

  const [formData, setFormData] = useState<Transaction>({
    id: 0,
    accountId: accounts[0]?.id || 0,
    description: "",
    amount: 0,
  });

  const [editingTransactionId, setEditingTransactionId] = useState<number | null>(null);

  useEffect(() => {
    saveToLocalStorage("transactions", transactions);
  }, [transactions]);

  const handleAddOrEditTransaction = () => {
    if (editingTransactionId) {
      setTransactions((prev) =>
        prev.map((t) => (t.id === editingTransactionId ? { ...formData } : t))
      );
    } else {
      setTransactions((prev) => [
        ...prev,
        { ...formData, id: Date.now() },
      ]);
    }

    resetForm();
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setFormData(transaction);
    setEditingTransactionId(transaction.id);
  };

  const handleDeleteTransaction = (id: number) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const resetForm = () => {
    setFormData({ id: 0, accountId: accounts[0]?.id || 0, description: "", amount: 0 });
    setEditingTransactionId(null);
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <div className="p-4 bg-white shadow rounded mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {editingTransactionId ? "Edit Transaction" : "Add Transaction"}
        </h3>
        <div className="flex gap-4 mb-4">
          <select
            value={formData.accountId}
            onChange={(e) =>
              setFormData({ ...formData, accountId: Number(e.target.value) })
            }
            className="p-2 border rounded flex-1"
          >
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="p-2 border rounded flex-1"
          />
          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
            className="p-2 border rounded w-32"
          />
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAddOrEditTransaction}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {editingTransactionId ? "Save Changes" : "Add Transaction"}
          </button>
          {editingTransactionId && (
            <button onClick={resetForm} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          )}
        </div>
      </div>
      <ul className="divide-y">
        {transactions.map((transaction) => {
          const account = accounts.find((a) => a.id === transaction.accountId);
          return (
            <li key={transaction.id} className="py-2 flex justify-between">
              <div>
                <p className="font-semibold">{transaction.description}</p>
                <p className="text-sm text-gray-500">{account?.name}</p>
              </div>
              <div className="flex gap-4">
                <p
                  className={`${
                    transaction.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}
                  ${transaction.amount.toFixed(2)}
                </p>
                <button
                  onClick={() => handleEditTransaction(transaction)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTransaction(transaction.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
