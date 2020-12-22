import React from "react";
import HeaderPhoto from "./appbar/HeaderPhoto";
import HomeDisplay from "./HomeDisplay";

export default function HomePage() {
  return (
    <React.Fragment>
      <HeaderPhoto start={"Wanna"} punch={["Shag", "bump hips", "park the car", "touch me bum"]}/>
      <HomeDisplay />
    </React.Fragment>
  );
}
