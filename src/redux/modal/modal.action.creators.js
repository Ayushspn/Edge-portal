export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleHiddenModal = (setModal) => {
    return {
        type: TOGGLE_MODAL,
        payload: setModal
    }
}