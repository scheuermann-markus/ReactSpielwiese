import ColorDisplay from './pages/ColorDisplay'
import Header from './layout/Header'
import './home.css'

function Home() {

    const OpenGitHubInNewTab = () => {
        window.open("https://github.com/scheuermann-markus/ReactSpielwiese", "_blank");
    }

    return (
        <>
            <section className="home__hero-section _flex _flex-direction-column _justify-content_space-between">
                <Header />
                <div className="">
                    <h1>React Playground</h1>
                    <p>This is a React website where I test and store various concepts.</p>
                    <button className="btn btn-primary _flex" onClick={OpenGitHubInNewTab}>
                        <i className="bi bi-github"></i>
                        View Code on GitHub
                    </button>
                </div>
                <div />
            </section>

            <section className="home__section _background-white">
                <ColorDisplay />
            </section>
        </>
    );
}

export default Home;