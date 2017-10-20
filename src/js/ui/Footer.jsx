const React = require("react");

const PageFooter = () => {

    return ([
        <p>© Mark Repka 2017. All rights reserved. View Source on <a href="https://github.com/repkam09/website-react-2">GitHub.</a></p>,
        <ul>
            <li>
                <a href="https://twitter.com/Repkam09">
                    <i className="fa fa-twitter-square"></i>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/repkam09">
                    <i className="fa fa-facebook-square"></i>
                </a>
            </li>
            <li>
                <a href="https://telegram.me/repkam09">
                    <i className="fa fa-telegram"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/repkam09">
                    <i className="fa fa-github-square"></i>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/markrepka/">
                    <i className="fa fa-linkedin-square"></i>
                </a>
            </li>
        </ul>
    ]);
};

module.exports = PageFooter;

