# ✴️Airdrop token

Deploy smart contract token and aidrop, send tokens to many different addresses

## 🔧Installation

Install project Aidrop with yarn

```bash
  cd Aidrop
  yarn install
```

## ✔️Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PRIVATE_KEY`

`ADDRESS_1`

`ADDRESS_2`

Private key of address account owner will deploy smart contract
Address 1 and 2 will test in script

## Running Tests

To run tests, run the following command

```bash
  npx hardhat test
```

## 🌏Deployment

Deployment smart contract in manta network testnet

#### To deploy smart contract token

```bash
  npx hardhat run --network manta scripts/deploy-token.ts
```

#### To deploy smart contract airdrop

```bash
  npx hardhat run --network manta scripts/deploy-airdrop.ts
```
