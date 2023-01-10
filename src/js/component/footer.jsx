import React from "react";

const Footer = () =>{
    return(
        <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
            <p className="text-center">Copyright &copy; {new Date().getFullYear()} My Website</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer