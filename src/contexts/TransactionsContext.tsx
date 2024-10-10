import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction
{
    id:number;
    description:string;
    type:'income'|'outcome';
    price : number
    category:string
    createdAt:string
}   
interface TansactionContextType {
    
  transactions:Transaction[] 
  FetchTransactions: (query?:string)=> Promise<void>
}

interface TransactionsProviderProps
{
    children:ReactNode
}
export const  TransactionsContext = createContext({} as TansactionContextType)

export function TransactionsProvider({children}:TransactionsProviderProps){
    const [transactions , setTransactions] = useState<Transaction[]>([]) //tipei o meu estado

     async function FetchTransactions(query?:string){
        const response = await api.get('/transactions',{
            params:{
                category:query
            }
        })
       setTransactions(response.data)
    }

    useEffect(()=>{
        FetchTransactions()
    },[]) //useEffect esta garantindo que esse endpoint nao seja executado varias vezes


    return(

        <TransactionsContext.Provider value={
            {
                transactions,
                FetchTransactions


        }} >

           {children}

        </TransactionsContext.Provider>
    )
}