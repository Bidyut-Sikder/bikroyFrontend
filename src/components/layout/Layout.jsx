import React from "react";

import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="	">
      <Header />

      {props.children}

      <Toaster position="bottom-center" />

      <Footer />
    </div>
  );
};

export default Layout;
