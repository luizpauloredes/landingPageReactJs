import React from 'react';

const Footer = () => {
const date = new Date() 

  return (
    <footer className="bg-dark pt-4 ">
      <div className="container d-flex justify-content-center text-light">
  <p>Copyright 	&copy; Your website - {date.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer;