import server from "./server";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import {toHex, utf8ToBytes} from "ethereum-cryptography/utils";
import { sha256 } from "ethereum-cryptography/sha256.js";

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = toHex(secp256k1.getPublicKey(sha256(utf8ToBytes(privateKey))));
    setAddress(address)
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        {/* Never agree to type in your private key in a real life scenerio and also don't make users input their private key */}
        <input placeholder="Type in your private key" value={privateKey} onChange={onChange}></input>
      </label>
      <div className="balance">address: {address.slice(0,10)}... </div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
