import React, {Component, componet} from "react";
import { render } from "react-dom";


import RoomJoin from "./RoomJoin";
import CreateRoomPage from "./CreateRoomPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <switch>
                    <Route path='/'><p>"Hey their this the home page"</p></Route>
                    <Route path='/join' component={RoomJoin}></Route>
                </switch>
            </Router>
        )
    }
}