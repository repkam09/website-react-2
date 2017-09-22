var ReactDOM = require("react-dom");
var React = require("react");

/**
 * Set up some helper functions that various pages use later
 */
window.postreq = function (url, body) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        var sendbody = body;
        xmlhttp.open("POST", url, true);

        var bodytype = typeof body;
        switch (bodytype) {
            case "object": {
                xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                sendbody = JSON.stringify(body);
                break;
            }

            case "string": {
                xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                sendbody = body;
                break;
            }

            default: {
                xmlhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            }
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status === 200) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.status);
                }
            }
        }

        xmlhttp.send(sendbody);
    });
}

window.getreq = function (url) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status === 200) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.status);
                }
            }
        }
        xmlhttp.send();
    });
}

var elementNowPlaying = document.getElementById("now-playing-widget");
if (elementNowPlaying) {
    const nowplaying = React.createElement(require("./ui/music.jsx"));
    ReactDOM.render(nowplaying, elementNowPlaying);
}
