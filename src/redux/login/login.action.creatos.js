import { LOGIN_USER } from './login.action.types';
import db, {firebaseDb} from '../../firebase';
const auth = firebaseDb.auth();
export const  asyncLoginActions = (loginDetails)  => {
    return dispatch => {
        const {email , password} = loginDetails;
        auth.signInWithEmailAndPassword(email,password).then((res) => {
            db.collection('users').doc(res.user.uid)
            .get().then(function (doc) {
                if (doc.exists) {
                    console.log('doc exists');
                } else {
                    console.log("No such document!");
                }
            }).catch(function (error) {
                console.log("Error getting document:", error);
            });

        })
        .catch((err) => {
            console.log(err.message);
        })
       // dispatch(loginActions(loginDetails));}

}
}

export  const loginActions = (loginDetails) => {
    return {
        type: LOGIN_USER,
        payload: loginDetails
    }
}

