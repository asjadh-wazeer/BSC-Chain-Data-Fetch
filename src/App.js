import { useEffect, useState } from "react";
import { readContractValue } from "./ContractReader";
import Contribute from "./contribute/Contribute";

import "./App.css";

function App() {
  const [contractValue, setContractValue] = useState(null);

  async function fetchData() {
    try {
      const value = await readContractValue();
      setContractValue(value);
      console.log("Contract value: ", value);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Contribute />
    </div>
  );
}

export default App;
