import { Input, Drawer as MuiDrawer, Toolbar } from "@mui/material";

const drawerWidth = 240;
const Drawer = () => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Input />
    </MuiDrawer>
  );
};

export default Drawer;
