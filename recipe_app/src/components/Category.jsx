import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';

const Category = () => {
    return (
        <List>
            <div>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </div>
            <div>
                <FaHamburger />
                <h4>American</h4>
            </div>
            <div>
                <GiNoodles />
                <h4>Thai</h4>
            </div>
            <div>
                <GiChopsticks />
                <h4>Japanese</h4>
            </div>
        </List>
    );
};

const List = styled.div`
    margin: 2rem 0rem;
    display: flex;
    justify-content: center;
`;

export default Category;
