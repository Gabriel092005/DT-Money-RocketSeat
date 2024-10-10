import { useContext } from "react";
import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utills/formatter";

//quando crio estado é sempre importante tipar o estado principalmente se for um array ou um objecto

export function Transactions(){
    
    const { transactions } = useContext(TransactionsContext)
    return(
        <div>
            <Header/>
            <Summary/>


            <TransactionsContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>
                    {transactions.map(transactions=>{
                     return(
                        <tr key={transactions.id}>
                        <td width="50%">{transactions.description}</td>
                        <td >
                            <PriceHighLight variant={transactions.type}>
                                {transactions.type==='outcome' && '- '}  
                                {priceFormatter.format(transactions.price)}
                            </PriceHighLight>
                            </td>
                        <td>{transactions.category}</td>
                        <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>   
                    </tr>
                   
                     )
                    })}
                
                                
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>

           
    )
}