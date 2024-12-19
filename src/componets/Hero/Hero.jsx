// import { ArrowForwardIcon } from "@mui/npm /ArrowForward";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css';
import { useTheme } from "@emotion/react";
// import img1 from "src\componets\imgCard\banner-15.jpg";
// import img2 from "src\componets\imgCard\banner-25.jpg";
// import img3 from "../imgCard/banner-15.jpg";

const Hero = () => {
    const theme = useTheme()
    return (
        <Container sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="parent-slider">
                    <img src="src\componets\Hero\banner-15.jpg" alt="" />
                    <Box sx={{ position: "absolute", left: "10%", textAlign: "left" }}>
                        <Typography sx={{ color: "#222" }}
                            variant="h5">
                            LIFESTYLE COLLBCTION

                        </Typography>
                        <Typography sx={{
                            color: "#222",
                            fontWeight: 400,
                            my: 1,
                        }}
                            variant="h3">
                            MEN
                        </Typography>

                        <Stack sx={{ justifyContent: "center", }}
                            direction={"row"}
                            alignItems={"center"}>
                            <Typography color="#333" mr={1} variant="h4">
                                SALE UP TO
                            </Typography>
                            <Typography color="#D23F57" variant="h4">
                                30% OFF
                            </Typography>
                        </Stack>
                        <Typography sx={{
                            color: "#000",
                            fontWeight: 300,
                            my: 1,
                        }}
                            variant="body1">
                            Get Free Shipping on order over $99.00
                        </Typography>
                        <Button
                            sx={{
                                px: 5, py: 1, mt: 2, backgroundColor: "#222",
                                boxShadow: "0px 4px 16 px rgbe(43,52,69,0.1)",
                                color: "#fff",
                                borderRadius: "1px",
                                "&:hover": {
                                    bgcolor: "#151515",
                                    boxShadow: "0px 4px 16 px rgbe(43,52,69,0.1)",
                                }
                            }}
                            variant="contained"
                        >
                            SHOP NOW
                        </Button>

                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="src\componets\Hero\banner-25.jpg" alt="" />
                </SwiperSlide>


            </Swiper>


            <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
                <Box calssName="border" sx={{ position: "relative" }}>
                    <img width={"100%"} src="src\componets\imgCard\banner-17.jpg" />

                    <Stack sx={{
                        position: "absolute", top: "50%",
                        transform: "translateY(-50%)", left: "31px"
                    }}>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#283445",
                                fontSize: "18px",
                            }}
                        >
                            NEW ARRIVALS
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                color: "#283445",
                                lineHeight: "16px",
                                mt: 1,
                            }}
                        >
                            SUMMER
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "#283445",

                            }}
                        >
                            SALE 20% OFF
                        </Typography>
                        <Link sx={{
                            color: "#283445",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            Transition: "0.2s",
                            "&:hover": {
                                color: "#D23F57",
                            },
                        }}
                            href="#"
                            underline="none"
                        >
                            shop now
                           {/* <ArrowForwardIcon sx={{ fontSize: "13px" }} /> */}
                        </Link>

                    </Stack>


                </Box>
                <Box sx={{ position: "relative" }}>
                    <img width={"100%"} src=".\banner-16.jpg" />

                    <Stack sx={{
                        position: "absolute", top: "50%",
                        transform: "translateY(-50%)", left: "31px"
                    }}>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "#283445",
                                fontSize: "18px",
                            }}
                        >
                            GAMING 4K
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                color: "#283445",
                                lineHeight: "16px",
                                mt: 1,
                            }}
                        >
                            DESKTOPS &
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "#283445",

                            }}
                        >
                            LAPTOPS
                        </Typography>
                        <Link sx={{
                            color: "#283445",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            Transition: "0.2s",
                            "&:hover": {
                                color: "#D23F57",
                            },
                        }}
                            href="#"
                            underline="none"
                        >
                            shop now
                            {/* <ArrowForwardIcon sx={{ fontSize: "13px" }} /> */}
                        </Link>

                    </Stack>

                </Box>
            </Box>

        </Container>
    );
}

export default Hero;
