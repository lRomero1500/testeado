import FacebookLogin from 'react-facebook-login';
import useAuth from '../../auth/useAuth';


export default function Login() {
    const auth=useAuth(); 
    const ResponseFacebook = (response) => {
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
        </section>
    )
}
