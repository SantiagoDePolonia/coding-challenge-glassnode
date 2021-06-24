Steps to run:
1. `yarn install`
2. `cp ./src/constants/glassnode_key.js.template ./src/constants/glassnode_key.js`
3. Provide the API KEY into ./src/constants/glassnode_key.js file from studio.glassnode.com site.


TODO
===
- provide linter rules
- unit tests for reducers
- unit tests for all components
- create specific reducer for BTC prices in USD and reshape store shape for 
  {
    difficulty: {...},
    hashRate: {...},
    prices: {...}
  }
- API calls should be done only one. When data exist in the store the call should be skipped
  - it would remove the bag
  Steps to reproduce:
  - go to /difficulty 
  - next go to /hash-rate
  - go to /difficulty
  - you will see the chart for a while and the loading and after a while the chart again
- resolve code duplication dilemma


Notice about code duplicates:
===

There are some code duplications between

- src/components/pages/Difficulty.js and src/components/pages/HashRate.js
- src/features/hashRate and src/features/difficulty

On the one hand, the code can be shorter when we remove them. But on the other hand, the pages may change from different reasons (SRP). What is the business need?


Links
===

- [Challenge description](./README_TASK.md)
- [Default README Create React App](./README_CRA.md)
