import {TOGGLE_MODAL, CLOSE_EMP_FORM_MODAL} from './modal.actions';

export const toggleHiddenModal = (setModal) => {
    return {
        type: TOGGLE_MODAL,
        payload: setModal
    }
}

export const closeAddFormModal = (setModal) => {
    return {
        type: CLOSE_EMP_FORM_MODAL,
        payload: setModal
    }
}