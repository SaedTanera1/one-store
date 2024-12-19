import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Home/Footer";
import { useTheme } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firbase";
import { toast } from "react-toastify";

export default function Login() {
  // usestate
  const go = useNavigate();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [click, setclick] = React.useState(false);
  const [emailerror, setemailerror] = React.useState("");
  const theme = useTheme();

  const loginfirbase = async (e) => {
    // e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in Successfully!!");
      window.location.href = "./";
      // eslint-disable-next-line no-undef
      toast.success("User Logged in Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log('error');
      console.log(error.massage);
      // eslint-disable-next-line no-undef
        toast.success(error.massage, {
       position: "bottom-center",
       });
    }
  };
  return (
    <>
      <Box sx={{ py: 16.5 }}>
        <Container component="main" maxWidth="xs">
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                gap: "20px",
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
            </Box>

            <Box component="form" noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                error={
                  (click && !email) ||
                  (emailerror === 422 && click) ||
                  (emailerror === 401 && click)
                }
                helperText={
                  click && !email
                    ? "الرجاء كتابة الاميل"
                    : "" || (emailerror === 422 && click)
                      ? "الايميل مكرر"
                      : "" || (emailerror === 401 && click)
                        ? " الاميل الذي ادخلته غير مسجل"
                        : ""
                }
                onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                error={password.length < 8 && click}
                helperText={
                  password.length < 8 && click
                    ? "password must be more then 8 char"
                    : ""
                }
                onChange={(e) => setpassword(e.target.value)}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="info" />}
                  label="Remember me"
                />
              </Box>

              <Button
                onClick={(e) => {
                  loginfirbase();
                  e.preventDefault();
                }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3, mb: 2, bgcolor: theme.palette.mode === "dark" ? "#54545" : "#803735",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Box sx={{ textAlign: "left" }}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Box>
                </Grid>
                <Grid item>
                  <Link to="/Register" variant="body2">
                    Register
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

