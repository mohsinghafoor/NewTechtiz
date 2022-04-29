import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Careers from "./Pages/Careers";
import Home from "./Pages/Home";
import Industries from "./Pages/Industries";
import NotFound from "./Pages/NotFound";
import Porfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import MobileDevelopment from "./Pages/Services/MobileDevelopment";
import SQA from "./Pages/Services/SQA";
import UI from "./Pages/Services/UI";
import WebDevelopment from "./Pages/Services/Web Development";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/portfolio" element={<Porfolio />} />
      <Route path="/careers" element={<Careers />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/industries" element={<Industries />} />
      <Route path="/mobileapp" element={<MobileDevelopment />} />
      <Route path="/webapp" element={<WebDevelopment />} />
      <Route path="/sqa" element={<SQA />} />
      <Route path="/ui" element={<UI />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};

export default Routes;
