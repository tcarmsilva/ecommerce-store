import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import ProductCard from '../global/ProductCard';




const ProductList = (props) => {
    return (
        <CardDeck>
            <li>{ProductCard}</li>
        </CardDeck>
    );
  };
  

export default ProductList;