import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useTheme } from "@mui/material";
import Footer from "./Home/Footer";
import { auth, db } from "../api/firbase";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
  // usestate
  const [name, setname] = React.useState("");
  const [hotmil, sethotmil] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [passwordR, setpasswordR] = React.useState("");
  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");

  const go = useNavigate();
  const theme = useTheme();

  const submitfirbase = async (e) => {
    createUserWithEmailAndPassword(auth, hotmil, password)
      .then(async (userCredential) => {
        // Signed up
        const user = auth.createUser;
        console.log(user);
        window.location.href = "/Login";


        if (user) {
          await setDoc(doc(db, "User", user.uid), {
            email: user.email,
            name: user.name,
          });
        }
        console.log("User Registered Successfully!!");
        //  toast.success("User Registered Successfully!!", {
        //    position: "top-center",
        //   });

        // ...
      })
      .catch((error) => {
        console.log(error.massage);
          // toast.success(error.massage(), {
          //    position: "bottom-center",
          // });

        // ..
      });
  };
  return (
    <>
      <Box sx={{ py: 4.6 }}>
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
              }}
            ></Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="name "
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                error={click && name.length < 8}
                helperText={
                  name.length < 3 && click
                    ? "name must be more then 8 char"
                    : ""
                }
                onChange={(e) => setname(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={click && !hotmil}
                value={hotmil}
                helperText={
                  emailerror === 422 && click ? "   الايميل مكرر" : ""
                }
                onChange={(e) => sethotmil(e.target.value)}
              />

              <TextField
                margin="normal"
                fullWidth
                name="password_confirmation"
                label="password_confirmation"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                error={click && !password}
                helperText={
                  !password && click
                    ? "password must be more then 8 char "
                    : "do not share password with anyone"
                }
                onChange={(e) => setpassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="passwordR"
                label="Repeat password"
                type="password"
                id="passwordR"
                autoComplete="current-passwordR"
                value={passwordR}
                error={
                  (click && password !== passwordR) || (click && !password)
                }
                helperText={
                  password !== passwordR && click ? "كلمه السر غير متطابقة" : ""
                }
                onChange={(e) => setpasswordR(e.target.value)}
              />
              {/* <Box sx={{ textAlign: "left" }}>
                {" "}
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Box> */}

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  submitfirbase();
                }}
                type="submit"
                fullWidth
                variant="contained"
                
              >
                Register
              </Button>
              {/* <Grid container>
                <Grid item xs>
                  <Box sx={{ textAlign: "left" }}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Box>
                </Grid>
                <Grid item>
                  <Link to="/Login" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>sx={{ mt: 3, mb: 2 , bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
                }} */}
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}