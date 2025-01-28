import React from "react";
import Navbar from "./Navbar";
import sofaclean from "../Images/sofaclean.jpeg";
import bathclean from "../Images/bathclean.webp";
import geyser from "../Images/geyserService.webp";
import haircut from "../Images/1731066070722-1f3637.webp";
import instence from "../Images/intenseclean.webp";
import doorlock from "../Images/doorlock.webp";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-body-secondary ">
      <div className="border-bottom ">
        <Navbar />
      </div>
      <div className="d-flex justify-content-between mt-5  ">
        <h2 className="mx-auto">Home Services At Your DoorStep</h2>
      </div>
      <div>
        <div class="container text-center mt-5 mb-5">
          <div class="row">
            <div class="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={sofaclean} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Sofa Cleaning</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="">
                  <FaRupeeSign /> 599.00
                </div>
              </div>
            </div>
            <div class="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={bathclean} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Bathroom Cleaning</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <div>
                  <FaRupeeSign />
                  500.00
                </div>
              </div>
            </div>
            <div class="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={geyser} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Geyser Service</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <FaRupeeSign />
                  300.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="container text-center mt-5 mb-5">
          <div class="row">
            <div class="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={haircut} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Men Haircut</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <div>
                  <FaRupeeSign />
                  249.00
                </div>
              </div>
            </div>
            <div class="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={instence} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Intense Cleaning</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div>
                  <FaRupeeSign />
                  699.00
                </div>
              </div>
            </div>
            <div class="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={doorlock} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Door Lock Repair</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <FaRupeeSign />
                  199.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-5 mx-0">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
