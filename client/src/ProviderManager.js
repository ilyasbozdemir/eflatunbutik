import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";

function ProviderManager({ addChakra, addRtlProvider, addReduxProvider }) {
    
  //test aşamasında
  const Chakra = React.cloneElement(addChakra);
  const Rtl = React.cloneElement(addRtlProvider);
  const Redux = React.cloneElement(addReduxProvider);
 

  return (
    <BrowserRouter>
      <Chakra>
        <Rtl>
          <Redux>
            <App />
          </Redux>
        </Rtl>
      </Chakra>
    </BrowserRouter>
  );
}

export default ProviderManager;
