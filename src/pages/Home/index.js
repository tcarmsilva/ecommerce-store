// general imports
import React from 'react';
import * as S from '../../styled';

// global components import
import BarraNav from '../../components/global/BarraNav'
import BottomBar from '../../components/global/BottomBar'
import Button from '../../components/global/Button'
import Footer from '../../components/global/Footer'
import FooterSecurity from '../../components/global/FooterSecurity'

// page components import
import ProductList from '../../components/home/ProductList'
import PromoCarrossel from '../../components/home/PromoCarrossel'
import UpperBar from '../../components/home/UpperBar'



function Home () {
    return(

        <S.Container>
            {/* <h1>testedepagina</h1>
            <ul>
                <li>teste de li sem o styled components</li>
            </ul>
            <S.Title>teste do styled component</S.Title>
            <S.List>
                <S.ListItem>Teste do styled componensdt de list item</S.ListItem>
                <S.ListItem>Teste do styled component deasdd list item</S.ListItem>
            </S.List> */}
            
            { // componentes que devem aparecer nesta pagina } 
            }
            <BarraNav/>
            <UpperBar/>

            <PromoCarrossel/>
            
            <ProductList/>
            <Button/>
          
            <FooterSecurity/>
            <Footer/>
            <BottomBar/>
       

        </S.Container>

    );
};


export default Home;