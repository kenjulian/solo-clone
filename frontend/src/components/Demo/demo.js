import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as sessionActions from "../../store/session";

const DemoLogin = () => {
    const dispatch = useDispatch();
    const [credential] = useState('Demo-lition');
    const [password] = useState('password');

    //log in with preset credentials from state store
    const handleSubmit = (e) => {
        return dispatch(sessionActions.login({
            credential,
            password,
        }))
    };

    return (
        <button className="demo-button" onClick={handleSubmit}>Demo</button>
    );
};

export default DemoLogin;