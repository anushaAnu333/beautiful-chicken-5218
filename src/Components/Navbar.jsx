import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'


import styles from "../CSS/Navbar.module.css";
import { ImLocation2 } from "react-icons/im";

import { CgProfile } from "react-icons/cg";
import { BsFillHandbagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const handleshopping = () => {
    navigate("/shopping");
  };
  const handlelogin = () => {
    navigate("/login");
  };
  const handlehome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className={styles.navtop}>
       <img src="https://user-images.githubusercontent.com/97461362/194715141-fb875efe-e33a-44c3-b6b6-b86cb2f2690a.png" alt="" />
      </div>
      {/* ///////////////////////////// */}
      <div >
        <div className={styles.navtit} style={{objectFit:"fill"}}>
          <img
          style={{marginLeft:"39%"}}
            className={styles.title}
            onClick={handlehome}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd1c3a941/images/svg-icons/Logos-main.svg?yocs=o_s_"
            alt="Bath&BodyWorks"
          />
          <div style={{display:"flex",marginLeft:"10%"}}>
          <input
            className={styles.navinput}
            placeholder="Search by Fragrance"
            type="text"
          />
          <CgProfile
            onClick={handlelogin}
            style={{margin: "5px" }}
            size={30}
          />

<Link to="/cart">
<div style={{display:"flex"}}>
<BsFillHandbagFill
              style={{ margin: "5px" }}
              size={30}
            />
            {getdata.length > 0 && <div>{getdata.length}</div>}{" "}
           
            </div>
          </Link>

        
          </div>
         
        </div>
      </div>
      
    

  
      <div style={{justifyContent:"space-between"}}>
        <div className={styles.navlist} style={{justifyContent:"space-between"}}>
          <h1>NEW AND NOW</h1>
          <h1
            
            onClick={handleshopping}
          >
            BODY CARE
          </h1>
          <h1>HAND SOAPS AND SANITIZERS</h1>
          <h1>HOME FRAGRANCE</h1>
          <h1>GIFTS</h1>
          <h1>TOP OFFERS</h1>
          <h1>GET INSPIRED</h1>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
