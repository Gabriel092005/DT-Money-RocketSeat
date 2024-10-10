import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImage from '../../assets/logo.svg'
import * as Dialog  from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactionModal";


//Dialog.Trigger - para nao haver necessidade criar um outro botao
//Uma Estilizacao Elegante
//Portal permite uma forma elegante de renderizar um elemento filho, em um outro lugar
//Overlay escurecer o fundo quando clicar o botao de adicionar nova transacao
export function Header(){
    return(
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImage}/>
                    <Dialog.Root>

                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                        <NewTransactionModal/>

                    </Dialog.Root>

                    
                </HeaderContent>
            </HeaderContainer>
        
            
        </div>
    )
}