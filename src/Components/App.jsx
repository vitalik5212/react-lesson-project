import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                                  addPost={props.addPost}/> } />
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage} /> } />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;