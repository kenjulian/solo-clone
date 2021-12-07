import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import login from "../..store/session";

const DemoLogin = () => {
    const dispatch = useDispatch();
    const [credential] = useState('Demo-lition');
    const [password] = useState('password');

    //log in with preset credential
    const handleSubmit = (e) => {
        return dispatch(login({
            credential,
            password,
        }))
    };

    return (
        <button className="demo-button" onClick={handleSubmit}>Demo</button>
    );
};

export default DemoLogin;