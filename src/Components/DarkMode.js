import React, { useEffect, useState } from 'react';
import Todo from './Todo_Using_Hooks/Todo';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Calculator from './Calculator/Calculator';


const DarkMode = () => {
    const [darkTheme, setDarkTheme] = useState(getDefaultTheme())

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkTheme));
    }, [darkTheme])

    function getDefaultTheme() {
        const selectedTheme = JSON.parse(localStorage.getItem('dark'));
        return selectedTheme || false;
    }
    return (
        <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
            <nav>
                <div className="button-container">
                    <button className={darkTheme ? 'dark-btn' : 'light-btn'} onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
                        Toggle Theme
                    </button>
                    <button className={darkTheme ? 'dark-btn' : 'light-btn'} style={{ marginLeft: '2px' }}><Link style={{ textDecoration: 'none' }} to="/todo">Todo</Link></button>
                    <button className={darkTheme ? 'dark-btn' : 'light-btn'} style={{ marginLeft: '2px' }}><Link style={{ textDecoration: 'none' }} to="/about">About</Link></button>
                    <button className={darkTheme ? 'dark-btn' : 'light-btn'} style={{ marginLeft: '2px' }}><Link style={{ textDecoration: 'none' }} to="/calculator">Calculator</Link></button>
                    <button className={darkTheme ? 'dark-btn' : 'light-btn'} style={{ marginLeft: '2px' }}><Link style={{ textDecoration: 'none' }} to="/test.pdf" target="_blank" download>Download Resume</Link></button>
                </div>
            </nav>
            <div className="content">
                <Switch>
                    <Route path="/todo" component={Todo} />
                    <Route path="/about" component={About} />
                    <Route path="/calculator" component={Calculator} />
                </Switch>

            </div>
        </div>
    )
}

export default DarkMode