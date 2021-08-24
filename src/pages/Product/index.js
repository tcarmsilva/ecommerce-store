// general imports
import React from 'react';
import * as S from '../../styled';
import apiFakeStore from '../../apifakestore';

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



class Product extends React.Component {

    state = {
        product: {},
    }

    getProduct = (id) => {
        apiFakeStore.getProduct(id).then((result) => {
            this.setState({
                product: result.data,
            })
        }).catch((err) => {
            console.log('erro de puxar da api', err)            
        });
    }

    componentDidMount = () => {
        this.getProduct(this.props.match.params.id)

    }
    
    render() {
        return(

            <S.Container>
    
                <BarraNav/>

                {this.state.product.id ? <>
                    <ProductCard productInfo={this.state.product}/>
                    {/* <TabProductInfo/>
                    <Faq/>
            
                    <ProfileForm/> */}
                
                    <FooterSecurity/>
                    <Footer/>
                    <BottomBar/>
                    
                    </> : 'loading...'
                }
    
                
           
    
            </S.Container>
    
        )}
};


export default Product;