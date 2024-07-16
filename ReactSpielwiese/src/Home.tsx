import ColorDisplay from './projects/ColorDisplay'
import Header from './layout/Header'
import './home.css'
import { Link } from 'react-router-dom';

function Home() {

    const OpenGitHubInNewTab = () => {
        window.open("https://github.com/scheuermann-markus/ReactSpielwiese", "_blank");
    }

    return (
        <>
            <section className="home__hero-section _align-content-center">
                <div className="_grid _grid_template-columns-1-1">
                    <div className="hero-section__text-wrapper">
                        <h1>React Playground</h1>
                        <p>This is a React website where I test and store various concepts.</p>
                        <button className="btn btn-primary _flex" onClick={OpenGitHubInNewTab}>
                            <i className="bi bi-github"></i>
                            View Code on GitHub
                        </button>
                    </div>
                    <div className="hero-section__cards-container">
                        <Link to="/simongame" className="hero-section__card hero-section__card--1"></Link>
                        <Link to="/" className="hero-section__card hero-section__card--2"></Link>
                        <Link to="/" className="hero-section__card hero-section__card--3"></Link>
                        <Link to="/" className="hero-section__card hero-section__card--4"></Link>
                    </div>
                </div>
            </section>

            <section className="home__section _background-white">
                <ColorDisplay />
            </section>
        </>
    );
}

export default Home;