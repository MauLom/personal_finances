'use client';
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage";
import { Account } from "../utils/types"; // Import Account type

export default function Accounts() {
  // Load accounts from localStorage
  const [accounts, setAccounts] = useState<Account[]>(
    () => getFromLocalStorage("accounts") || []
  );

  // Save to localStorage whenever accounts change
  useEffect(() => {
    saveToLocalStorage("accounts", accounts);
  }, [accounts]);

  const [newAccount, setNewAccount] = useState({ name: "", balance: 0 });

  const handleAddAccount = () => {
    if (newAccount.name.trim() && newAccount.balance >= 0) {
      setAccounts([...accounts, { id: Date.now(), ...newAccount }]);
      setNewAccount({ name: "", balance: 0 });
    }
  };

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Accounts</h2>
      <div className="p-4 bg-white shadow rounded mb-6">
        <h3 className="text-lg font-semibold mb-4">Add Account</h3>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Account Name"
            className="p-2 border rounded flex-1"
            value={newAccount.name}
            onChange={(e) =>
              setNewAccount({ ...newAccount, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Initial Balance"
            className="p-2 border rounded w-32"
            value={newAccount.balance}
            onChange={(e) =>
              setNewAccount({ ...newAccount, balance: Number(e.target.value) })
            }
          />
          <button
            onClick={handleAddAccount}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>

      <ul className="divide-y">
        {accounts.map((account) => (
          <li key={account.id} className="py-2 flex justify-between">
            <span>{account.name}</span>
            <span>${account.balance.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
