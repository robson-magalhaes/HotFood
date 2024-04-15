import * as C from './styled';

export default ({ status, setModalStatus, children }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('modalBg')) {
            setModalStatus(false)
        }
    }
    return (
        <C.Container
            status={status}
            onClick={handleClick}
            className='modalBg'
        >
            <C.ModalBody>
                {children}
            </C.ModalBody>
        </C.Container>
    )
}