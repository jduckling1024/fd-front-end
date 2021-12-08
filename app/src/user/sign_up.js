import { ThemeProvider } from "@emotion/react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ResponsiveDialog from "../common/dialog";
import concept from "../common/color";

const SignUp = (props) => {
  const { visible } = props;
  const [open, isOpen] = useState(visible);
  const [info, setInfo] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
  });

  const join = (info) => {
    console.log(info);
  };

  const cancel = () => {
    isOpen(false);
  };

  const SignUpPage = () => {
    return (
      <ThemeProvider theme={concept}>
        <Container>
          <Box pt={5} pb={5}>
            <Grid container justifyContent="center">
              <Grid item xs={8}>
                <Typography color="secondary" variant="h4">
                  Future Developer
                </Typography>
                <Typography variant="subtitle1">
                  Future Developer에 오신 것을 환영합니다!
                </Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  label="아이디"
                  size="small"
                  margin="normal"
                  onChange={(event) => {
                    setInfo({ ...info, id: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  label="비밀번호"
                  size="small"
                  margin="normal"
                  type="password"
                  onChange={(event) => {
                    setInfo({ ...info, password: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  label="이름"
                  size="small"
                  margin="normal"
                  onChange={(event) => {
                    setInfo({ ...info, name: event.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  label="이메일"
                  size="small"
                  margin="normal"
                  onChange={(event) => {
                    setInfo({ ...info, email: event.target.value });
                  }}
                />
              </Grid>
            </Grid>
            <Box mt={3}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                  <Button variant="contained" onClick={join} fullWidth>
                    가입
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" onClick={cancel} fullWidth>
                    취소
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  };

  return <ResponsiveDialog visible={open} Page={<SignUpPage />} point={"sm"} />;
};

export default SignUp;
