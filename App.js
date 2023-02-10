import abi from "./path of abi file(json)"
import {useState , useEffect  } from "react";
import { ethers } from "ethers";

function App(){
    const [state , setstate] = ({
        provider:nul,
        signer:null,
        contract:null
    });
    useEffect(()=>{
        const connectWallet = async() => {
            const contractAddress = "Deployed contract adderess";
            const contractABI  = abi.abi;
            try {
                const { ethereum } = window;
                if (ethereum) {
                    const account = await ethereum.request({method: "eth_requestAccounts"});
                }
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );
                setstate({provider , signer , contract});
                
            } catch (error) {
                console.log(error);
                
            }
        };
        
    },[]);
    console.log(state);
    return (
        <div className="App">

        </div>
    )
}
export default App;