// import React from "react";
// import logo from "../Images/TaskbudyLogo.png";
// import { CgProfile } from "react-icons/cg";
// import { Navigate, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg ">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="">
//             <img
//               src={logo}
//               className="img-fluid"
//               style={{ height: "50px", backgroundColor: "210, 180, 222" }}
//             ></img>
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2   mb-lg-0">
//               <li className="nav-item ">
//                 <a
//                   className="nav-link active"
//                   aria-current="page"
//                   onClick={() => navigate("/")}
//                   href="#"
//                 >
//                   Home
//                 </a>
//               </li>
//               {/* <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   onClick={() => navigate("/taskers")}
//                   href="#"
//                 >                                            
//                   Taskers
//                 </a>
//               </li> */}
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link active dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Task Directory
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li>
//                     <a href="/services/sofa"   className="dropdown-item" >
//                       Sofa Cleaning
//                     </a>
//                   </li>
//                   <hr className="dropdown-divider" />
//                   <li>
//                     <a className="dropdown-item"  href="/services/cleaning">
//                     Intense cleaning
//                     </a>
//                   </li>
//                   <hr className="dropdown-divider" />
//                   <li>
//                     <a className="dropdown-item"  href="/services/bathroom">
//                     Bathroom Cleaning
//                     </a>
//                   </li>
//                   <hr className="dropdown-divider" />
//                   <li>
//                     <a className="dropdown-item"  href="/services/haircut">
//                     Men Haircutting
//                     </a>
//                   </li>

//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/services/door">
//                     Door Lock Repairing
//                     </a>
//                   </li>
//                   <hr className="dropdown-divider" />
//                   <li>
//                     <a className="dropdown-item" href="/services/ geyser">
//                     Geyser Service
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="nav-link active"
//                   onClick={() => navigate("/CustomerRegister")}
//                   href="#"
//                 >
//                   Login/Register
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search Service"
//                 aria-label="Search"
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;


//search feature 5 pm 28 jan

// import React, { useState } from "react";
// import logo from "../Images/TaskbudyLogo.png";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ onSearch }) => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value); // Call the search function passed from the parent
//   };

//   return (
//     <nav className="navbar navbar-expand-lg ">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <img
//             src={logo}
//             className="img-fluid"
//             alt="Logo"
//             style={{ height: "50px" }}
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a
//                 className="nav-link active"
//                 onClick={() => navigate("/")}
//                 href="#"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link active"
//                 onClick={() => navigate("/CustomerRegister")}
//                 href="#"
//               >
//                 Login/Register
//               </a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search Service"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-success"
//               type="button"
//               onClick={() => onSearch(searchTerm)}
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// 5:20 pm search feature


// import React, { useState } from "react";
// import logo from "../Images/TaskbudyLogo.png";
// import { useNavigate } from "react-router-dom";

// const Navbar = ({ onSearch }) => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     if (onSearch) onSearch(e.target.value); // Call the search function if provided
//   };

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">
//           <img
//             src={logo}
//             className="img-fluid"
//             alt="Logo"
//             style={{ height: "50px" }}
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a
//                 className="nav-link active"
//                 aria-current="page"
//                 onClick={() => navigate("/")}
//                 href="#"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="nav-item dropdown">
//               <a
//                 className="nav-link active dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Task Directory
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a href="/services/sofa" className="dropdown-item">
//                     Sofa Cleaning
//                   </a>
//                 </li>
//                 <hr className="dropdown-divider" />
//                 <li>
//                   <a href="/services/cleaning" className="dropdown-item">
//                     Intense Cleaning
//                   </a>
//                 </li>
//                 <hr className="dropdown-divider" />
//                 <li>
//                   <a href="/services/bathroom" className="dropdown-item">
//                     Bathroom Cleaning
//                   </a>
//                 </li>
//                 <hr className="dropdown-divider" />
//                 <li>
//                   <a href="/services/haircut" className="dropdown-item">
//                     Men Haircutting
//                   </a>
//                 </li>
//                 <hr className="dropdown-divider" />
//                 <li>
//                   <a href="/services/door" className="dropdown-item">
//                     Door Lock Repairing
//                   </a>
//                 </li>
//                 <hr className="dropdown-divider" />
//                 <li>
//                   <a href="/services/geyser" className="dropdown-item">
//                     Geyser Service
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <a
//                 className="nav-link active"
//                 onClick={() => navigate("/CustomerRegister")}
//                 href="#"
//               >
//                 Login/Register
//               </a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               value={searchTerm}
//               onChange={handleSearch}
//               placeholder="Search Tasker"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-success"
//               type="button"
//               onClick={() => onSearch(searchTerm)}
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// 5:25pm placeholder search feature


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/TaskbudyLogo.png";

const Navbar = ({ onSearch, placeholderText }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value); // Call the search function if provided
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            className="img-fluid"
            alt="Logo"
            style={{ height: "50px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => navigate("/")}
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Task Directory
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/services/sofa" className="dropdown-item">
                    Sofa Cleaning
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a href="/services/cleaning" className="dropdown-item">
                    Intense Cleaning
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a href="/services/bathroom" className="dropdown-item">
                    Bathroom Cleaning
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a href="/services/haircut" className="dropdown-item">
                    Men Haircutting
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a href="/services/door" className="dropdown-item">
                    Door Lock Repairing
                  </a>
                </li>
                <hr className="dropdown-divider" />
                <li>
                  <a href="/services/geyser" className="dropdown-item">
                    Geyser Service
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                onClick={() => navigate("/CustomerRegister")}
                href="#"
              >
                Login/Register
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder={placeholderText}  // Use dynamic placeholder
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => onSearch(searchTerm)}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
