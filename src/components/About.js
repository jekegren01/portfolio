import React, { useContext } from "react";
import { AboutContext } from "../context/AboutContext"

function About() {
    const me = 'https://res.cloudinary.com/dicezlgof/image/upload/v1605813862/Portfolio/me_dhhsay.jpg'

    const about = useContext(AboutContext)
    const data = about[0].paragraphs
    const ed = about[0].education
 

    return (
        <div className="about-container">
            <div className="top-container">
                <img src={me} alt="none"/>
                <div className="ed-container">
                    {ed.map(p =>(
                        <div className="education" key={p.id}>
                            {p.education}
                        </div>
                    ))}
                </div>
            </div>
            <div className="middle-container">
            {data.map(p => (
                <div className="paragraph" key={p.id}>
                    {p.paragraph}
                </div>
            ))}
            </div>
        </div>
    )
}

export default About;