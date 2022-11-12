import React from "react";
import Blue1 from "../Static/ListIcons/Blue1";
import Blue2 from "../Static/ListIcons/Blue2";
import Blue3 from "../Static/ListIcons/Blue3";
import Blue4 from "../Static/ListIcons/Blue4";
import Blue5 from "../Static/ListIcons/Blue5";
import Blue6 from "../Static/ListIcons/Blue6";

import Orange1 from "../Static/ListIcons/Orange1";
import Orange2 from "../Static/ListIcons/Orange2";
import Orange3 from "../Static/ListIcons/Orange3";
import Orange4 from "../Static/ListIcons/Orange4";
import Orange5 from "../Static/ListIcons/Orange5";
import Orange6 from "../Static/ListIcons/Orange6";

let Icon = {
  build: [Blue1, Blue2, Blue3, Blue4, Blue5, Blue6],
  buy: [Orange1, Orange2, Orange3, Orange4, Orange5, Orange6],
};

const ListIcon = ({ index, type = "build" }) => {
  let Component = Icon[type][index] ?? "";
  return (
    <div>
      <Component />
    </div>
  );
};

export default ListIcon;
