import "./introduction.css"
import { Fade } from "react-awesome-reveal"

const Introduction = () => {

    const listSosmed: Array<ListSosmed> = [
        {
            link: "https://www.linkedin.com/in/abdurrachman-farras-8a8a08222/",
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1696044479/image_1_c688vl.png"
        },
        {
            link: "https://github.com/FARRAS-DARKUNO",
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1696044475/25231_aq1by8.png"
        },
        {
            link: "mailto:abdurrachman.farras7@gmail.com",
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1696044492/gmail-logo-16_kii4nm.png"
        },
        {
            link: "https://www.tiktok.com/@afarrasapfa",
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1696045413/pngwing.com_nluzvi.png"
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
                        <img src={listSosmed[0].image} height={30} />
                    </a>
                    <a className="sosmed-relative" href={`${listSosmed[1].link}`} target="_blank">
                        <img src={listSosmed[1].image} height={35} />
                    </a>
                    <a className="sosmed-relative" href={`${listSosmed[2].link}`} target="_blank">
                        <img src={listSosmed[2].image} height={30} />
                    </a>
                    <a className="sosmed" href={`${listSosmed[3].link}`} target="_blank">
                        <img src={listSosmed[3].image} height={30} />
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