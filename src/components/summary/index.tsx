import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummmaryContainer } from "./styles";

import {priceFormatter } from "../../utills/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary(){

    const summary = useSummary()


    return(

        <SummmaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>
                    {priceFormatter.format(summary.income)}
                </strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>
                <strong>
                {priceFormatter.format(summary.outcome)}
                </strong>
            </SummaryCard >
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#ffff"/>
                </header>
                <strong>
                {priceFormatter.format(summary.income)}

                </strong>
            </SummaryCard>
        </SummmaryContainer>
        
        
    )
}