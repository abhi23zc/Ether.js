const { ethers } = require("ethers");

const RPC = 'https://sepolia.infura.io/v3/1ed029ecb6874544b43e3d32b113800d';
const account1 = '0x70FDF9B8221E9b8Cc106cA08761aBBa4aBb7aed4';
const privateKey = '224fb590f003e111798b8db9ab4947fe49b34889f9a7c6f4b36d22cad706dc14';

const provider = new ethers.JsonRpcProvider(RPC);

const wallet = new ethers.Wallet(privateKey, provider)

async function call() {
    try {
        const balance = await provider.getBalance(account1);
        // console.log(ethers.formatEther(balance)); 

        console.log(await wallet.getAddress())
        console.log(ethers.formatEther(await provider.getBalance(account1)))
        const trans = await wallet.sendTransaction({
            to: account1,
            value: ethers.parseEther('0.05')
        })

        await trans.wait()
        console.log("Wallet Money", await provider.getBalance(wallet))
        console.log("Account Money", await provider.getBalance(account1))

    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

call();
