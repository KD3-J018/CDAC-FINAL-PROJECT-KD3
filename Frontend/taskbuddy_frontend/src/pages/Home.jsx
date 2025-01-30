// import React from "react";
// import Navbar from "./Navbar";
// import sofaclean from "../Images/sofaclean.jpeg";
// import bathclean from "../Images/bathclean.webp";
// import geyser from "../Images/geyserService.webp";
// import haircut from "../Images/1731066070722-1f3637.webp";
// import instence from "../Images/intenseclean.webp";
// import doorlock from "../Images/doorlock.webp";
// import { FaStar } from "react-icons/fa";
// import { FaStarHalf } from "react-icons/fa";
// import { FaRupeeSign } from "react-icons/fa";
// import Footer from "./Footer";

// const Home = () => {
//   return (
//     <div className="bg-body-secondary ">
//       <div className="border-bottom ">
//         <Navbar />
//       </div>
//       <div className="d-flex justify-content-between mt-5  ">
//         <h2 className="mx-auto">Home Services At Your DoorStep</h2>
//       </div>
//       <div>
//         <div class="container text-center mt-5 mb-5">
//           <div class="row">
//             <div class="col">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={sofaclean} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <p className="card-text">Sofa Cleaning</p>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//                 <div className="">
//                   <FaRupeeSign /> 599.00
//                 </div>
//               </div>
//             </div>
//             <div class="col">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={bathclean} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <p className="card-text">Bathroom Cleaning</p>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStarHalf />
//                 </div>
//                 <div>
//                   <FaRupeeSign />
//                   500.00
//                 </div>
//               </div>
//             </div>
//             <div class="col">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={geyser} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <p className="card-text">Geyser Service</p>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//                 <div>
//                   <FaRupeeSign />
//                   300.00
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div class="container text-center mt-5 mb-5">
//           <div class="row">
//             <div class="col">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={haircut} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <p className="card-text">Men Haircut</p>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStarHalf />
//                 </div>
//                 <div>
//                   <FaRupeeSign />
//                   249.00
//                 </div>
//               </div>
//             </div>
//             <div class="col">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={instence} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <p className="card-text">Intense Cleaning</p>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>

//                 <div>
//                   <FaRupeeSign />
//                   699.00
//                 </div>
//               </div>
//             </div>
//             <div class="col">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={doorlock} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                   <p className="card-text">Door Lock Repair</p>
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                 </div>
//                 <div>
//                   <FaRupeeSign />
//                   199.00
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex justify-content-between mt-5 mx-0">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
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
import { CgProfile } from "react-icons/cg";
import TaskerProfile from "./TaskerProfile";
import TaskerList from "./TaskerList";
import TaskerRegistration from "./TaskerRegistration";
import CustomerRegistration from "./CustomerRegistration";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    navigate(`/taskers/${service}`); // Navigate to the TaskerList page with the service
  };

  return (
    <div className="mt-3">
      <div className="border-bottom">
        <Navbar />
      </div>
      <div className="d-flex justify-content-between mt-5">
        <h2 className="mx-auto">Home Services At Your DoorStep</h2>
      </div>
      <div>
        <div className="container text-center mt-5 mb-5">
          <div className="row">
            <div className="col" onClick={() => handleServiceClick("sofa")}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={sofaclean}
                  className="card-img-top"
                  alt="Sofa Cleaning"
                />
                <div className="card-body">
                  <p className="card-text">Sofa Cleaning</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <FaRupeeSign /> 599.00
                </div>
              </div>
            </div>
            <div className="col" onClick={() => handleServiceClick("bathroom")}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={bathclean}
                  className="card-img-top"
                  alt="Bathroom Cleaning"
                />
                <div className="card-body">
                  <p className="card-text">Bathroom Cleaning</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <div>
                  <FaRupeeSign /> 500.00
                </div>
              </div>
            </div>
            <div className="col" onClick={() => handleServiceClick("geyser")}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={geyser}
                  className="card-img-top"
                  alt="Geyser Service"
                />
                <div className="card-body">
                  <p className="card-text">Geyser Service</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <FaRupeeSign /> 300.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container text-center mt-5 mb-5">
          <div className="row">
            <div className="col" onClick={() => handleServiceClick("haircut")}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={haircut} className="card-img-top" alt="Men Haircut" />
                <div className="card-body">
                  <p className="card-text">Men Haircut</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <div>
                  <FaRupeeSign /> 249.00
                </div>
              </div>
            </div>
            <div className="col" onClick={() => handleServiceClick("cleaning")}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={instence}
                  className="card-img-top"
                  alt="Intense Cleaning"
                />
                <div className="card-body">
                  <p className="card-text">Intense Cleaning</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <FaRupeeSign /> 699.00
                </div>
              </div>
            </div>
            <div className="col" onClick={() => handleServiceClick("doorlock")}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={doorlock}
                  className="card-img-top"
                  alt="Door Lock Repair"
                />
                <div className="card-body">
                  <p className="card-text">Door Lock Repair</p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div>
                  <FaRupeeSign /> 199.00
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
