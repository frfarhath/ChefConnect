import React from "react";
import BackgroundImage from "../../assests/background.jpg"; // Replace with your image path
import Button from "@mui/material/Button";

function Hero() {
  return (
    <section
      className="hero relative flex items-center justify-center bg-cover bg-center text-white"
      style={{
        height: "95vh",
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
          Welcome to {" "}
          <span className="text-yellow-500 font-bold">ChefConnect</span>
        </h1>
        <p className="text-lg sm:text-xl mb-4">
        Share, Discover, Savor — Recipes That Connect.
        </p>
        <p className="text-md sm:text-lg mb-6">
        For the hero section, you can use this sentence:

Discover and share delicious recipes from every corner of the world, <br/>
bringing together diverse flavors and culinary traditions to inspire your next meal.
        </p>
        
        <Button
  variant="contained"
  size="large"
  sx={{
    backgroundColor: "brown",
    "&:hover": { backgroundColor: "darkbrown" },
  }}
  onClick={() => window.location.href = "http://localhost:3000/signup"}
>
  Get Started!
</Button>

      </div>
    </section>
  );
}

export default Hero;
