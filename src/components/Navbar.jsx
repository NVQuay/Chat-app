import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama chat</span>
      <div className="user">
        <img
          src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-9/123361421_368687354450820_1095524508741991004_n.jpg?stp=c0.119.1080.1080a_dst-jpg_s851x315&_nc_cat=106&ccb=1-7&_nc_sid=da31f3&_nc_ohc=Y4nXhPFYFsAAX9l1Psv&tn=GsX8Cfv5rXzNrNxI&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT9tgCKBqYF9NKhmBqLTevDsR_Pr-nbUse3L5rEibNoYqQ&oe=634D4FA6"
          alt=""
        />
        <span>Nguyen</span>
        <button> logout</button>
      </div>
    </div>
  );
};

export default Navbar;
