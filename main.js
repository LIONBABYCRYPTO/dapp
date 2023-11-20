import React, { useEffect } from 'react';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ABI } from './abi';
import Connex from '@vechain/connex';

const contractAddress = "0xa1ee5587E20cE87c4AbdfaFDE08e67750E4A3735";

const App = () => {
  useEffect(() => {
    // Create a Web3Modal instance
    const web3Modal = new Web3Modal({
      network: 'mainnet', // Replace with the desired network
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: 'b5db377df93e226971b25566a54cb7f4', // Replace with your Infura Project ID
          },
        },
        // Other provider options can be added here (e.g., MetaMask, Fortmatic)
      },
    });

    const connectWallet = async () => {
      try {
        const provider = await web3Modal.connect();
        // Use the provider for interacting with the Ethereum blockchain
        // For example: const web3 = new Web3(provider);
        console.log('Connected to wallet:', provider);

        // Add your blockchain interaction logic here using the connected provider
        // For example:
        // const accounts = await web3.eth.getAccounts();
        // console.log('Connected account:', accounts[0]);

        // Initialize Connex or other blockchain-related actions
        const connex = new Connex({
          node: 'https://vethor-node-test.vechaindev.com',
          network: 'test'
        });

        // ... (continue with your existing code)

      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    };

    connectWallet(); // Call connectWallet to initiate the wallet connection

  }, []);

  return (
    <div>
      {/* Your JSX components */}
    </div>
  );
};

export default App;
