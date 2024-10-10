import * as Dialog  from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionsType, TransactionsTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as z from  'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios';

const newTransactionFormSchema = z.object({
    description:z.string(),
    price:z.number(),
    category : z.string(),
    type:z.enum(['income','outcome'])
})

type NewTransactionInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal(){

    const {
        control,
        register,
        handleSubmit,
          } = useForm<NewTransactionInputs>({
        resolver:zodResolver(newTransactionFormSchema),
        defaultValues:{
            type:'income'
        }
    })

async function handleCreateNewTransaction(data:NewTransactionInputs)
{
    const  {description,category,price,type} = data 

     await api.post('/transactions',{
          description,
          category,
          price,
          type,
          createdAt : new Date()
     })
}


    return(
        <Dialog.Portal>
        <Overlay/>
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                     <X size={24}/>
                </CloseButton>
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>

                    <input
                     type="text" 
                     placeholder='Descrição'
                     required 
                     {...register('description')}
                     />

                    <input 
                    type="text" 
                    placeholder='Preço' 
                    required 
                    {...register('price',{valueAsNumber:true})}
                    />      

                    <input
                    type="text"
                    placeholder='Categoria'
                    required
                    {...register('category')}


                    
                    />    
                   <Controller 
                   control={control}
                   name='type'
                   render={({field})=>{
                    console.log(field)
                    return(
                        <TransactionsType onValueChange={field.onChange} value={field.value}>
                        <TransactionsTypeButton variant='income' value='income'>
                          <ArrowCircleUp size={24}/>
                          Entrada
                        </TransactionsTypeButton>
  
                        <TransactionsTypeButton variant='outcome' value='outcome'>
                          <ArrowCircleDown size={24}/>
                          Saída
                        </TransactionsTypeButton>
  
                    </TransactionsType>
                    )
                   }}
                   />
                    <button type='submit'>
                        Cadastrar
                    </button>

                </form>
            </Content>
        
    </Dialog.Portal>
    )
}

