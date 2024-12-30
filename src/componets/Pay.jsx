import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PayPalIcon from '@mui/icons-material/AccountBalanceWallet';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center" color="primary">
                Payment Page
            </Typography>

            <Box sx={{ mt: 3 }}>
                <FormControl component="fieldset">
                    <Typography variant="h6" gutterBottom color="secondary">
                        Select Payment Method
                    </Typography>
                    <RadioGroup value={paymentMethod} onChange={handlePaymentChange} row>
                        <FormControlLabel 
                            value="creditCard" 
                            control={<Radio />} 
                            label={<><CreditCardIcon sx={{ mr: 1 }} /> Credit Card</>} 
                        />
                        <FormControlLabel 
                            value="bankTransfer" 
                            control={<Radio />} 
                            label={<><AccountBalanceIcon sx={{ mr: 1 }} /> Bank Transfer</>} 
                        />
                        <FormControlLabel 
                            value="paypal" 
                            control={<Radio />} 
                            label={<><PayPalIcon sx={{ mr: 1 }} /> PayPal</>} 
                        />
                    </RadioGroup>
                </FormControl>

                <Box sx={{ mt: 3 }}>
                    {paymentMethod === 'creditCard' && (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Card Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="Expiration Date" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth label="CVV" variant="outlined" />
                            </Grid>
                        </Grid>
                    )}

                    {paymentMethod === 'bankTransfer' && (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Bank Account Number" variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Bank Name" variant="outlined" />
                            </Grid>
                        </Grid>
                    )}

                    {paymentMethod === 'paypal' && (
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField fullWidth label="PayPal Email" variant="outlined" />
                            </Grid>
                        </Grid>
                    )}
                </Box>

                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button variant="contained" color="primary" size="large">
                        Confirm Payment
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default PaymentPage;
