import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ABI } from './abi';

const contractAddress = "0xa1ee5587E20cE87c4AbdfaFDE08e67750E4A3735";

const App = () => {
  useEffect(() => {
    const connex = new Connex({
      node: 'https://vethor-node-test.vechaindev.com',
      network: 'test'
    });

    let userLoggedIn = false;

    const handleLogin = async () => {
      // ... handleLogin logic
    };

    const toggleLoginDisplay = (userAddress) => {
      // ... toggleLoginDisplay logic
    };

    const handleStore = async () => {
      // ... handleStore logic
    };

    const handleRead = async () => {
      // ... handleRead logic
    };

    const loginBtn = document.querySelector('#login-btn');
    const storeBtn = document.querySelector('#store-btn');
    const readBtn = document.querySelector('#read-btn');

    if (loginBtn && storeBtn && readBtn) {
      loginBtn.addEventListener('click', handleLogin);
      storeBtn.addEventListener('click', handleStore);
      readBtn.addEventListener('click', handleRead);
    }

    return () => {
      if (loginBtn && storeBtn && readBtn) {
        loginBtn.removeEventListener('click', handleLogin);
        storeBtn.removeEventListener('click', handleStore);
        readBtn.removeEventListener('click', handleRead);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <BrowserRouter basename="/dapp">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Other routes */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;