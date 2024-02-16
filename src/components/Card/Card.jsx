/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DefaultImage from "../../assets/defaultImage.avif";
import { format } from "date-fns";
import "../../App.css";
import { useMode } from "../../contexts/modeContext";

export default function NewsItems({ data }) {
  const { darkMode } = useMode();

  const formattedDate = data.publishedAt
    ? format(new Date(data.publishedAt), "MMM dd, yyyy HH:mm")
    : "Unknown date";
  return (
    <a style={{ textDecoration: "none" }} href={data.url}>
      <Card
        sx={{
          maxWidth: 345,
          mt: 4,
          borderRadius: "25px",
          height: "24rem",
          color: "black",
          backgroundColor: "#fff",
          border: darkMode ? "2px solid" : "2px solid black",
          // borderColor: darkMode ?  "" : "white",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={data.urlToImage ? data.urlToImage : DefaultImage}
            alt="green iguana"
            sx={{ width: "100%", objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="subtitle2" color="black">
              By {data.author} on {formattedDate}
            </Typography>
            <Typography
              sx={{ fontSize: "1.3rem" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {data.title ? data.title : "Latest News"}
            </Typography>
            <Typography sx={{ height: "0.8rem" }} variant="body2" color="black">
              {data.description
                ? data.description.substr(0, 100)
                : "Click to read more"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}
