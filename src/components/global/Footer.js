import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div class="card text-center">
                    <div class="card-header" class="p-2 text-light bg-dark">Ecommerce Store Project</div>
                    <div class="card-body" class="p-3 bg-secondary text-white">
                        <h5 class="card-title">Thank you for checking out my store!</h5>
                        <p class="card-text">This store was part of my Bootcamp at Ironhack.</p>
                        <p>Stacks used: 
                            <li>React</li>
                            <li>Reactstrap</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>APIs: fakestoreapi.com</li>
                            <li>Axios</li>
                        </p>
                        <a href="https://github.com/tcarmsilva/" class="btn btn-light">Go to my Github</a>
                    </div>
                    <div class="card-footer text-muted" class="p-2 text-light bg-dark">© 2021 Copyright: tcarmsilva @ Github</div>
                </div>
            </div>
        );
    };
};

export default Footer;


