# CloudQ

*Fast, easy virtual waiting so you have time to do what's important!*
> **[Best Web3 Hack at McHacks 12](https://devpost.com/software/cloudq)**

![image](https://github.com/user-attachments/assets/4556050c-1387-4694-91d5-8b8c9ead66ee)

**CloudQ** is a decentralized, on-chain solution for managing virtual lineups. Inspired by the simplicity of tools like LettuceMeet and McDonald’s kiosks, CloudQ allows users to create and join virtual queues in just a few clicks, saving time, space, and effort. After attending two hackathons with long lines for registration and food, we realized the potential for an easy, on-chain solution to streamline virtual lineups. Built on Starknet, this project leverages blockchain technology to provide a seamless and secure experience for managing event queues.

## How we built it
The front end is built with React, with Auth0 as a login and profile manager. We are using Starknet to host the events and queues on the blockchain. We created smart contracts using Cairo classes, including functions such as CreateQueue, RemovePersonFromQueue, GetQueue, GetPosition, GetQueueLength, and JoinQueue.

## Technologies Used
- **Front-end**: React with Auth0 for login and profile management
- **Back-end**: Starknet for hosting events and queues on the blockchain.
- **Smart Contracts**: Built using Cairo, the native smart contract rust-inspired language for Starknet

## Challenges
- **Midnight Testnet Issue**s: Initially planned to use Midnight’s Testnet, but technical issues with the faucet forced a pivot to Starknet.
- **SMS Messaging**: Challenges arose with integrating SMS messaging due to restrictive updates in free services just weeks before the hackathon started.

## Accomplishments that we're proud of
We actually have something on the blockchain! As a group of 3, this was our first experience with Web 3, and we are very proud to deliver a functioning on-chain web app. We are also very proud of our front-end design, we believe it looks incredible given the narrow time constraint of the hackathon.

## What we learned
Web 3 documentation is very limited, but developing on the blockchain can be both a nightmare and incredibly rewarding. We will definitely be creating more Web3 apps in the future!

## What's next for CloudQ
We hope to deploy the website shortly after the hackathon, since we are running it on the testnet, and we have it working on the testnet, we decided that publishing the website after the hackathon would be better.
