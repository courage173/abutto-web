import { USER_LOGIN, USER_LOGOUT } from '../type'
import firebase from 'firebase';


const userLogin = (payload) => {
    return {
        type: USER_LOGIN,
        payload
    }
}

export const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();

    return (dispatch) => firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        user.auth =
            localStorage.AbuttoToken = token
        return dispatch(getFbUser(token))

        // ...
    }).catch(function (error) {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        const res = {
            message: errorMessage,
            authenticated: false
        }

        dispatch(userLogin(res))
        // ...
    })


}

export const getFbUser = (token) => {
    return (dispatch) => fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture.type(large)&access_token=' + token)
        .then((res) => res.json())
        .then((res) => {
            if (res.error) {
                res.authenticated = false
            } else {
                res.authenticated = true
            }



            return dispatch(userLogin(res))
        }).catch(() => {
            const res = { authenticated: false }
            return dispatch(userLogin(res))
        })
}


export const signInWithGoogle = () => {

}

export const signInWithEmailAndPassword = () => {

}



export const logout = () => {
    return (dispatch) => firebase.auth().signOut().then(() => {
        localStorage.removeItem('AbuttoToken')
        return dispatch({
            type: USER_LOGOUT,
            payload: { authenticated: false }
        })
    }).catch((error) => {
        // An error happened.
    });
}


