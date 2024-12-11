import { Account, Transaction } from "./types";

export const saveToLocalStorage = (key: string, value:  Account[] | Transaction[] | string | number | boolean | undefined) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
  