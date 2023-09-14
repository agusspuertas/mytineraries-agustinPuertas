import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"



export const GoogleSignIn = () => {

    const googleButton = useRef();

    const handleCredentialResponse = async (response) => {
        // console.info('JWT GOOGLE: ', response.credential);
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:7000/api/auth/google', data);

        console.log(userResponse)
    }

    useEffect(() => {
        window.onload = function () {
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

