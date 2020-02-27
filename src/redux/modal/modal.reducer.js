import { TOGGLE_MODAL } from './modal.actions';

const INITAIL_SATATE = {
    toggleModal : false
}


const handleModal = (state = INITAIL_SATATE,action) => {
    
    switch(action.type){
        case TOGGLE_MODAL : {
            return {
                ...state, 
                toggleModal : action.payload
            }
        }

        default : {
            return state
        }
    }
}


export default handleModal;
