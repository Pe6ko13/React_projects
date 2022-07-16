import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <List>
            <SLink to='/cuisine/Italian'>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to='/cuisine/American'>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to='/cuisine/Thai'>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to='/cuisine/Japanese'>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    );
};

const List = styled.div`
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: #acfaac;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.9);
    box-shadow: 2px 2px 5px green;

    svg {
        font-size: 1.5rem;
    }

    &:hover {
        transform: scale(1);
    }

    &.active {
        background: orange;
        box-shadow: 2px 2px 5px orangered;
    }
`;

export default Category;
