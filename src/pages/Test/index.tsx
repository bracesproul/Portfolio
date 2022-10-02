import './styles.css'

export default function Test(): JSX.Element {
    return (
        <div className="nav-page-container">
            <h1>Test</h1>
            <NavBar />
        </div>
    )
}

function NavBar(): JSX.Element {
    return (
        <div className="nav-container">
            <button className="button-style">Contact</button>
            <button className="button-style">Home</button>
            <button className="button-style">Resume</button>
            <button className="button-style">GitHub</button>
            <button className="button-style">LinkedIn</button>
            <button className="button-style">Email</button>
        </div>
    )
}