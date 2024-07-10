import ColorDisplay from './pages/ColorDisplay'
import './home.css'

function Home() {

    const OpenGitHubInNewTab = () => {
        window.open("https://github.com/scheuermann-markus/ReactSpielwiese", "_blank");
    }

    return (
        <>
            <section className="home__hero-section _flex _align-items-center">
                <div>
                    <h1>React Playground</h1>
                    <p>This is a React website where I test and store various concepts.</p>
                    <button className="btn btn-primary _flex" onClick={OpenGitHubInNewTab}>
                        <i className="bi bi-github"></i>
                        View Code on Git
                    </button>
                </div>
            </section>

            <section>
                <ColorDisplay />
            </section>
        </>
    );
}

export default Home;