import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mainfooter">
      <p className="footer">Copyright ⓒ {year} SAURAV RAJ</p>
    </footer>
  );
}

export default Footer;
