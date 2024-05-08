import Figure from '/src/components/figure'

# Introduction

<Figure src={require('/docs/build/img/introduction.png').default } width="100%" />

To make use of this documentation effectively readers should possess a general understanding of programming basics. The programming languages used throughout are mainly Rust, Solidity, and JavaScript, for which previous knowledge is not necessary, but highly beneficial. For a greater depth of understanding of the material contained within these sections, we recommend reviewing supplemental material covering these programming languages in order to improve the overall learning experience and your ability to understand and use the practical code examples provided. 

### Do I need blockchain knowledge to follow this documentation?
Blockchain knowledge is useful but not required. Everything you need to know about how to start building is contained within these sections.

### I'm a Polkadot builder, do I need this?
If you are already a builder on Polkadot/Kusama ecosystem you can most likely skip the Introduction chapter and jump right into reading about our Networks. [INSERT LINKS]

### Do I need to be a developer to understand Introduction chapter?
To use this introduction chapter you do not need any programming skills, and it will be useful later when you step into more advanced topics. 


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```