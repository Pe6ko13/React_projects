import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
    return (
        <List>
            <NavLink to='/cuisine/Italian'>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to='/cuisine/American'>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to='/cuisine/Italian'>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to='/cuisine/Italian'>
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </List>
    );
};

const List = styled.div`
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
`;

export default Category;
