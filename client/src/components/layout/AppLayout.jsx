import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authUtils from "../../utils/authUtils";
import Loading from "../common/Loading";
import Sidebar from "../common/Sidebar";
import { setUser } from "../../redux/features/userSlice";
import assets from "../../assests";

const AppLayout = ({theme,mode,setMode}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const user = await authUtils.isAuthenticated();
      if (!user) {
        navigate("/login");
      } else {
        // save user
        dispatch(setUser(user));
        setLoading(false);
      }
    };
    checkAuth();
  }, [navigate]);

  return loading ? (
    <Loading fullHeight />
  ) : (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar mode={mode} setMode={setMode} />
      <Box
        bgcolor={mode === "light" ? assets.color.secondary : assets.color.third}
        // color={"text.primary"}
        sx={{
          flexGrow: 1,
          p: 1,
          width: "max-content",
          height: "100%",
          // backgroundColor:"black"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
