---
title: Smart Contracts
---

# Overview

This section contains all the information required to start building, testing, and deploying Substrate-native or EVM-based smart contracts on Astar's Substrate-based networks. Substrate is a modular blockchain framework using pallets to support granular features, such as execution environments for both Wasm and EVM smart contracts. 

## Wasm (ink!)

Wasm smart contracts are powered by the `pallet-contracts` pallet for Substrate. For information about how to build and deploy ink! and Rust-based smart contracts on the Substrate-native virtual machine, otherwise known as the Wasm VM or **Astar Substrate Native Network**, see the Wasm section.

## EVM

For information about how to build and deploy Solidity-based smart contracts on the Frontier-based `EVM` pallet for Substrate, otherwise known as the **Astar Substrate EVM Network**, see the EVM section.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```