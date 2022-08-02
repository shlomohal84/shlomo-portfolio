import { Container, Box, Typography, Grid } from "@mui/material";
import ItemCard from "../components/ItemCard";
export default function Homepage({ data }) {
  return (
    <Box sx={{ pt: 8 }}>
      <Container
        sx={{
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          // sx={{ fontSize: ["1em", "3em", "4em"] }}
        >
          Portfolio - Shlomo Halperin
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="baseline"
          // sx={{ flexWrap: ["wrap", "wrap", "wrap", "nowrap"] }}
        >
          {data.map(item => {
            return <ItemCard key={item.id} {...item} />;
          })}
        </Grid>
      </Container>
    </Box>
  );
}
