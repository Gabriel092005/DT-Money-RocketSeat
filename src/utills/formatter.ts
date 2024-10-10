export const dateFormatter = new Intl.DateTimeFormat('pt-BR')



export const priceFormatter =  new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL' //para formatar como
})  //formatando o prico