"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const ethers_1 = require("ethers");
const msg_js_1 = __importDefault(require("msg.js"));
const superagent_1 = __importDefault(require("superagent"));
const CommonUtil_1 = __importDefault(require("../CommonUtil"));
const Alert_1 = __importDefault(require("../component/shared/dialogue/Alert"));
const Confirm_1 = __importDefault(require("../component/shared/dialogue/Confirm"));
const FollowMeContract_1 = __importDefault(require("../contracts/FollowMeContract"));
const MateContract_1 = __importDefault(require("../contracts/MateContract"));
const MatesPoolContract_1 = __importDefault(require("../contracts/MatesPoolContract"));
const MessageContract_1 = __importDefault(require("../contracts/MessageContract"));
const MixContract_1 = __importDefault(require("../contracts/MixContract"));
const NameV2Contract_1 = __importDefault(require("../contracts/NameV2Contract"));
const Wallet_1 = __importDefault(require("../klaytn/Wallet"));
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class MatesDetail {
    constructor(params) {
        this.id = parseInt(params.id, 10);
        Layout_1.default.current.title = (0, msg_js_1.default)("MATES_DETAIL_TITLE").replace(/{id}/, String(this.id));
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".mates-detail-view", (0, skynode_1.el)("header", this.nameDisplay = (0, skynode_1.el)("h1"), (0, skynode_1.el)("img.mate", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${this.id}.png` }), (0, skynode_1.el)("p", "메이트에 쌓여있는 MIX :", this.mixDisplay = (0, skynode_1.el)("span")), (0, skynode_1.el)("a", "오픈씨 확인하기", { href: `https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${this.id}`, target: "_blank" })), (0, skynode_1.el)("section", (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.social-container", (0, skynode_1.el)("h2", `메이트 #${this.id}의 소셜 정보`), this.snsDisplay = (0, skynode_1.el)("section")), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.message-container", (0, skynode_1.el)("h2", `메이트 #${this.id}에게 남겨진 메시지들📝✍🏻✏️`), (0, skynode_1.el)("table", (0, skynode_1.el)("thead", (0, skynode_1.el)("tr", (0, skynode_1.el)("td.block", "BLOCK#"), (0, skynode_1.el)("td.name", "NAME"), (0, skynode_1.el)("td.msg", "MSG"), (0, skynode_1.el)("td.address", "HOLDER ADDRESS"))), this.messageList = (0, skynode_1.el)("tbody")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "메이트 전송하기"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.name-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_DESCRIPTION")), (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_TITLE") }), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "제출하기"), (0, skynode_1.el)("a", "메이트 이름 삭제"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.sns-container", (0, skynode_1.el)("h2", "소셜 정보 추가하기 ℹ️🎖📻"), (0, skynode_1.el)("p", "귀하가 보유한 메이트에게 트위터, 인스타그램 아이디를 남길 수 있습니다. 아이디를 남기면 Follow Me 명단에 등록되며, 오픈씨 디스크립션을 통해 노출됩니다. 소셜 미디어의 프로필 사진을 메이트로 변경하고, Follow Me 명단의 트위터들을 팔로우 해보세요. 그들은 당신이 같은 커뮤니티의 일원임을 알아차리고 당신의 소셜 미디어 진출을 돕기 위해, 맞팔로우를 해줄 것입니다."), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_twitter.svg" }), (0, skynode_1.el)("p", "@"), (0, skynode_1.el)("input", { placeholder: "트위터 ID를 입력해주세요" })), (0, skynode_1.el)(".input-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_instagram.svg" }), (0, skynode_1.el)("p", "@"), (0, skynode_1.el)("input", { placeholder: "인스타그램 ID를 입력해주세요" })), (0, skynode_1.el)(".caption", "* 저장 버튼을 클릭하면 이 웹 사이트 및 다른 플랫폼을 통한 소셜 미디어 계정 이름 공개에 동의하게 됩니다. 이 인터페이스는 Klaytn에 접속하기 위한 편리한 도구일 뿐이며, 나의 서명에 따른 거래 결과에 대한 책임은 전적으로 나에게 있습니다."), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "제출하기"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.name-container", (0, skynode_1.el)("h2", "MATE_DETAIL_MESSAGE_FORM_TITLE 📮😺👍"), (0, skynode_1.el)("p", "당신이 가지고 있는 MATE들에게 메시지를 남길 수 있습니다. 여러분은 하루에 한 번 짧은 일기나 메모를 남길 수 있습니다. 조심하세요! 일단 제출되면 일기는 클레이튼 블록체인에 기록돼 개발팀이 지울 수 없다. 어두운 이력을 남기지 않기 위해서는 신중해야 할 것이다. 그 일기는 다른 사람이 읽을 수 있습니다."), (0, skynode_1.el)("input", { placeholder: "MSG THAT I WILL LEAVE" }), (0, skynode_1.el)(".checkbox-container", (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", "일지를 제출한 블록체인은 조작이 불가능한 성격으로 알고 있다. 제출된 메시지, 제출 당시 MATE의 성명, 제출 당시 MATE 소유자의 지갑 주소 등 제출된 정보의 공개에 대한 모든 책임을 지는 것에 동의합니다. 내가 클레이튼 블록체인에 접속하기 위해 선택한 이 툴에 대해 책임을 물을 수 없다는 것에 동의한다.")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("button", "제출하기"))))));
        this.load();
        this.loadSNS();
    }
    async load() {
        const claimable = await MatesPoolContract_1.default.claimableOf(this.id);
        this.mixDisplay.empty().appendText(CommonUtil_1.default.numberWithCommas(ethers_1.utils.formatEther(claimable)));
        await superagent_1.default.get(`https://api.dogesound.club/mate/${this.id}`);
        let name = await NameV2Contract_1.default.names(MateContract_1.default.address, this.id);
        this.nameDisplay.empty().appendText((0, msg_js_1.default)("MATE_DETAIL_TITLE").replace(/{id}/, String(this.id)));
        if (name !== "") {
            this.nameDisplay.appendText(` - ${name}`);
        }
        else {
            name = (0, msg_js_1.default)("MATE_DETAIL_TITLE").replace(/{id}/, String(this.id));
        }
        const owner = await MateContract_1.default.ownerOf(this.id);
        if (owner === await Wallet_1.default.loadAddress()) {
            let nameInput;
            let nameTermCheckbox;
            let twitterInput;
            let instagramInput;
            let messageInput;
            let messageTermCheckbox;
            const mixForChanging = await NameV2Contract_1.default.getMIXForChanging();
            const mixForDeleting = await NameV2Contract_1.default.getMIXForDeleting();
            this.container.append((0, skynode_1.el)("a.transfer-button", (0, msg_js_1.default)("MATE_TRANSFER_BUTTON"), {
                click: () => {
                },
            }), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.name-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_DESCRIPTION")
                .replace(/{mixForChanging}/g, String(parseInt(ethers_1.utils.formatEther(mixForChanging), 10)))
                .replace(/{mixForDeleting}/g, String(parseInt(ethers_1.utils.formatEther(mixForDeleting), 10)))), nameInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_INPUT") }), (0, skynode_1.el)(".checkbox-container", nameTermCheckbox = (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_TERMS")
                .replace(/{mixForChanging}/g, String(parseInt(ethers_1.utils.formatEther(mixForChanging), 10)))
                .replace(/{mixForDeleting}/g, String(parseInt(ethers_1.utils.formatEther(mixForDeleting), 10))))), (0, skynode_1.el)("a.submit-button", (0, msg_js_1.default)("MATE_DETAIL_NAME_FORM_SUBMIT"), {
                click: async () => {
                    if (nameTermCheckbox.domElement.checked === true) {
                        const mixNeeded = await NameV2Contract_1.default.named(MateContract_1.default.address, this.id) !== true ? 0 : await NameV2Contract_1.default.getMIXForChanging();
                        const balance = await MixContract_1.default.balanceOf(owner);
                        if (balance.lt(mixNeeded)) {
                            new Confirm_1.default(`${String(parseInt(ethers_1.utils.formatEther(mixNeeded), 10))} 믹스가 필요합니다.`, "믹스 구매", () => {
                                open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                            });
                        }
                        else if ((await MixContract_1.default.allowance(owner, NameV2Contract_1.default.address)).lt(mixNeeded)) {
                            await MixContract_1.default.approve(NameV2Contract_1.default.address, ethers_1.constants.MaxUint256);
                            setTimeout(async () => {
                                const name = nameInput.domElement.value;
                                if (await NameV2Contract_1.default.exists(name) === true) {
                                    new Alert_1.default((0, msg_js_1.default)("MATE_NAME_EXISTS_ERROR"), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                                }
                                else {
                                    await NameV2Contract_1.default.set(MateContract_1.default.address, this.id, name);
                                    ViewUtil_1.default.waitTransactionAndRefresh();
                                }
                            }, 2000);
                        }
                        else {
                            const name = nameInput.domElement.value;
                            if (await NameV2Contract_1.default.exists(name) === true) {
                                new Alert_1.default((0, msg_js_1.default)("MATE_NAME_EXISTS_ERROR"), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                            }
                            else {
                                await NameV2Contract_1.default.set(MateContract_1.default.address, this.id, name);
                                ViewUtil_1.default.waitTransactionAndRefresh();
                            }
                        }
                    }
                },
            }), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", (0, msg_js_1.default)("MATE_DETAIL_REMOVE_NAME_BUTTON"), {
                click: async () => {
                    new Confirm_1.default((0, msg_js_1.default)("MATE_DETAIL_REMOVE_NAME_CONFIRM"), (0, msg_js_1.default)("CONFIRM_BUTTON"), async () => {
                        const mixNeeded = await NameV2Contract_1.default.getMIXForDeleting();
                        const balance = await MixContract_1.default.balanceOf(owner);
                        if (balance.lt(mixNeeded)) {
                            new Confirm_1.default(`${String(parseInt(ethers_1.utils.formatEther(mixNeeded), 10))} 믹스가 필요합니다.`, "믹스 구매", () => {
                                open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                            });
                        }
                        else if ((await MixContract_1.default.allowance(owner, NameV2Contract_1.default.address)).lt(mixNeeded)) {
                            await MixContract_1.default.approve(NameV2Contract_1.default.address, ethers_1.constants.MaxUint256);
                            setTimeout(async () => {
                                await NameV2Contract_1.default.remove(MateContract_1.default.address, this.id);
                                ViewUtil_1.default.waitTransactionAndRefresh();
                            }, 2000);
                        }
                        else {
                            await NameV2Contract_1.default.remove(MateContract_1.default.address, this.id);
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
                    });
                },
            }))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.sns-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATE_DETAIL_SNS_FORM_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATE_DETAIL_SNS_FORM_DESCRIPTION")), (0, skynode_1.el)(".sns-form", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_twitter.svg" }), (0, skynode_1.el)("p", "@"), twitterInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("MATE_DETAIL_SNS_FORM_TWITTER") }))), (0, skynode_1.el)(".sns-form", (0, skynode_1.el)(".input-container", (0, skynode_1.el)("img", { src: "/images/shared/icn/icn_instagram.svg" }), (0, skynode_1.el)("p", "@"), instagramInput = (0, skynode_1.el)("input", { placeholder: (0, msg_js_1.default)("MATE_DETAIL_SNS_FORM_INSTAGRAM") }))), (0, skynode_1.el)("a.submit-button", (0, msg_js_1.default)("MATE_DETAIL_SNS_FORM_TWITTER_SUBMIT"), {
                click: async () => {
                    await FollowMeContract_1.default.set(MateContract_1.default.address, this.id, 0, twitterInput.domElement.value);
                    await FollowMeContract_1.default.set(MateContract_1.default.address, this.id, 1, instagramInput.domElement.value);
                    ViewUtil_1.default.waitTransactionAndRefresh();
                },
            }), (0, skynode_1.el)(".caption", (0, msg_js_1.default)("MATE_DETAIL_SNS_FORM_TERMS"))), (0, skynode_1.el)("hr"), (0, skynode_1.el)("section.name-container", (0, skynode_1.el)("h2", (0, msg_js_1.default)("MATE_DETAIL_MESSAGE_FORM_TITLE")), (0, skynode_1.el)("p", (0, msg_js_1.default)("MATE_DETAIL_MESSAGE_FORM_DESCRIPTION")), messageInput = (0, skynode_1.el)("input.message", { placeholder: (0, msg_js_1.default)("MATE_DETAIL_MESSAGE_FORM_INPUT") }), (0, skynode_1.el)(".checkbox-container", messageTermCheckbox = (0, skynode_1.el)("input", { type: "checkbox" }), (0, skynode_1.el)("label", (0, msg_js_1.default)("MATE_DETAIL_MESSAGE_FORM_TERMS"))), (0, skynode_1.el)("a.submit-button", (0, msg_js_1.default)("MATE_DETAIL_MESSAGE_FORM_SUBMIT"), {
                click: async () => {
                    if (messageTermCheckbox.domElement.checked === true) {
                        if ((await MessageContract_1.default.remainBlocks(this.id)).toNumber() !== 0) {
                            new Alert_1.default((0, msg_js_1.default)("MATE_DETAIL_MESSAGE_NOT_READY_ERROR"), (0, msg_js_1.default)("CONFIRM_BUTTON"));
                        }
                        else {
                            await MessageContract_1.default.set(this.id, messageInput.domElement.value);
                            ViewUtil_1.default.waitTransactionAndRefresh();
                        }
                    }
                },
            })));
        }
    }
    async loadSNS() {
        const twitter = await FollowMeContract_1.default.followMe(MateContract_1.default.address, this.id, 0);
        const instagram = await FollowMeContract_1.default.followMe(MateContract_1.default.address, this.id, 1);
        if (twitter !== "" || instagram !== "") {
            this.snsDisplay.empty().append((0, skynode_1.el)("h2", (0, msg_js_1.default)("MATE_DETAIL_SNS_TITLE")), twitter === "" ? undefined : (0, skynode_1.el)(".sns", (0, skynode_1.el)("label", (0, msg_js_1.default)("MATE_DETAIL_SNS_TWITTER")), (0, skynode_1.el)("a", `@${twitter}`, { href: `https://twitter.com/${twitter}`, target: "_blank" })), instagram === "" ? undefined : (0, skynode_1.el)(".sns", (0, skynode_1.el)("label", (0, msg_js_1.default)("MATE_DETAIL_SNS_INSTAGRAM")), (0, skynode_1.el)("a", `@${instagram}`, { href: `https://instagram.com/${instagram}`, target: "_blank" })));
        }
    }
    changeParams(params, uri) {
        Layout_1.default.current.title = (0, msg_js_1.default)("MATES_DETAIL_TITLE").replace(/{id}/, params.id);
    }
    close() {
        this.container.delete();
    }
}
exports.default = MatesDetail;
//# sourceMappingURL=MatesDetail.js.map