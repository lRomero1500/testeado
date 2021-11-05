import FacebookLogin from '@greatsumini/react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import useAuth from '../../auth/useAuth';


export default function Login() {
    const auth = useAuth();
    const ResponseFacebook = (response) => {
        console.log(response);
        auth.Login(response);
    }
    const responseGoogle = (response) => {
        console.log(response);
        auth.Login(response);
    }
    return (
        <section>
            <h1>login</h1>
            <FacebookLogin
                appId="657416948976581"
                autoLoad={false}
                fields="name,email,picture"
                callback={ResponseFacebook}
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
            />
            <GoogleLogin
                clientId="1020170175334-iaclcrjpv3l84insqv97a96d1hooglkj.apps.googleusercontent.com"
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </section>
    )
}
