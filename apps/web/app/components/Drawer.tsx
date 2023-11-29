import {
  InputLabel,
  Drawer as MuiDrawer,
  Toolbar,
  Select,
  MenuItem,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import Circle from "@uiw/react-color-circle";
import { useAppStoreCtx } from "../context";

const drawerWidth = 320;

const Drawer = () => {
  const {
    brands,
    colors,
    filter,
    onUpdateNameFilter,
    onUpdateBrandFilter,
    onUpdateColorFilter,
  } = useAppStoreCtx();
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
      <InputLabel id="name-product-label">Product Name</InputLabel>
      <TextField
        id="name-product-label"
        value={filter.name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onUpdateNameFilter(event.target.value);
        }}
      />

      <InputLabel id="select-brand-label">Brands</InputLabel>
      <Select
        labelId="select-brand-label"
        id="select-brand-label"
        label="Brands"
        onChange={(e) => onUpdateBrandFilter(e.target.value as number)}
      >
        {brands.map((brand) => (
          <MenuItem value={brand.id}>{brand.name}</MenuItem>
        ))}
      </Select>

      <Box px={2} py={3}>
        {colors.length > 0 && (
          <Circle
            colors={colors.map((color) => color.code)}
            onChange={(a) => {
              let colorObj = colors.find((color) => color.code === a.hex);
              colorObj && onUpdateColorFilter(colorObj.id);
            }}
          />
        )}
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
