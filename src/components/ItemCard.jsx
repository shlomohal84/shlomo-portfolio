import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Delete as DeleteIcon, Public } from "@mui/icons-material";
import ghLogo from "../assets/imgs/icons/ghLogo.svg";
import { Tooltip } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard({
  title,
  img,
  siteUrl,
  ghUrl,
  description,
  tools,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{ maxWidth: 345, my: 3, marginRight: [null, null, null, "auto"] }}
    >
      <CardHeader title={title} />
      <a href={siteUrl} target="__blank">
        <CardMedia component="img" height="194" image={img} alt="card-img" />
      </a>
      <CardContent sx={{ height: "90px" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ whiteSpace: "pre-line" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <a href={ghUrl} target="__blank">
          <IconButton /* sx={{ ":hover": { backgroundColor: "#8294c14d" } }} */>
            <Tooltip title="Github source code" placement="top" arrow>
              <img src={ghLogo} alt={ghLogo} />
            </Tooltip>
          </IconButton>
        </a>

        <a href={siteUrl} target="__blank">
          <IconButton
          // sx={{ ":hover": { backgroundColor: "#8294c14d" } }}
          /* aria-label="Github source code" */
          >
            <Tooltip title="Link to project's website" placement="top" arrow>
              <PublicIcon /* sx={{ color: "#3277d5" }} */ />
            </Tooltip>
          </IconButton>
        </a>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {tools && (
            <>
              <Typography variant="h6">Tools used on this project:</Typography>
              <Typography>
                {tools.frontend && `Frontend: ${tools.frontend}`}
              </Typography>
              <Typography>
                {tools.backend && `Backend: ${tools.backend}`}
              </Typography>
              <Typography>{tools.db && `Database: ${tools.db}`}</Typography>
              <Typography>
                {tools.styling && `Styling: ${tools.styling}`}
              </Typography>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
}
