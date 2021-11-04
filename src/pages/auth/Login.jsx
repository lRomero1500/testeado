import FacebookLogin from 'react-facebook-login';
import useAuth from '../../auth/useAuth';

const ResponseFacebook = (response) => {   
    const auth=useAuth(); 
    auth.Login(response);
  }
export default function Login() {
    
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
