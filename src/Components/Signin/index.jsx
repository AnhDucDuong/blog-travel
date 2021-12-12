import React from 'react';
import GoogleLogin from 'react-google-login';

function Signin() {
    const success = (response) => {
        console.log(response);
    }

    const failure = () => {

    }

    return (
        <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 ">
            <GoogleLogin
                clientId="628567944868-um9tlgq7lt2sc58p95co1tml29an1rra.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={success}
                onFailure={failure}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Signin