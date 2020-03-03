import { LOGIN_USER } from './login.action.types';
import db, { firebaseDb } from '../../firebase';
import firebase from 'firebase';
const auth = firebaseDb.auth();
export const asyncLoginActions = (loginDetails) => {
    return dispatch => {
        const { email, password } = loginDetails;
        
        var provider = new firebase.auth.OAuthProvider('microsoft.com');
        // auth.signInWithEmailAndPassword(email,password).then((res) => {
        //     db.collection('users').doc(res.user.uid)
        //     .get().then(function (doc) {
        //         if (doc.exists) {
        //             console.log('doc exists');
        //         } else {
        //             console.log("No such document!");
        //         }
        //     }).catch(function (error) {
        //         console.log("Error getting document:", error);
        //     });

        // })
        // .catch((err) => {
        //     console.log(err.message);
        // })
        // dispatch(loginActions(loginDetails));}
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}

export const loginActions = (loginDetails) => {
    return {
        type: LOGIN_USER,
        payload: loginDetails
    }
}

