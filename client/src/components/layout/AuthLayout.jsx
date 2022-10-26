import { Container, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";
import assets from "../../assests";

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        setLoading(false);
      } else {
        navigate("/");
      }
    };
    checkAuth();
  }, [navigate]);

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Container component="main" maxWidth="xs" sx={{marginTop: 8,display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
      <Typography variant="h4" component="h4" sx={{marginTop: 2, fontWeight:"bold"}}>
          Saharil - Kanban - App
        </Typography>
      <Box
        bgcolor={"background.default"}
        color={"text.primary"}
        sx={{
          marginTop: 4,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <img src={assets.images.logoDark} style={{ width: '100px' }} alt='app logo' /> */}
        {/* <Typography variant="h2" component="h2">
          Saharil - Kanban - Task -Management
        </Typography> */}
        <Outlet />
      </Box>
    </Container>
  );
};

export default AuthLayout;
