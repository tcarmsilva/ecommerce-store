
import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import {Link} from 'react-router-dom';


class ProductCard extends React.Component{
    
    // 
    
    render(){
        return(

                <Card className="card text-center w-50 my-3" >
                    <CardBody>
                        <CardTitle tag="h4">{this.props.productInfo.title}</CardTitle>
                    </CardBody>
                    <CardImg className='w-25 h-50 p-3 mx-auto d-block' src={this.props.productInfo.image} alt={this.props.productInfo.title} />
                    <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"><del>R$ {(this.props.productInfo.price*1.5).toFixed(2)}</del></CardSubtitle>
                        <CardSubtitle tag="h5" className="mb-2 text-success">R$ {(this.props.productInfo.price).toFixed(2)}</CardSubtitle>
                        <CardText>{this.props.productInfo.description}</CardText>
                        {
                            this.props.isProductPage ? (
                                <>
                                    {/* <Button className="mx-3" onClick={this.sendEmail}>Send email</Button> */}
                                    <Link to={`/product/${this.props.productInfo.id}`}><Button className="mx-3">Send whatsapp</Button></Link>        
                                </>
                                 
                            )
                            :   <Link to={`/product/${this.props.productInfo.id}`}><Button>Click for details</Button></Link>
                        }
                        
                    </CardBody>
                </Card>
               


        );
    };
};

export default ProductCard;
