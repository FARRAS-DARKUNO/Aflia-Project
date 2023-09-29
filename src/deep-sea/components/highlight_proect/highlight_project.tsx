import "./highlight_project.css"
import { Zoom } from "react-awesome-reveal"

export const HighlightProject = () => {

    const listProject: Array<PropsCard> = [
        {
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695310822/hiren_qxgbcz.png",
            title: 'Hiren',
            link: "https://play.google.com/store/apps/details?id=com.hirensuper.android.app",
            typeProject: "Company Project",
            listTools: [
                'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png',
                "https://cdn.iconscout.com/icon/free/png-256/free-flutter-3628777-3030139.png?f=webp",
                "https://plugins.jetbrains.com/files/12129/261752/icon/pluginIcon.png",
                "https://res.cloudinary.com/dghcfqoie/image/upload/v1695308423/5847f40ecef1014c0b5e488a_xow2a3.png"
            ]
        },
        {
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695291285/ditonton_lvs0oq.png",
            title: 'Ditonton',
            link: "https://github.com/FARRAS-DARKUNO/Ditontoon",
            typeProject: "Academy Project",
            listTools: [
                'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png',
                "https://cdn.iconscout.com/icon/free/png-256/free-flutter-3628777-3030139.png?f=webp",
                "https://plugins.jetbrains.com/files/12129/261752/icon/pluginIcon.png",
                "https://res.cloudinary.com/dghcfqoie/image/upload/v1695308423/5847f40ecef1014c0b5e488a_xow2a3.png"
            ]
        },
        {
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695292943/Screenshot_2023-09-21_174138_hnfldf.png",
            title: 'BPS Digital',
            link: "https://webapps.bps.go.id/bandarlampungkota/digital1871/index.php",
            typeProject: "Freelance",
            listTools: [
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                "https://cdn-icons-png.flaticon.com/512/732/732212.png",
                "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"
            ]
        },
        {
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695290908/PTD_rxhwjq.png",
            title: 'Smart Fish Aggregating Device',
            link: "https://play.google.com/store/apps/details?id=com.sfad",
            typeProject: "Self Project",
            listTools: [
                "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
                "https://cdn-icons-png.flaticon.com/512/919/919825.png",
                "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
            ]
        },
    ]


    return (
        <div className="contain-project" id="project">
            <div className="title-slice-project" >
                <h2 className="h2-project">Highlight Project</h2>
            </div>
            <h4>
                There are some of the projects I have created,there are self-made projects, company products, and project teams
            </h4>
            <Zoom>
                <div className="grid">

                    {
                        listProject.map((data) => {
                            return (
                                <a className="card-project" href={`${data.link}`} target="_blank">
                                    <img src={data.image} />
                                    <h2>
                                        {data.title}
                                    </h2>
                                    <div className="row">
                                        <h5>{`${data.typeProject} : `}</h5>
                                        {
                                            data.listTools.map(value => <img src={value} />)
                                        }
                                    </div>
                                </a>
                            )
                        })
                    }


                </div>
            </Zoom>
        </div>
    )
}

export interface PropsCard {
    image: string
    title: string
    link: string
    typeProject: string
    listTools: Array<string>
}