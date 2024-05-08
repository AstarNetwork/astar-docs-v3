# Node Providers
 
The free endpoints mentioned in the [Build Environment section](/docs/build/build-on-layer-1/environment/endpoints.md) are rate limited and designed for end users to be able to interact with dApps, or deploy/call smart contracts. They are not suitable for usage by dApp UIs that scrape blockchain data continuously, or indexers (like the Graph).


If you are an active developer consider creating your own endpoint. It is mandatory to do so for production deployments. Refer to how run an [archive node](/docs/build/build-on-layer-1/nodes/archive-node/index.md) for more information, or obtain an API key from one of our infrastructure providers listed below:


```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
