import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSChema = z.object({
    query:z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSChema>

export function SearchForm(){
    const {FetchTransactions} = useContext(TransactionsContext)



    const {register,
         handleSubmit,
         formState:{
            isSubmitting,
         }
        } = useForm<SearchFormInputs>({
        resolver:zodResolver(searchFormSChema)
    })

   async function handleSearchTransactions(data:SearchFormInputs){
          await FetchTransactions(data.query)

    }
    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}> 
            <input 
            type="text" 
            placeholder="Busque por transações"
            {...register('query')}
             />
            <button type="submit" disabled={isSubmitting}>  
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )

}