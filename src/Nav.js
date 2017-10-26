
import React from 'react';
import { Link } from 'react-router-dom';

// Build your app components according to the provided mockup.
// Most components should be stateless functional components that focus on the UI rather than behavior.You’ll need:

// A navigation menu component

const Nav = () => {

        return (
            <div>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <Link to="/cats">Cats</Link>
                        </li>
                        <li>
                            <Link to="/dogs">Dogs</Link>
                        </li>
                        <li>
                            <Link to="/computers">Computers</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
}

export default Nav;