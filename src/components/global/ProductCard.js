
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

class ProductCard extends React.Component{
    render(){
        return(

                <Card className="card text-center my-3" >
                    <CardBody>
                        <CardTitle tag="h4">{this.props.productInfo.title}</CardTitle>
                    </CardBody>
                    <CardImg className='w-25 h-50 p-3 mx-auto d-block' src={this.props.productInfo.image} alt={this.props.productInfo.title} />
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><del>R$ {(this.props.productInfo.price*1.5).toFixed(2)}</del></CardSubtitle>
                        <CardSubtitle tag="h5" className="mb-2 text-success">R$ {(this.props.productInfo.price).toFixed(2)}</CardSubtitle>
                        <CardText>{this.props.productInfo.description}</CardText>
                        <Button>Click for details</Button>
                    </CardBody>
                </Card>
               


        );
    };
};

export default ProductCard;
