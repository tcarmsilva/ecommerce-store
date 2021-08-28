import React from 'react';
import badge from '../../images/security.png';

class FooterSecurity extends React.Component{
    render(){
        return(
            <div>
                <div className="card text-center">
                    {/* <div className="card-header p-2 text-light bg-dark">This website is secure</div> */}
                    <div className="card-body p-3 bg-dark text-white">
                        <h5 className="card-title">This website is secure</h5>
                        {/* <p className="card-text">Lots of badges will be shown here.</p> */}
                        <img src={badge} alt='security badge' className='h-10'/>
                    </div>
                    <div className="card-footer text-muted p-2 text-light bg-dark">CNPJ 999.999.999/9999-99</div>
                </div>
            </div>
        );
    };
};

export default FooterSecurity;