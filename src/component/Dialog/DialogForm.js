import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '../../globalStyles';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import ContactForm from '../../views/contactUs/ContactForm';
import { logDetails } from '../../data/homeData';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

const DraggableDialog = ({
    label,
    trailRegistration
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const initial = { opacity: 0, y: 30 };
    const animation = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
            });

            return;
        }

        animation.start({
            opacity: 0,
            y: 30,
            transition: {
                duration: 0.2,
            },
        });
    }, [inView, animation]);
    let navigate = useNavigate();

    return (
        <div ref={ref}>
            <Button
                primary
                initial={initial}
                transition={{ delay: 0.6, duration: 0.6 }}
                animate={animation}
                onClick={handleClickOpen}
            >
                {label}
            </Button>
            &nbsp;&nbsp;&nbsp;
            {trailRegistration && <Button
                primary
                initial={initial}
                transition={{ delay: 0.6, duration: 0.6 }}
                animate={animation}
                onClick={() => navigate('/trail-registration')}
            >
                Register for trial
            </Button>}
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogContent style={{ padding: '0px' }}>
                    <DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item
                                xs={12}
                                sm={6}
                                md={6}
                                initial={initial}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                animate={animation}
                                style={{ background: '#020B50', color: '#fff', padding: '3rem' }}>
                                <img src={logDetails.drillbitLogo} style={{ marginLeft: '-17px', width: '10rem' }} />
                                <div style={{ fontSize: '2rem' }}>
                                    A plagiarism checker that reads between the lines
                                </div>
                                <div style={{ marginTop: '1rem', fontSize: '14px' }}>
                                    A global checker that uses the most advanced technology to catch the most sophisticated forms of plagiarism.
                                </div>
                            </Grid>
                            <Grid item
                                xs={12}
                                sm={6}
                                md={6}
                                initial={initial}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                animate={animation}
                                style={{ padding: '35px 44px 4px 20px' }}>
                                <ContactForm />
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
};

DraggableDialog.propTypes = {
    label: PropTypes.bool,
    trailRegistration: PropTypes.bool
};


export default DraggableDialog;