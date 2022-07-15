import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 4rem 2rem;
`;

export const Card = styled.div`
    min-height: 20rem;
    min-width: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        color: #ffffff;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, -50%);
    }
`;

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
`;
