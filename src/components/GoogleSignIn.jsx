import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react"
import { user_login_google } from "../store/actions/userAction";
import { useDispatch, useSelector } from "react-redux";


export const GoogleSignIn = () => {

    // const store=useSelector(store=>store.userReducer)

    const dispatch = useDispatch();

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {

        const data = {
            token_id: response.credential
        }
        try {
            dispatch(user_login_google(
                data
            ))

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id: "244105246850-gfh4tp8p6qpstb6kd3bcr3vvq9ds27ii.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { theme: "outline", size: "large" }  // customization attributes
            );
        }
    }, [])


    return (
        <div ref={googleButton}></div>
    )
}

