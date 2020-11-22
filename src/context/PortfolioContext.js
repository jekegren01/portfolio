import React, {createContext, useState} from 'react'
import { portfolioData } from "../data/portfolio"

export const PortfolioContext = createContext();

export const PortfolioProvider = (props) => {
    const [portfolio] = useState(portfolioData);

    return (
        <PortfolioContext.Provider value={portfolio}>
            {props.children}
        </PortfolioContext.Provider>
    )
}