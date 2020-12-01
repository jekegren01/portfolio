import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext"

function Portfolio() {
    const portfolios = useContext(PortfolioContext)

    return (
        <div className="portfolio-container">
            <div className="portfolio-bubble">
            {portfolios.map(p => (
                <a className="web-anchors" href={p.portfolio} key={p.id}>
                    <div>
                        {p.portfolio}
                    </div>
                    <div>
                        {p.repo}
                    </div>
                </a>
            ))}
            </div>
        </div>
    )
}

export default Portfolio;