import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import ProductCard from '../../components/global/ProductCard';




const CategoryList = (props) => {
    return (
        <CardDeck className='d-flex flex-wrap justify-content-around' >
            {
              props.categoryList.map(
                (product) => {
                  return <ProductCard productInfo = {product}/>
                }
              )
            }
        </CardDeck>

        
    );
  };

  
  

export default CategoryList;