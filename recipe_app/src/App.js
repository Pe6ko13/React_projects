import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Nav>
                    <GiKnifeFork />
                    <Logo to={'/'}>Delicious Recipes</Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
    padding: 2rem 0rem 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
        font-size: 2rem;
        margin-right: 1rem;
    }
`;

export default App;
