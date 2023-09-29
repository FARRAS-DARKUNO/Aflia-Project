import Header from "./components/header/header"
import Introduction from "./components/introduction/introduction"
import "./app.css"
import { Profile } from "./components/profile/profile"
import { HighlightProject } from "./components/highlight_proect/highlight_project"
import { WorkExperience } from "./components/work_experience/work_experience"
import Footer from "./components/footer/footer"


const App = () => {

    return (
        <>
            <Header/>
            <Introduction/>
            <Profile/>
            <HighlightProject/>
            <WorkExperience/>
            <Footer/>
        </>
    )
}

export default App
