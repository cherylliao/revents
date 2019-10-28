import React from 'react';
import {Modal} from 'semantic-ui-react';

import RegisterForm from "../auth/Register/RegisterForm";



const RegisterModal =()=> {
    
        return (
            
            <Modal
                size='mini'
                
                open={true}
                
            >
                <Modal.Header>
                    Sign Up to Re-vents!
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <RegisterForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    
}

export default RegisterModal;