import "./HomeAddCard.css";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LuggageRoundedIcon from "@mui/icons-material/LuggageRounded";
import TravelBackground from '../../assets/images/travelbackground.jpg'

const HomeAddCard = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/mytrips");
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            maxHeight: 700,
            backgroundImage: `url(${TravelBackground})`,
            p: 7,
            m: 1,
            ml: 5,
            mr: 5,
          }}
          className="box-home-card"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              textAlign: "left",
              m: 2,
            }}
          >
            <Typography variant="h6" component="div" sx={{fontWeight: 500}}>
              Хамтдаа аялцгаая!
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
            Дараачийн аялалаа төлөвлөөрэй!
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{ height: 50, width: 220, backgroundColor: "white", mt:2, mb: 2 }}
            onClick={handleOnClick}
          >
            <LuggageRoundedIcon />
            Төлөвлөгөө үүсгэх
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HomeAddCard;
