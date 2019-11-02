export const type = 'OPEN_MODAL';

const openModal = (isOpen) => ({
    type,
    payload: isOpen,
});

export default openModal;