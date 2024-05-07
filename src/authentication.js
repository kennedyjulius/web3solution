import React from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnectProvider } from '@celo/wallet-provider';

const SignInWithCelo = () => {
  const { activate } = useWeb3React();

  const handleSignIn = async () => {
    try {
      const walletProvider = new WalletConnectProvider({
        rpc: {
          42220: 'https://forno.celo.org' // Mainnet RPC endpoint
        }
      });
      await activate(walletProvider);
    } catch (error) {
      console.error('Error connecting to Celo Wallet:', error);
    }
  };

  return (
    <button onClick={handleSignIn}>Sign In with Celo</button>
  );
};

export default SignInWithCelo;
