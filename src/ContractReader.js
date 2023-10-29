import { JsonRpcProvider } from 'ethers';
import { contractAbi } from './contractAbi.js';
import { Contract } from 'ethers';


const provider = new JsonRpcProvider("https://bsc-dataseed.binance.org/");
const contractAddress = '0x2596F9b0D5Ec11674706C1fD771Ac722E7ac52FE';

export const readContractValue = async () => {
  try {
    const contract = await new Contract(contractAddress, contractAbi, provider);
    console.log("contract:", contract);
    const value = await contract.CBV();
    console.log("value: ", value);

    return value;
  } catch (error) {
    console.error("Error reading contract value:", error);
    throw error;
  }
};
