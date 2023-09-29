import "./footer.css"
import gmail from "../../../assets/images/gmail.png"
import wa from "../../../assets/images/wa.webp"

const Footer = () => {
    const listSosmed: Array<ListSosmed> = [
        {
            link: "mailto:abdurrachman.farras7@gmail.com",
            image: gmail
        },
        {
            link: "https://api.whatsapp.com/send/?phone=%2B6285161782707&text&type=phone_number&app_absent=0",
            image: wa
        },

    ];
    return (
        <footer >
            <div className="information">
                <h2>Information About Aflia</h2>
                <article>
                    Aflia is a work created by <span>Abdurrachman Farras in 2023.</span> Aflia helps friends from various circles to create a business that requires website or mobile application technology. Not only that, Aflia also helps fellow students who want to create a portfolio website which will later be useful for applying to companies
                </article>
            </div>
            <div className="intrerest">
                <h3>Are You Interested ?</h3>
                <h1>Let's Talk More Deeply</h1>
                <div className="row">
                    <a className="sosmed" href={`${listSosmed[0].link}`} target="_blank">
                        <img src={listSosmed[0].image} height={35} />
                    </a>
                    <a className="sosmed" href={`${listSosmed[1].link}`} target="_blank">
                        <img src={listSosmed[1].image} height={35} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

interface ListSosmed {
    link: string
    image: string
}

export default Footer