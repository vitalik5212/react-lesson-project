import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Components/Header/Header";
// import Footer from "./Footer";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <NavBar />
                <Profile />
                {/*<Footer />*/}
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);