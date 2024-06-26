---
sidebar_position: 2
---

import Figure from '/src/components/figure'

# Hack Wasm Smart Contracts

<Figure src={require('/docs/build/img/gradient4.jpg').default } width="100%" />

Read the linked chapters or use tutorials to be able to answer following questions:

## Setup ink! Environment [Chapter](/docs/build/build-on-layer-1/environment/ink_environment.md)

* Which cargo version are you using?
* Run `rustup show` command.
* Run `cargo contract -V`. Is your cargo contract version higher than 1.5.0?
* Which rust toolchain do you need to use to be able to compile ink! smart contrats? (nightly or stable)? How do you manage this choice?

## Test Tokens [Chapter](/docs/build/build-on-layer-1/environment/faucet.md)
* Did you claim Shibuya tokens? How many SBY tokens did the faucet provide to you?
* Can you unit test ink! smart contract without running test node like Swanky-node?

## Run [Swanky](https://github.com/AstarNetwork/swanky-node) Node
* Start your Swanky node and connect [polkadot-JS UI](https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/explorer) to it. Please note that for Swanky node there will be no node production if there is no interaction with it. 

:::note

Please note that the current version of polkadot-JS is broken for contracts because of [lack of support for Weights V2](https://github.com/polkadot-js/apps/issues/8364). Until that gets resolved please use our [custom built polkadot-JS UI](https://polkadotjs-apps.web.app/#/explorer) or [Contracts-UI](https://contracts-ui.substrate.io/).

:::

## From Zero to ink Hero [Tutorials](/docs/build/builder-guides/layer-1/wasm/flipper-contract/flipper.md)
Depending on your confidence, use any of these tutorial. If you are just starting, the Flipper contract is the way to go.
* Your task is to deploy the contract from the tutorial to Shibuya Network.
  * After you build contract notice where the `.contract` and `metadata.json` are created.
  * Deploy Contract using [Contracts-UI](https://contracts-ui.substrate.io/).
  * What is the contract address?
  * Do you have any method that requires payment to be executed?
  * Use Polkadot-JS UI to reload same contract you just deployed using Contracts-UI.


What is [next](/docs/build/builder-guides/layer-1/evm/hacking/next.md)? 
