import React from "react";
import App_Navbar from "../component/Navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import FingerprintOutlinedIcon from "@mui/icons-material/FingerprintOutlined";
import { CardData } from "../data/Data";
const Home = () => {
  return (
    <div>
      <div className="home_container container-fluid">
        <div className="header" style={{ textAlign: "center", height: "45vh" }}>
          <div style={{ paddingTop: "6rem" }}>
            <h5
              style={{ fontSize: "2.8rem" }}
              className="font-weight d-flex   flex-column fw-bolder text-capitalize"
            >
              One Page bootstrap <span> website template </span>
            </h5>

            <p className="body" style={{ fontSize: "1.5rem" }}>
              we are team of talanted designers
            </p>

            <button
              style={{
                backgroundColor: "#206BA6",
                color: "white",
                padding: "10px 30px",
                borderRadius: "10px",
                border: "none",
                fontSize: "1.1rem",
              }}
            >
              {" "}
              Get Started
            </button>
          </div>
        </div>

        <div
          className="body mt-5 container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "5rem",
            margin: "auto",
            textAlign: "center",
          }}
        >
          {CardData.map((data) => {
            console.log(data.icon);
            return (
              <Card style={{ width: "18rem" }}>
                <div className="logo">
                  {/* <LayersOutlinedIcon /> */}
                  <img src={data.icon} alt="" />
                </div>
                <Card.Body>
                  <Card.Title>{data.Title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            );
            // <Card style={{ width: "18rem" }}>
            //   <div className="logo">
            //     <LayersOutlinedIcon />
            //   </div>
            //   <Card.Body>
            //     <Card.Title>{data.Title}</Card.Title>
            //     <Card.Text>
            //       Some quick example text to build on the card title and make up
            //       the bulk of the card's content.
            //     </Card.Text>
            //   </Card.Body>
            // </Card>;
          })}

          {/* <Card style={{ width: "18rem" }}>
            <div className="logo">
              <PaletteOutlinedIcon />
            </div>{" "}
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <div className="logo">
              <FingerprintOutlinedIcon />
            </div>{" "}
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
