---
sidebar_position: 2
sidebar_label: Create a Proxy Account
title: Create a Proxy Account with Polkadot.Js
---

import Figure from '/src/components/figure'

In this tutorial, you'll learn how to manipulate proxy accounts using the [Polkadot\{.js\}](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shiden.astar.network#/extrinsics) application.

## How to create a proxy account

1. Go to [Polkadot\{.js\}](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shiden.astar.network#/extrinsics) application and navigate to the `Developer` tab on the Polkadot\{.js\} dashboard;

2. Within the **Developer tab**, find the `Extrinsics` and select it;

3. Choose the primary account for which you want to create a proxy from the list. *We will be using **ALICE** as primary account in this tutorial*;

4. From the `submit the following extrinsic` dropdown, select **proxy**;  

5. Choose the **addProxy** extrinsic;  

6. Select the **delegate** account for the proxy;

7. In the proxyType drop-down list, you can choose **Any** to give full access to the proxy account, or select a specific `palette`, for example **Balances**, **dAppStaking**, etc. 

8. ***(Optional)*** Add a time delay: If desired, you may have the option to add a time delay to the transaction. This adds an extra layer of security by requiring the primary account to review the pending transaction before it is executed. Specify the desired number of blocks for the time delay;

9. Once you have filled in all the necessary details, find the button to submit the transaction. Click on it to initiate the process.

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_proxy_1.png').default} width="100%" />

10. You will then be prompted to authorize and sign the transaction. Go ahead and click ``Sign and Submit`` to create the proxy relationship;

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_proxy_2.png').default} width="100%" />

Once the transaction has been successfully submitted, you will receive notifications confirming the transaction.

You can also find the event `proxy.ProxyAdded` in recently emitted events inside  **Network** > **Explorer** tab.

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_proxy_3.png').default} width="100%" />

## How to verify your proxy account
---
There are many ways of verifying if your proxy was added or not. Easiest way to do so is using the **Accounts** page.

1. Navigate to the Accounts page by clicking on **Accounts** tab and then selecting **Accounts**.

2. Here find you **Primary Account** and click on the 3 dots as seen in the provided picture.


<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_proxy_4.png').default} width="100%" />

3. Select **Manage proxies** option.


Here you can see the list of all proxies that you account has. For this tutorial, it is only **Balances** proxy that we added in the above section.

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_proxy_5.png').default} width="100%" />

:::tip

You can also remove the proxy by clicking on the (X) icon next to the proxy account (in our case **BOB**). After clicking (X) button, the proxy will diappear from the list, Click on `Submit`.

Once the transaction has successfully been submitted, you can review your current proxies or if you removed all proxies you will notice the proxy icon is no longer being displayed next to the primary account.

:::

## How to execture a proxy transaction

To execute a proxy transaction, go back to the [Extrinsic page](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shiden.astar.network#/extrinsics) and do the following:

## Submitting a Proxy Transaction

To submit a proxy transaction, follow these steps:

1. Choose the proxy account to submit the transaction from using the `Select Account` dropdown;

2. From the `Submit the following extrinsic` menu, select **proxy**;

3. Select the **proxy** extrinsic;

4. From the **real** dropdown, select **Id** and then select the **Primary Account** (ALICE in our case);

5. Select the **balances** call;

6. Choose the **transfer** extrinsic;

7. In the `dest` field, enter the address where you want to send the funds;

8. In the `value` field, enter the amount of funds to send;

9. Once you have entered all the necessary details, click on `Submit Transaction` to initiate the transaction.

<Figure src={require('/docs/use/get-started/astar-substrate-wallet/wallet/polkadot.js/img/polkadot_js_proxy_6.png').default} width="100%" />

Congratulations! You've completed the entire process successfully.  
You have created a proxy account, reviewed all the proxy accounts linked to your primary account, performed a proxy transaction, and even removed a proxy account. Well done!