
import React from "react";
import "../App.css";

import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";


const APP_ID = "YOUR APP ID";
const USER_ID = "USER _ ID";
const accessToken = 'Access token of the user';

function Chat() {
    return (

        <div className="App">
            <SendbirdApp appId={APP_ID} userId={USER_ID} accessToken={accessToken} />

        </div>

    );
}

export default Chat;
