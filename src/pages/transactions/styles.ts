import styled from "styled-components";


export const TransactionsContainer = styled.main`
width: 100%;
max-width: 1120px;
margin:4rem auto 0;
padding: 0 1.5rem;


`
export const TransactionsTable= styled.table`
 width: 100%;
 border-collapse: separate;  //para criar uma separacao juntamente com border border-spacing
 border-spacing: 0 0 5rem;
 /* margin: 1.5rem; */
 td{
    padding: 1.25rem 2rem;
    background: ${props=>props.theme["gray-700"]};
    &:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;  //  estilizando as primeiras Td

    }
    &:last-child{
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;  //  estilizando as primeiras Td

    }
 }
`   

interface PriceHighLight {
    variant?:'income'| 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLight>`
color: ${props=>props.variant === 'income'? props.theme["green-300"]:props.theme["red-500"]};

`



