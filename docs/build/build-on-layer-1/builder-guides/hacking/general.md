---
sidebar_position: 1
---

import Figure from '/src/components/figure'

# General

<Figure src={require('/docs/build/img/gradient5.jpg').default } width="100%" />

Please read the linked chapter and try to answer questions. If you can't find the answer, go to the [Astar Discord server](https://discord.gg/invite/AstarNetwork) and ask the question in the general channel under the Developer Support category.

## Introduction
### Polkadot Relay [Chapter](/docs/build/build-on-layer-1/introduction/polkadot_relay.md)
* What would be the most valuable features that a Relay Chain provides to all connected parachains?
* Is Kusama a parachain?
* Is Astar a parachain on the Polkadot Relay Chain?
* Does Astar use Substrate pallets as building blocks?
* What is the pallet/module name which enables execution of Wasm smart contracts in a Substrate node?


### Interact with the Node [Chapter](/docs/build/build-on-layer-1/introduction/node_interact.md)
Connect to Astar Network using Polkadot-JS UI,
* How many blocks are produced by Astar Network so far?
* What it the value set for the constant called `blocksPerEra` in the `dappsStaking` pallet?

### Accounts [Chapter](/docs/build/build-on-layer-1/introduction/create_account.md)
* Did you safely store key seed? How many seed words are used to create your key?
* Go to Subscan [Account Format Transfer](https://astar.subscan.io/tools/format_transform) tool and input your account to check what is the prefix number used on Astar and Shiden.
* Can you share your public key?
* Please note that you can use this account on Polkadot, Kusama and all parachains, but the address format will be different depending on the network prefix used. Connect to Polkadot and then to Astar Network on Polkadot-JS UI to observe the addresses change for same account.

### Astar Network Family [Chapter](/docs/build/build-on-layer-1/introduction/astar_family.md)
* Is Shiden a parachain on Kusama Relay Chain?
* Is Shiden a parachain on Astar Relay Chain?
* Is Kusama a parachain on Polkadot?
* Using the native account you created in Accounts chapters, go to [Astar portal](https://portal.astar.network/), connect to Shibuya testnet and claim faucet tokens. You will later need these tokens to pay the gas fee and deploy contracts on Shibuya.
* Where can you sell SBY tokens? What is the value od SBY (Shibuya network token)?
* Can you test cross chain messaging with Zombienet?

## Setup Your Environment
### RPC Endpoints [Chapter](/docs/build/build-on-layer-1/environment/endpoints.md)
* Check RPC address which you will use to connect front-end to your smart contract on Shibuya network.
