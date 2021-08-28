import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SendForm extends React.Component{
  
  state = {
    name: '',
    phone: '',
  }

  handleInput = (e) => { // e = event
    // const name = e.target.name 
    // const value = e.target.value  // .target é o elemento em que esta ocorrendo o evento, o value é o que foi indicado no input abaixo no html 
    
    // substitui fazer as duas variaveis acima
    const {name,value} = e.target

    this.setState({
      [name]:value // esta puxando o name declarado como variavel ali em cima
    })
  }
  
  // createWhatsappLink(){
  //   const {title, price, description} = this.props.productInfo
    
  //   const message = `Link%3A%20$Nome$%3A%20Pre%C3%A7o%3A%20`

  //   // conferir se esta certo esse link sendo passado 
  //   const whatsappLink = `https://api.whatsapp.com/send?phone=55${this.state.phone}&text=Oi%20${this.state.name}!%20Acho%20que%20voc%C3%AA%20gostaria%20de%20um%20produto%20neste%20site%3A%20https://tcarmsilva-ecommerce-store.netlify.app/`

  //   return whatsappLink
  
  // }
  
  handleSubmit(e){
    // const {title, price, description} = this.props.productInfo

    e.preventDefault()
    console.log('cliquei no link')
    window.open('https://api.whatsapp.com/send?phone=55${this.state.phone}&text=Oi%20${this.state.name}!%20Acho%20que%20voc%C3%AA%20gostaria%20de%20um%20produto%20neste%20site%3A%20https://tcarmsilva-ecommerce-store.netlify.app/', '_blank')
    // o _blank é para abrir em outra aba this.createWhatsappLink()
    // window.open faz abrir uma nova tab com esse link
  }
  
  render(){
    
    return(
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Friend's name</Label>
          <Input value={this.state.name} onChange={this.handleInput} type="text" name="name" id="exampleName" placeholder="Your Friend's name" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePhone" className="mr-sm-2">Friend's phone</Label>
          <Input value={this.state.phone} onChange={this.handleInput} type="phone" name="phone" id="examplePhone" placeholder="11999999999" />
        </FormGroup>
        <Button type='submit'>Share with a friend on Whatsapp</Button>
        
        
      </Form>
    );
  };
}

export default SendForm;