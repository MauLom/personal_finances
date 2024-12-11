// utils/types.ts

export type Account = {
    id: number;
    name: string;
    balance: number;
  };
  
  export type Transaction = {
    id: number;
    accountId: number;
    description: string;
    amount: number;
  };
  