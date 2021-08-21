import styled from 'styled-components';


// tres testes de styled components para usar como base. testes foram aplicados em home/index.js
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`

export const List = styled.ul`
    list-style: none;
    padding: none;
    font-family: sans-serif;

`;

export const ListItem = styled.li`
    margin: 5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
    text-align: center;
`;

// para usar na div geral do react em cada componente
export const Container = styled.div` 
    width: 100%;
    max-width: auto;
    margin: 0 auto;
`;

/* max-width: 991px; */