import React from 'react';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';

export default function WhatsAppChat() {
    return (
        <React.Fragment>
            <a href="https://api.whatsapp.com/send?phone=919738218506&" target="_blank" rel="noopener noreferrer">
                <WhatsappOutlinedIcon style={{ color: 'green', marginLeft: '3px' }} />
            </a>
        </React.Fragment>
    );
}
