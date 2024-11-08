import styled from "styled-components";
import * as Dialog  from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
position: fixed ;
width: 100vw;
height: 100vh;
inset: 0;   //mesma coisa que escrever top :0 , bottom:0; left:0 :rigth:0
background: rgba(0 ,0,0,0.75);
`
export const Content =styled(Dialog.Content)`
min-width:32rem;
border-radius: 6px;
padding: 2.5rem 3rem;
background: ${props=>props.theme["gray-800"]};
position: fixed;
top:30%;
left:35%;
transform: translate(-50% -50%);  //hack para centralizar coisas na tela
form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input{
        border-radius: 6px;
        border: 0;
        padding: 1rem;
        background: ${props=>props.theme["gray-900"]};
        color: ${props=>props.theme["gray-300"]};
        &::placeholder
        {
            color:${props=>props.theme["gray-500"]};
        }

    }
    button[type='submit']{ //estilizando somente o button com type submit
        height: 58px;
        border: 0;
        background: ${props=>props.theme["green-500"]};
        color : ${props=>props.theme.white};
        font-weight: bold;
        padding: 0 1.25rem;
        margin-top: 1.5rem;  
        cursor: pointer;
    
    }

  

}
`
export const CloseButton = styled(Dialog.Close)`
position: absolute;
background: transparent ;//colocar um fundo transparente no botao; 
top: 1.5rem;
right: 1.5rem;
border: none;
cursor: pointer;
color: ${props=>props.theme["gray-300"]};
line-height: 0;
`

export const TransactionsType = styled(RadioGroup.Root) `
display: grid;
grid-template-columns: repeat(2, 1fr);
gap:1rem;
margin-top:0.5rem;
`

interface TransactionTypeButtonProps
{
    variant : 'income'|'outcome'
}

export const TransactionsTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
 background: ${props=>props.theme["gray-700"]};
 padding: 1rem;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 0.5rem;
 border-radius: 6px;
 cursor: pointer;
 border: 0;
 color: ${props=>props.theme["gray-300"]};
  
 svg{
    color: ${props=>props.variant === 'income' ? props.theme["green-300"] : props.theme["red-500"]};

 }
 &[data-state='checked']{
    color : ${props=>props.theme.white};
    background: ${props=>props.variant==='income' ? props.theme["green-500"] : props.theme["red-500"]};
     svg{
        color:  ${props=>props.theme.white};
     }
 }

 &[data-state='unchecked']:hover{
    background: ${props=>props.theme["gray-600 "]};
 }


`


