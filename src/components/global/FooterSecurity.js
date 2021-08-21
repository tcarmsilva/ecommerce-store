import React from 'react';


class FooterSecurity extends React.Component{
    render(){
        return(
            <div>
                <div class="card text-center">
                    <div class="card-header" class="p-2 text-light bg-dark">This website is secure</div>
                    <div class="card-body" class="p-3 bg-dark text-white">
                        <h5 class="card-title">Yes we have security!</h5>
                        <p class="card-text">Lots of badges will be shown here.</p>
                    </div>
                    <div class="card-footer text-muted" class="p-2 text-light bg-dark">CNPJ 999.999.999/9999-99</div>
                </div>
            </div>
        );
    };
};

export default FooterSecurity;