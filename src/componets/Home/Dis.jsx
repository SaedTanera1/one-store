import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


const FeaturesSection = () => {
    const features = [
        {
            icon: <LocalShippingIcon fontSize="large"  color="#007BFF"/>,
 
            title: 'FREE AND FAST DELIVERY',
            description: 'Free delivery for all orders over $140'
        },
        {
            icon: <HeadsetMicIcon fontSize="large"  color="#28A745" />, 
            

            title: '24/7 CUSTOMER SERVICE',
            description: 'Friendly 24/7 customer support'
        },
        {
            icon: <VerifiedUserIcon fontSize="large"  color="#DC3545" />,
 
            title: 'MONEY BACK GUARANTEE',
            description: 'We return money within 30 days'
        }
    ];

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={4} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={4} key={index} textAlign="center">
                        <Box>
                            {feature.icon}
                            <Typography variant="h6" sx={{ mt: 1, fontWeight: 'bold' }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {feature.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default FeaturesSection;








// import React from 'react';
// import { FaTruck, FaHeadset, FaShieldAlt } from 'react-icons/fa';

// const FeaturesSection = () => {
//   const features = [
//     {
//       id: 1,
//       icon: <FaTruck size={40} color="#007BFF" />, // لون أزرق
//       title: 'FREE AND FAST DELIVERY',
//       description: 'Free delivery for all orders over $140'
//     },
//     {
//       id: 2,
//       icon: <FaHeadset size={40} color="#28A745" />, // لون أخضر
//       title: '24/7 CUSTOMER SERVICE',
//       description: 'Friendly 24/7 customer support'
//     },
//     {
//       id: 3,
//       icon: <FaShieldAlt size={40} color="#DC3545" />, // لون أحمر
//       title: 'MONEY BACK GUARANTEE',
//       description: 'We return money within 30 days'
//     }
//   ];

//   return (
//     <div style={{ padding: '50px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #ffffff 50%, #007BFF 50%)' }}>
//       <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
//         {features.map(feature => (
//           <div key={feature.id} style={{ maxWidth: '300px', textAlign: 'center' }}>
//             <div style={{
//               width: '80px',
//               height: '80px',
//               borderRadius: '50%',
//               backgroundColor: '#f1f1f1',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               margin: '0 auto 15px'
//             }}>
//               {feature.icon}
//             </div>
//             <h3 style={{ marginBottom: '10px', color: '#333' }}>{feature.title}</h3>
//             <p style={{ color: '#666' }}>{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;
