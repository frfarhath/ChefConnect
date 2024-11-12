import React from "react";
import BackgroundImage from "../../assests/background.jpg"; // Replace with your image path
import Button from "@mui/material/Button";

function Hero() {
  return (
    <section
      className="hero relative flex items-center justify-center bg-cover bg-center text-white"
      style={{
        height: "85vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for opacity */}
      <div
        className="absolute inset-0 bg-black opacity-65"
        style={{ zIndex: 1 }}
      ></div>

      {/* Hero Content */}
      <div className="relative text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Welcome to our{" "}
          <span className="text-yellow-500 font-bold">Cuisine Restaurant</span>
        </h1>
        <p className="text-lg sm:text-xl mb-4">
          Get 25% off your first order
        </p>
        <p className="text-md sm:text-lg mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "brown",
            "&:hover": { backgroundColor: "darkbrown" },
          }}
        >
          Explore Recipes
        </Button>
      </div>
    </section>
  );
}

export default Hero;
