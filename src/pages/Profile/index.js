// general imports
import React from 'react';
import * as S from '../../styled';

// global components import
import BarraNav from '../../components/global/BarraNav'
import BottomBar from '../../components/global/BottomBar'
import Footer from '../../components/global/Footer'
import ProfileForm from '../../components/global/ProfileForm'

// page components import



function Profile () {
    return(

        <S.Container>

            { // componentes que devem aparecer nesta pagina } 
            }
            
            <BarraNav/>

            <ProfileForm/>
        
          
            <Footer/>
            <BottomBar/>
       

        </S.Container>

    );
};

export default Profile;