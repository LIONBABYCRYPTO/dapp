import React, { useEffect } from 'react';
import { ABI } from './abi';
import Connex from '@vechain/connex';


const contractAddress = "0xa1ee5587E20cE87c4AbdfaFDE08e67750E4A3735";

const App = () => {
  useEffect(() => {
    const connex = new Connex({
      node: 'https://vethor-node-test.vechaindev.com',
      network: 'test'
    });

    let userLoggedIn = false;

    const handleLogin = async () => {
      try {
        const message = {
          purpose: "identification",
          payload: {
            type: "text",
            content: "Sign this certificate to prove your identity",
          },
        };

        const certResponse = await connex.vendor.sign("cert", message).request();

        if (certResponse) {
          userLoggedIn = true;
          const userAddress = certResponse.annex.signer;
          toggleLoginDisplay(userAddress);
        } else {
          alert("Wallet not found or cancelled");
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred during login");
      }
    };

    const toggleLoginDisplay = (userAddress) => {
      // Update UI based on user login
    };

    const loginBtn = document.querySelector('#login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', handleLogin);
    }

    return () => {
      if (loginBtn) {
        loginBtn.removeEventListener('click', handleLogin);
      }
    };
  }, []);

  return (
    <div>
      {/* Your JSX components */}
    </div>
  );
};

export default App;