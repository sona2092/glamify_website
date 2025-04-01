import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lehngacholiPage2 } from "../Data/Saree/lenghaCholiPage2";
import { Button } from "@mui/material";

const Homepage = () => {
  const { auth } = useSelector((store) => store);
  const [showPopup, setShowPopup] = useState(!auth.user); // Show popup if not logged in

  return (
    <div className="">
      {/* Popup Alert for Unauthenticated Users */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96 px-10">
          <h2 className="text-lg font-semibold text-gray-800">
              Please login to explore.
            </h2>
            <div className="mt-4 flex justify-center">
              <Button
                onClick={() => setShowPopup(false)}
                className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeProductSection data={lehngacholiPage2} section={"Lehenga Choli"} />
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gowns"} />
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
      </div>
    </div>
  );
};

export default Homepage;
