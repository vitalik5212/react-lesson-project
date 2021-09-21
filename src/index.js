import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

class App extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <NavBar />
                <div className='app-wrapper-content'>
                    <Dialogs />
                </div>
                {/*<Profile />*/}
            </div>
        );
    };
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);