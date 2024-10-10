import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

  

  export function useSummary(){

    const { transactions } = useContext(TransactionsContext)
    //reduce permite percorrer o array e reduzir a uma nova estrtura de dados

    const summary = transactions.reduce(
    (acc,transactions)=>{
        if(transactions.type==='income')
        {
        acc.income+=transactions.price
        acc.total += transactions.price   // aumentando o total usando o preco da transacao
        }
        else{
            acc.outcome+=transactions.price
            acc.total-=transactions.price //diminuindo usando o preco da transacao
        }
        return acc
    }, 
    {
    outcome:0,
    income:0,
    total:0,
     }
    )

    return summary
  }