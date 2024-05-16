---
sidebar_position: 1
sidebar_label: Polkadot.Js
title: Create an Astar Mutltisig Wallet using Polkadot.Js
---

import Figure from "/src/components/figure"

# Create a Multisig Wallet

This tutorial serves as a guide to create a multisig substrate wallet.

## Add contacts

1. Go to [https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/accounts](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.astar.network#/accounts)
2. Go to Accounts -> Address Book
3. Click `+ Add Contact` and add all the contact addresses that you want to include in the multisig wallet.
4. For example; Bob, Charlie and Dave.

<Figure src={require('/docs/use/Get-Started/Astar-Substrate-wallet/Multisig-Wallet/Polkadot.js/img/12.png').default} width="100%" />

## Create new wallet

1. Go to Accounts -> `+ Multisig`
2. From the available signatories, select the ones that you want to include in the multisig.
3. Add a threshold. A threshold of 2 means a minimum of 2 signatories are required to sign the transactions.
4. Give the multisig wallet a name.
5. Click "Create".

<Figure src={require('/docs/use/Get-Started/Astar-Substrate-wallet/Multisig-Wallet/Polkadot.js/img/13.png').default} width="100%" />

## Test the wallet

1. The multisig wallet is created.
2. To test the multisig wallet, it is recommended to first use Shibuya testnet. You can get SBY faucet from [https://portal.astar.network](https://portal.astar.network) by connecting your own wallet.
3. After getting the SBY faucet, send the SBY tokens to the multisig wallet and then you can start playing around.

