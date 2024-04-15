import styled from 'styled-components';

export const Container = styled.div`
    display: ${(props)=>(props.status ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
`
export const ModalBody = styled.div`
    border-radius: 20px;
    max-height: 95vh;
    max-width: 95vh;
    overflow: auto;
    background-color: #FFF;
    box-shadow: 0 0 50px #000;
    color: black;
`