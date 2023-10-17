import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scorlled upto given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <div onClick={scrollToTop}>
                    <Tooltip title="Scroll Top" aria-label="add" arrow placement="top">
                        <Fab color='primary' style={{ background: 'linear-gradient(to right,#024EFB,#2B86FC ,#71E5FF)', color: 'white' }}>
                            <ArrowUpwardIcon />
                        </Fab>
                    </Tooltip>
                </div>
            )}
        </div>
    );
}
