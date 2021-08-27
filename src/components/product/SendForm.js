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
  
  createWhatsappLink(){
    const {title, price, description} = this.props.productInfo
    
    const message = `Link%3A%20$Nome$%3A%20Pre%C3%A7o%3A%20`

    // conferir se esta certo esse link sendo passado 
    const whatsappLink = `https://api.whatsapp.com/send?phone=55${this.state.phone}&text=Oi%20${this.state.name}!%20%20Vi%20este%20produto%20na%20Thais%20Shop%20e%20lembrei%20de%20vc%20%3AD%20Olha%20aqui%3A%20${message}`
  
    return whatsappLink
  
  }
  
  handleSubmit(e){
    this.createWhatsappLink()
    e.preventDefault()
    console.log('cliquei no link')
    window.open('https://www.google.com', '_blank')
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
        <Button type='submit'>Send Whatsapp</Button>
        
        
      </Form>
    );
  };
}

export default SendForm;