const React = require("react");

const PageHeader = () => {

    return ([
        <h2>
            <a href="#">Mark R. Repka</a>
        </h2>,
        <nav>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </nav>
    ]);
};

module.exports = PageHeader;

