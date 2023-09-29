import "./introduction.css"

import linkedin from "../../../assets/images/linkedin.png"
import github from "../../../assets/images/github.png"
import gmail from "../../../assets/images/gmail.png"
import tiktok from "../../../assets/images/tiktok.png"
import { Fade } from "react-awesome-reveal"

const Introduction = () => {

    const listSosmed: Array<ListSosmed> = [
        {
            link: "https://www.linkedin.com/in/abdurrachman-farras-8a8a08222/",
            image: linkedin
        },
        {
            link: "https://github.com/FARRAS-DARKUNO",
            image: github
        },
        {
            link: "mailto:abdurrachman.farras7@gmail.com",
            image: gmail
        },
        {
            link: "https://www.tiktok.com/@afarrasapfa",
            image: tiktok
        },
    ];
    console.log(listSosmed)

    return (
        <div className="contain-intro">
            <Fade direction="up">
                <h3 className="h3-intro">Abdurrachman Farras</h3>
                <div className="title-slice-intro">
                    <h1>Full-Stack and Mobile Developer</h1>
                </div>

                <h4>
                    Have experience in Full-Stack and mobile developer, using React.js and node.js for website, and flutter for Mobile
                </h4>

                <div className="row">
                    <a className="sosmed" href={`${listSosmed[0].link}`} target="_blank">
                        <img src={listSosmed[0].image} height={35} />
                    </a>
                    <a className="sosmed-relative" href={`${listSosmed[1].link}`} target="_blank">
                        <img src={listSosmed[1].image} height={35} />
                    </a>
                    <a className="sosmed-relative" href={`${listSosmed[2].link}`} target="_blank">
                        <img src={listSosmed[2].image} height={35} />
                    </a>
                    <a className="sosmed" href={`${listSosmed[3].link}`} target="_blank">
                        <img src={listSosmed[3].image} height={35} />
                    </a>
                </div>
            </Fade>
        </div>
    )
}
export default Introduction

interface ListSosmed {
    link: string
    image: string
}