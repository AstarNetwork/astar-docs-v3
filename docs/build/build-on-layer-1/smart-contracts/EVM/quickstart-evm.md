---
title: Quickstart Guide
---

import Figure from '/src/components/figure'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Figure src={require('/docs/build/img/evm.png').default } width="100%" />

# Quickstart Guide for Astar Substrate EVM 

Everything required to start deploying dApps on Astar Substrate EVM (hereafter referred to as **Astar EVM**), all in one place.

## Connecting to Astar EVM Networks

:::info
Although the free endpoints below are intended for end users, they can still be used to interact with dApps or deploy/call smart contracts. It should be noted however that they <b>rate-limit API calls</b>, so are not suitable for high demand applications, for example: dApp UIs that scrape account histories.
:::

:::tip
To meet the demands of production dApps developers should run their own [archive node](/docs/build/build-on-layer-1/nodes/archive-node/index.md) **or** obtain an API key from one of our [infrastructure partners](/docs/build/build-on-layer-1/integrations/node-providers/index.md).
:::

<Tabs>
<TabItem value="astar" label="Astar Network" default>

|   | Public endpoint Astar |
| --- | --- |
| Network | Astar |
| Parent chain | Polkadot |
| ParachainID | 2006 |
| HTTPS | Astar Team: https://evm.astar.network |
|         | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|         | BlastAPI: https://astar.public.blastapi.io |
|         | Dwellir: https://astar-rpc.dwellir.com |
|         | OnFinality: https://astar.api.onfinality.io/public |
|         | Pinknode: Get started [here](https://www.pinknode.io/) |
|         | Automata 1RPC: https://1rpc.io/astr, get started [here](https://www.1rpc.io) |
| Websocket | Astar Team: wss://rpc.astar.network |
|           | Alchemy: Get started [here](https://www.alchemy.com/astar) |
|           | BlastAPI: wss://astar.public.blastapi.io |
|           | Dwellir: wss://astar-rpc.dwellir.com |
|           | OnFinality: wss://astar.api.onfinality.io/public-ws |
|           | Pinknode: Get started [here](https://www.pinknode.io/) |
|           | Automata 1RPC: wss://1rpc.io/astr, get started [here](https://www.1rpc.io) |
| chainID | 592 |
| Symbol | ASTR |

</TabItem>

<TabItem value="shiden" label="Shiden Network" default>

|   | Public endpoint Shiden |
| --- | --- |
| Network | Shiden |
| Parent chain | Kusama |
| ParachainID | 2007 |
| HTTPS | Astar Team: https://evm.shiden.astar.network |
|         | BlastAPI: https://shiden.public.blastapi.io |
|         | Dwellir: https://shiden-rpc.dwellir.com |
|         | OnFinality: https://shiden.api.onfinality.io/public |
|         | Pinknode: Get started [here](https://www.pinknode.io/) |
| Websocket |  Astar Team: wss://rpc.shiden.astar.network |
|           | BlastAPI: wss://shiden.public.blastapi.io |
|           | Dwellir: wss://shiden-rpc.dwellir.com |
|           | OnFinality: wss://shiden.api.onfinality.io/public-ws |
|           | Pinknode: Get started [here](https://www.pinknode.io/) |
| chainID | 336 |
| Symbol | SDN |

</TabItem>

<TabItem value="shibuya" label="Shibuya Network" default>

|   | Public endpoint Shibuya |
| --- | --- |
| Network | Shibuya (parachain testnet) |
| Parent chain | Tokyo relay chain (hosted by Astar Team) |
| ParachainID | 1000 |
| HTTPS | Astar Team: https://evm.shibuya.astar.network (only EVM/Ethereum RPC available) |
|         | BlastAPI: https://shibuya.public.blastapi.io |
|         | Dwellir: https://shibuya-rpc.dwellir.com |
| Websocket | Astar Team: wss://rpc.shibuya.astar.network |
|           | BlastAPI: wss://shibuya.public.blastapi.io |
|           | Dwellir: wss://shibuya-rpc.dwellir.com |
| chainID | 81 |
| Symbol | SBY |

</TabItem>

</Tabs>

## Obtaining tokens from the faucet

[INSERT FAUCET INSTRUCTIONS]

## Bridging Assets

To move assets from Astar Native to Astar L1 EVM use [Astar Network portal](https://portal.astar.network/).

To move assets from Ethereum to Astar L1 EVM use [cBridge](https://cbridge.celer.network/).

To get testnet tokens (SBY) use faucet on [Astar Network portal](https://portal.astar.network/).

## Deploying Smart Contracts

The development experience on Astar EVM is seamless and nearly identical to the Ethereum Virtual Machine. Developers can use existing code and tools on Astar EVM and users benefit from high transaction throughput and low fees. Read more about deploying smart contracts on Astar EVM [here.](/docs/build/build-on-layer-1/smart-contracts/EVM/index.md)

## Metamask quick setup for Shibuya testnet
To add Astar and other networks to MetaMask, use the button at the bottom of the respective block explorer:

    - [Astar](https://astar.blockscout.com/)
    - [Shiden](https://shiden.blockscout.com/)
    - [Shibuya](https://shibuya.blockscout.com/)

## Astar EVM support for developers

Developers requiring support can join the [Astar Discord server](https://discord.gg/astarnetwork). 

<details>
<summary>Astar Discord server</summary>

1. Join the **Astar Discord** server [here](https://discord.gg/astarnetwork).
2. Accept the invite.
3. Take the **Developer** role under **#roles**.
4. Navigate to the **Builder/#-astar-polkadot** channel.

</details>