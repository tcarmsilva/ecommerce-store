// general imports
import React from 'react';
import * as S from '../../styled';

// global components import
import BarraNav from '../../components/global/BarraNav'
import BottomBar from '../../components/global/BottomBar'
import Footer from '../../components/global/Footer'
import FooterSecurity from '../../components/global/FooterSecurity'
import ProductCard from '../../components/global/ProductCard'
import ProfileForm from '../../components/global/ProfileForm'

// page components import
import Faq from '../../components/product/Faq'
import TabProductInfo from '../../components/product/TabProductInfo'



function Product () {
    return(

        <S.Container>

            { // componentes que devem aparecer nesta pagina } 
            }

            <BarraNav/>

            <ProductCard/>
            <TabProductInfo/>
            <Faq/>
       
            <ProfileForm/>
          
            <FooterSecurity/>
            <Footer/>
            <BottomBar/>
       

        </S.Container>

    );
};


export default Product;