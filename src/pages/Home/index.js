// general imports
import React from 'react';
import * as S from '../../styled';

// global components import
import BarraNav from '../../components/global/BarraNav'
// import BottomBar from '../../components/global/BottomBar'

import Footer from '../../components/global/Footer'
import FooterSecurity from '../../components/global/FooterSecurity'

// page components import
import ProductList from '../../components/home/ProductList'
import PromoCarrossel from '../../components/home/PromoCarrossel'
import UpperBar from '../../components/home/UpperBar'

// api imports
import apiFakeStore from '../../apifakestore'


class Home extends React.Component {
    
    state = {
        products: [],
    }

    getProducts = () => {
        apiFakeStore.getProducts().then((result) => {
            this.setState({
                products: result.data,
            })
        }).catch((err) => {
            console.log('erro de puxar da api', err)            
        });
    }

    componentDidMount = () => {
        this.getProducts()

    }
    
    render(){
        return(



            <S.Container>

                <div className='position-fixed fixed-top'>
                    <BarraNav/>
                    <UpperBar/>
                </div>
                
                <div className='position-relative' style={{top:'130px'}}>
                    <PromoCarrossel/>
                    
                    <ProductList allProducts = {this.state.products} />
                    
                    <FooterSecurity/>
                    <Footer/>
                    
                </div>
                
                {/* <BottomBar className='fixed-bottom'/> */}

            </S.Container>

        );
}};


export default Home;