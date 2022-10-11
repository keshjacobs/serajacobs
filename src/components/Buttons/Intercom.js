import React from 'react';
import app from "../../Config";
class intercom  extends React.Component{
    constructor(props){
        super(props);
        window.Intercom('boot', {
          app_id:app.intercom_id
        });
    }
}

export default intercom;