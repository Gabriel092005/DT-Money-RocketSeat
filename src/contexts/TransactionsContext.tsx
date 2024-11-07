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
  createTransactions : (data:CreateTransactionInputs)=>Promise<void>
}

interface CreateTransactionInputs{
    description : string
    price : number
    category : string
    type : 'income'|'outcome'
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
                _sort :'createdAt',
                _order:'esc',
                category:query
            }
        })
       setTransactions(response.data)
    }

    async function createTransactions(data: CreateTransactionInputs){

        const { description,category,price,type} = data

       const response =  await api.post('/transactions',{
            description,
            category,
            price,
            type,
            createdAt : new Date()
       })

       setTransactions(state=>[response.data,...state, ])
        
    }

    useEffect(()=>{
        FetchTransactions()
    },[]) //useEffect esta garantindo que esse endpoint nao seja executado varias vezes


    return(

        <TransactionsContext.Provider value={
            {
                transactions,
                FetchTransactions,
                createTransactions,


        }} >

           {children}

        </TransactionsContext.Provider>
    )
}