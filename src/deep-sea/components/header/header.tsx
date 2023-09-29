import { useEffect, useState } from 'react';
import logo from "../../../../public/aflia.png"
import "./header.css"
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [scrolling, setScrolling] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 1800) {
                setScrolling("#131A22");
            }
            else if (window.scrollY > 300) {
                setScrolling("#FFFFFF");
            }
            else {
                setScrolling("transparent");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function openNav() {
        document.getElementById("mySidenav")!.style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav")!.style.width = "0";
      }

    return (
        <header>
            <div className="contain" style={{ backgroundColor: scrolling }}>
                <a className="row" href=''>
                    <img src={logo} alt="Logo" style={{ height: 35 }} />
                    <div style={{ width: 10 }} />
                    <h3>Aflia</h3>
                </a>
                <div className="row">
                    <a className="profile-menu" href='#profile' > My Profile </a>
                    <a className="menus" href='#project'> Project </a>
                    <a className="menus" href='#work'> Work Experience </a>
                    <div className="berger" onClick={openNav}>
                        <RxHamburgerMenu size={35} />
                    </div>
                </div>
            </div>
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Aflia</a>
                <a href="#profile">My Profile</a>
                <a href="#project">Project</a>
                <a href="#work">Experience</a>
            </div>
        </header>
    )
}
export default Header