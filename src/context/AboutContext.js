import React, {createContext, useState} from 'react'
import { aboutData2 } from "../data/about"

export const AboutContext = createContext();

export const AboutProvider = (props) => {
    const [about2] = useState(aboutData2);

    return (
        <AboutContext.Provider value={about2}>
            {props.children}
        </AboutContext.Provider>
    )
}