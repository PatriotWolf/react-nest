import {
  InputLabel,
  Drawer as MuiDrawer,
  Toolbar,
  Select,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import { Brand, Color } from "../types";
import Circle from "@uiw/react-color-circle";

const drawerWidth = 320;

interface Props {
  brands: Brand[];
  colors: Color[];
}

const Drawer = ({ brands, colors }: Props) => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          px: 2,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Typography my={3} variant="h4">
        Filters
      </Typography>
      <InputLabel id="select-brand-label">Brands</InputLabel>
      <Select
        labelId="select-brand-label"
        id="select-brand-label"
        label="Brands"
      >
        {brands.map((brand) => (
          <MenuItem value={brand.id}>{brand.name}</MenuItem>
        ))}
      </Select>

      <Box px={2} py={3}>
        {colors.length > 0 && (
          <Circle colors={colors.map((color) => color.code)} />
        )}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
