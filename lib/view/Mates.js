"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
class Mates {
    constructor() {
        Layout_1.default.current.title = "메이트";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".mates-view", (0, skynode_1.el)("header", (0, skynode_1.el)("h1", "MATES 🐩🐶🤑"), (0, skynode_1.el)("img.mate", { src: "/images/shared/img/mate-mock.png" }), (0, skynode_1.el)("h2", "What is DSC MATES?"), (0, skynode_1.el)("p", "- DSC MATES are 24*24 pixel art with 10,000 different characters, all with different shapes.\n- 10 faces and over 80 traits were combined to create 10,000 different looking mates. Nothing is the same. Mate information according to characteristics can be viewed in the gallery of this website.\n- All 10,000 mates were randomly generated under the same conditions. Nothing is artificially rare.")), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "Ownership (Explanation for NFT beginners)"), (0, skynode_1.el)("p", "Ownership information for Mate is recorded on the Klaytn blockchain. We issued 10, 000 cryptocurrencies for a smooth ownership transaction.These 10, 000 indivisible cryptocurrencies each have a unique number from 0 to 9999. One mate is linked to one cryptocurrency with a unique number.Therefore, if you have cryptocurrency number 13 with DSC MATES information in your cryptocurrency wallet, it proves that you are the clear owner of mate number 13. The connection between cryptocurrency and mate is immutable. This type of proof of ownership has the same fundamentals as cryptocurrency technology's. Since no one can manipulate it, it enables secure transactions without third-party intermediaries.")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("article", (0, skynode_1.el)("img", { src: "/images/view/activities/bg_dsc_family.png" }), (0, skynode_1.el)("h2", "How to know that a specific token is original DSC MATES among countless issued tokens"), (0, skynode_1.el)("p", `Anyone can create 10,000 tokens through the contract. Therefore, it is necessary to check which of the countless contract tokens represents the original DSC MATES.

                    The DSC MATES contract stores two variables.
                    1. hash : 6110b42d1575f2bfb80a98cb6ce7d6743fa249b6ee2be08467487c12f5f95753
                    2. ipfs : QmfTimyAQTQjQsnvECn9U44LdnPzSDF2XREoP2WFdjHitQ
                    
                    1 is the sha256 hash of the original dscmates.png(shown above) containing all 10, 000 mates.This is a value that can only be obtained when the original file is converted to sha256.If the hash value for the file does not come out, it is not an authentic copy. (Try to generate the hash of the above figure through "openssl dgst -sha256 dscmates.png" in Linux.) If there are multiple contracts with this hash value due to reckless duplication, the first one created among them is the original.You only need to trade the tokens contained in this contract.

                    No.2 is the key(ID) that distributed and stored the original image to prevent a single server from losing the original image.
                    Below If you press the button, you can browse the distributed copy of dsc mates.`)), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "VIEW DSC MATES ")))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Mates;
//# sourceMappingURL=Mates.js.map