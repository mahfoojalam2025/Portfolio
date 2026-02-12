import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-center py-6 border-t border-gray-800">
      <p className="text-sm text-gray-500">
        © {currentYear} Mahfooj Alam. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;