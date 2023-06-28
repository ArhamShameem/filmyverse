import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Appstate } from "../App";

const Header = () => {
const useAppstate=useContext(Appstate);

  return (
    <div
      className=" header text-3xl z-10 bg-black sticky top-0  text-red-500 flex justify-between items-center
     font-bold p-3 border-b-2 border-gray"
    >
      <span>
        {" "}
     <Link to={"/"}>   Filmy<span className="text-white">verse</span></Link>
      </span>
    {useAppstate.login ? 
    
    <Link to={'/AddMovie'}> <h1
        className="text-lg cursor-pointer
         flex items-center  "
      >
     <Button className="text-white">
          {" "}
          <AddIcon className="mr-1 " color="secondary" />
         <span className="text-white">Add New</span> 
        </Button>
      </h1></Link> 
      :
    <Link to={'/login'}> <h1
        className="text-lg cursor-pointer
         flex items-center   bg-green-500 "
      >
     <Button className="text-white p-2">
          {" "}
          
         <span className="text-white font-medium capitalize">login</span> 
        </Button>
      </h1></Link> }
    </div>
  );
};

export default Header;
