import React from 'react';
import './Navbar.css'; // Assuming you want to add custom styles

const Navbar = () => {
  return (
    <nav class="navbar navbar-light navbar-expand-md fixed-top">
      <div class="container">
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <i class="navbar-toggler-icon"></i>
        </button>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav mr-auto w-100 clearfix">
            <li className="navbar-item"><a href="#home">Top Stories</a></li>
            <li className="navbar-item"><a href="#about">Local</a></li>
            <li className="navbar-item"><a href="#contact">Climate</a></li>
            <li className="navbar-item"><a href="#home">World</a></li>
            <li className="navbar-item"><a href="#about">Canada</a></li>
            <li className="navbar-item"><a href="#contact">Local</a></li></ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
