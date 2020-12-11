import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass as farCompass, faHeart as farHeart, faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch as fasSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";

class Navigation extends React.Component {
    render() {
        return (
            <nav className="NavKim">
                <div className="wrapper">
                    <div className="logos">
                        <Link className="delete-hyper-link" to="/MainKim">
                            <img src="images/sunghoonkim/insta_logo.svg" alt="instagram-logo" />
                            <span>Westagram</span>
                        </Link>
                    </div>
                    <div className="container">
                        <FontAwesomeIcon className="faIcon" icon={fasSearch} />
                        <input placeholder="검색" />
                    </div>
                    <ul>
                        <li>
                            <FontAwesomeIcon className="faIcon add-cursor" icon={farCompass} />
                        </li>
                        <li>
                            <FontAwesomeIcon className="faIcon add-cursor" icon={farHeart} />
                        </li>
                        <li>
                            <FontAwesomeIcon className="faIcon add-cursor" icon={farUser} />
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;