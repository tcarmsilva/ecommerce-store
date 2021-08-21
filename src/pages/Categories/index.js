// general imports
import React from 'react';
import * as S from '../../styled';

// global components import
import BarraNav from '../../components/global/BarraNav'
import BottomBar from '../../components/global/BottomBar'
import Footer from '../../components/global/Footer'
import FooterSecurity from '../../components/global/FooterSecurity'

// page components import
import CategoryList from '../Categories/CategoryList'
import UpperBar from '../../components/home/UpperBar'


// api imports
import apiFakeStore from '../../apifakestore'


class Categories extends React.Component {
    
    state = {
        products: [],
    }

    getCategoriesProducts = () => {
        apiFakeStore.getCategoriesProducts(this.props.category).then((result) => {
            this.setState({
                products: result.data,
            })
        }).catch((err) => {
            console.log('erro de puxar da api', err)            
        });
    }

    componentDidMount = () => {
        this.getCategoriesProducts()

    }
    
    render(){
        return(



            <S.Container>
                
                <BarraNav/>
                <UpperBar/>
                
                <CategoryList categoryList = {this.state.products} />
                   
                <FooterSecurity/>
                <Footer/>
                <BottomBar/>

            </S.Container>

        );
}};


export default Categories;