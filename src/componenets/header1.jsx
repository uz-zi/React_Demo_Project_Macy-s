import React from 'react';
import Nav1 from "./nav1.jsx";
import Nav2 from "./nav2.jsx";
import Headmd from "../componets2/smaller_secreen.jsx";

function Head1() {
  return (
    <>
      <header className="hidden lg:block">
        <Nav1 />
        <Nav2 />
      </header>
      <header className="lg:hidden">
        <Headmd />
      </header>
    </>
  );
}

export default Head1;
