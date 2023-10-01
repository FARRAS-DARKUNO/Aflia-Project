import "./profile.css"
import { Fade } from "react-awesome-reveal"

export const Profile = () => {
    const listImage: Array<string> = [
        'https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png',
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png",
        "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
        "https://cdn.iconscout.com/icon/free/png-256/free-flutter-3628777-3030139.png?f=webp",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png",
        "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        "https://i.pinimg.com/originals/eb/e8/80/ebe880ba05add588e0518ad30d6fe1de.png"
    ]
    return (
        <div className="contain-profile" id="profile">
            <div className="width-per-contain">
                <Fade className="title-slice-profile" direction="left">
                    <h2 className="h2-profile">My Profile</h2>
                </Fade>
                <Fade direction="left">
                    <h5 className="im">
                        I am a <span>Mobile Developer</span> and <span>Full Stack Developer</span>. I have knowledge programming logic that can support to create and deploy projects. I can also design <span>UI/UX</span> and collaborate with <span>Github</span>
                    </h5>
                </Fade>
                {
                    listImage.map(image => {
                        return (

                            <img src={image} alt="React Image" style={{ height: 45, marginRight: 15, marginTop: 10 }} />

                        )
                    })
                }

            </div>


            <Fade className="width-per-image" direction="right">
                <img src={"https://res.cloudinary.com/dghcfqoie/image/upload/v1696047618/self_hxc5av.png"} className="image-self" />
            </Fade>
        </div>
    )
}