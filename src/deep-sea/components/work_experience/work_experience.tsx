import "./work_experience.css"
import { Fade } from "react-awesome-reveal"

export const WorkExperience = () => {

    const listJobDesc: Array<WorkExpModel> = [
        {
            company: "PT Karya Sisi Teknis",
            colorStyle: 'FDE434',
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695880496/logo_zntzja.png",
            link: "https://sisiteknis.com",
            jobDesc: [
                {
                    title: "Mobile Developer",
                    typeJob: "Full-Time",
                    begin: "Feb 2023",
                    end: 'Present',
                    desc: [
                        "Create mobile applications using Flutter",
                        "Create real-time Chat, E-Commerce, Social Media, Crypto Wallet, PPOB and Finance features",
                        "Create UI and UX designs for mobile applications using Figma",
                        "Managing architectural code",
                        "Managing GitHub",
                        "Responsible for uploading the Mobile Apps to Playore",
                        "Work together with the team"
                    ]
                }
            ]
        },
        {
            company: "PT Kharisma Agri Inovasi",
            colorStyle: '119944',
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695885189/1599199192066_yrgdl9.jpg",
            link: "https://kharismacrop.com/",
            jobDesc: [
                {
                    title: "Full-Stack and Mobile Developer",
                    typeJob: "Internship",
                    begin: "Aug 2022",
                    end: 'Dec 2022',
                    desc: [
                        "Create mobile monitoring and control application integrated with IoT using React Native",
                        "Create an admin website using React Js",
                        "Create UI and UX designs for Website and Mobile Applications using Figma",
                        "Integrate MQTT to website and mobile application",
                        "Present project to the client",
                        "Work together with the team"
                    ]
                }
            ]
        },
        {
            company: "PT Microdata Indonesia",
            colorStyle: 'F08200',
            image: "https://res.cloudinary.com/dghcfqoie/image/upload/v1695889394/Group_21_ixrl4e.png",
            link: "https://microdataindonesia.co.id/",
            jobDesc: [
                {
                    title: "Front-End",
                    typeJob: "Internship",
                    begin: "Jun 2022",
                    end: 'Jul 2022',
                    desc: [
                        "Create a government website with ReactJs",
                        "Learning how to implement Axios, CSS, ReactJs, and how to build react apps",
                        "Learn about deploying a React App"
                    ]
                }
            ]
        },

    ]
    console.log(listJobDesc)

    return (
        <div className="contain-experience" id="work">

            <div className="title-slice-project">
                <h2 className="h2-project">Work Experience</h2>
            </div>
            <h4>
                There is some work experience as a mobile and software developer (mobile and website)
            </h4>

            {
                listJobDesc.map(data => {
                    return (
                        <Fade style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex" }}>
                            <a className="card-work"
                                href={`${data.link}`} target="_blank"
                                style={{
                                    borderColor: `#${data.colorStyle}`,
                                    backgroundColor: `#${data.colorStyle}26`,
                                }}>
                                <img src={data.image} alt="image" />
                                <div className="work-job">
                                    <h2>{data.company}</h2>
                                    {
                                        data.jobDesc.map(value => {
                                            return (
                                                <div>
                                                    <h3>{value.title} - {value.typeJob}</h3>

                                                    <p className="info">{value.begin} - {value.end}</p>
                                                    <h3>Job Description :</h3>
                                                    {
                                                        value.desc.map(desc => {
                                                            return (

                                                                <li className="info">{desc}</li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </a>
                        </Fade>
                    )
                })
            }

        </div>
    )
}

interface WorkExpModel {
    company: string
    image: string
    colorStyle: string
    link: string
    jobDesc: Array<ListJobDesc>
}

interface ListJobDesc {
    title: string
    typeJob: string
    begin: string
    end: string
    desc: Array<string>
}