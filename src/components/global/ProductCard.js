
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

class ProductCard extends React.Component{
    render(){
        return(
            <div class="card text-center">
                <Card >
                    <CardBody>
                        <CardTitle tag="h4">Card title</CardTitle>
                    </CardBody>
                    <CardImg top width="100%" src="/assets/256x186.svg" alt="COLOCAR AQUI O CARROSSEL" />
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><del>R$ 130,00</del></CardSubtitle>
                        <CardSubtitle tag="h5" className="mb-2 text-success">R$ 130,00</CardSubtitle>
                        <CardText>This is a great description of this product.</CardText>
                        <Button>Click for details</Button>
                    </CardBody>
                </Card>
               

            </div>
        );
    };
};

export default ProductCard;