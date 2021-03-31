import { useEffect, useState } from "react";

import { FontSize } from "@styles";
import { getMockData } from "@services";
import logo from "@icons/logo.svg";

const HelloWorld = () => {
  const [data, setData] = useState([]);
  
  console.log(data);

  useEffect(() => {
    getMockData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <p style={{ fontSize: FontSize.large }}>Hello World</p>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default HelloWorld;
