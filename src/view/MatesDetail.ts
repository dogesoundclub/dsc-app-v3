import { DomNode, el } from "@hanul/skynode";
import { constants, utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import CommonUtil from "../CommonUtil";
import Alert from "../component/shared/dialogue/Alert";
import Confirm from "../component/shared/dialogue/Confirm";
import FollowMeContract from "../contracts/FollowMeContract";
import MateContract from "../contracts/MateContract";
import MatesPoolContract from "../contracts/MatesPoolContract";
import MessageContract from "../contracts/MessageContract";
import MixContract from "../contracts/MixContract";
import NameV2Contract from "../contracts/NameV2Contract";
import Wallet from "../klaytn/Wallet";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class MatesDetail implements View {

    private id: number;
    private container: DomNode;

    private nameDisplay: DomNode;
    private mixDisplay: DomNode;
    private snsDisplay: DomNode;
    private messageList: DomNode;

    constructor(params: ViewParams) {
        this.id = parseInt(params.id, 10);
        Layout.current.title = msg("MATES_DETAIL_TITLE").replace(/{id}/, String(this.id));
        Layout.current.content.append(this.container = el(".mates-detail-view",
            el("header",
                this.nameDisplay = el("h1"),
                el("img.mate", { src: `https://storage.googleapis.com/dsc-mate/336/dscMate-${this.id}.png` }),
                el("p", "메이트에 쌓여있는 MIX :", this.mixDisplay = el("span")),
                el("a", "오픈씨 확인하기", { href: `https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${this.id}`, target: "_blank" }),
            ),
            el("section",
                el("hr"),
                el("section.social-container",
                    el("h2", `메이트 #${this.id}의 소셜 정보`),
                    this.snsDisplay = el("section"),
                ),
                el("hr"),
                el("section.message-container",
                    el("h2", `메이트 #${this.id}에게 남겨진 메시지들📝✍🏻✏️`),
                    el("table",
                        el("thead",
                            el("tr",
                                el("td.block", "BLOCK#"),
                                el("td.name", "NAME"),
                                el("td.msg", "MSG"),
                                el("td.address", "HOLDER ADDRESS"),
                            ),
                        ),
                        this.messageList = el("tbody"),
                    ),
                    el(".button-wrap",
                        el("button", "메이트 전송하기"),
                    ),
                ),
                el("hr"),
                el("section.name-container",
                    el("h2", "메이트 이름 짓기 📛🐶😊"),
                    el("p", "당신의 짝에게 이름을 지어주세요. 아직 짝의 이름이 없다면 기름값만 지불하고 이름을 지어주시면 됩니다. 하지만 변경을 하시려면 10마이크를 내셔야 합니다. 당신은 다른 동료와 같은 이름을 사용할 수 없습니다. 또한 메이트 이름을 삭제하려면 20 믹스가 필요합니다. 그리고 그 친구의 이름이 갤러리에 전시되어 있습니다."),
                    el("input", { placeholder: "메이트의 이름을 지어주세요" }),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", "나는 메이트 이름을 변경하려면, 10믹스를 지불해야 하고, 이름을 삭제하려면 20믹스를 지불해야 한다는 사실을 잘 이해하고 있으며 동의합니다. 나는 제출된 이름과 같이 제출된 정보(제출 당시 메이트 소유주의 지갑 주소 등) 공개에 따른 모든 책임을 온전히 홀로 지는 것에 동의합니다. 나는 클레이튼 블록체인에 접속하기 위해 내가 선택한 이 도구와 관련하여 어떤 책임도 타인에게 물을 수 없다는 것에 대해 동의합니다."),
                    ),
                    el(".button-wrap",
                        el("button", "제출하기"),
                        el("a", "메이트 이름 삭제")
                    ),
                ),
                el("hr"),
                el("section.sns-container",
                    el("h2", "소셜 정보 추가하기 ℹ️🎖📻"),
                    el("p", "귀하가 보유한 메이트에게 트위터, 인스타그램 아이디를 남길 수 있습니다. 아이디를 남기면 Follow Me 명단에 등록되며, 오픈씨 디스크립션을 통해 노출됩니다. 소셜 미디어의 프로필 사진을 메이트로 변경하고, Follow Me 명단의 트위터들을 팔로우 해보세요. 그들은 당신이 같은 커뮤니티의 일원임을 알아차리고 당신의 소셜 미디어 진출을 돕기 위해, 맞팔로우를 해줄 것입니다."),
                    el(".input-container",
                        el("img", { src: "/images/shared/icn/icn_twitter.svg" }),
                        el("p", "@"),
                        el("input", { placeholder: "트위터 ID를 입력해주세요" }),
                    ),
                    el(".input-container",
                        el("img", { src: "/images/shared/icn/icn_instagram.svg" }),
                        el("p", "@"),
                        el("input", { placeholder: "인스타그램 ID를 입력해주세요" }),
                    ),
                    el(".caption", "* 저장 버튼을 클릭하면 이 웹 사이트 및 다른 플랫폼을 통한 소셜 미디어 계정 이름 공개에 동의하게 됩니다. 이 인터페이스는 Klaytn에 접속하기 위한 편리한 도구일 뿐이며, 나의 서명에 따른 거래 결과에 대한 책임은 전적으로 나에게 있습니다."),
                    el(".button-wrap",
                        el("button", "제출하기"),
                    ),
                ),
                el("hr"),
                el("section.name-container",
                    el("h2", "MATE_DETAIL_MESSAGE_FORM_TITLE 📮😺👍"),
                    el("p", "당신이 가지고 있는 MATE들에게 메시지를 남길 수 있습니다. 여러분은 하루에 한 번 짧은 일기나 메모를 남길 수 있습니다. 조심하세요! 일단 제출되면 일기는 클레이튼 블록체인에 기록돼 개발팀이 지울 수 없다. 어두운 이력을 남기지 않기 위해서는 신중해야 할 것이다. 그 일기는 다른 사람이 읽을 수 있습니다."),
                    el("input", { placeholder: "MSG THAT I WILL LEAVE" }),
                    el(".checkbox-container",
                        el("input", { type: "checkbox" }),
                        el("label", "일지를 제출한 블록체인은 조작이 불가능한 성격으로 알고 있다. 제출된 메시지, 제출 당시 MATE의 성명, 제출 당시 MATE 소유자의 지갑 주소 등 제출된 정보의 공개에 대한 모든 책임을 지는 것에 동의합니다. 내가 클레이튼 블록체인에 접속하기 위해 선택한 이 툴에 대해 책임을 물을 수 없다는 것에 동의한다."),
                    ),
                    el(".button-wrap",
                        el("button", "제출하기"),
                    ),
                ),
            ),
        ));

        this.load();
        this.loadSNS();
    }

    private async load() {

        const claimable = await MatesPoolContract.claimableOf(this.id);
        this.mixDisplay.empty().appendText(CommonUtil.numberWithCommas(utils.formatEther(claimable)));

        await superagent.get(`https://api.dogesound.club/mate/${this.id}`);

        let name = await NameV2Contract.names(MateContract.address, this.id);
        this.nameDisplay.empty().appendText(msg("MATE_DETAIL_TITLE").replace(/{id}/, String(this.id)));
        if (name !== "") {
            this.nameDisplay.appendText(` - ${name}`);
        } else {
            name = msg("MATE_DETAIL_TITLE").replace(/{id}/, String(this.id));
        }

        const owner = await MateContract.ownerOf(this.id);
        if (owner === await Wallet.loadAddress()) {

            let nameInput: DomNode<HTMLInputElement>;
            let nameTermCheckbox: DomNode<HTMLInputElement>;
            let twitterInput: DomNode<HTMLInputElement>;
            let instagramInput: DomNode<HTMLInputElement>;
            let messageInput: DomNode<HTMLInputElement>;
            let messageTermCheckbox: DomNode<HTMLInputElement>;

            const mixForChanging = await NameV2Contract.getMIXForChanging();
            const mixForDeleting = await NameV2Contract.getMIXForDeleting();

            this.container.append(
                el("a.transfer-button", msg("MATE_TRANSFER_BUTTON"), {
                    click: () => {
                        //TODO:
                        //new Prompt(msg("MATE_TRANSFER_CONFIRM_MESSAGE").replace(/{name}/, name), msg("MATE_TRANSFER_CONFIRM_BUTTON"), async (address) => {
                        //    await MateContract.transfer(address, this.id);
                        //});
                    },
                }),

                // 메이트 이름짓기
                el("section",
                    el("h2", msg("MATE_DETAIL_NAME_FORM_TITLE")),
                    el("p", msg("MATE_DETAIL_NAME_FORM_DESCRIPTION")
                        .replace(/{mixForChanging}/g, String(parseInt(utils.formatEther(mixForChanging), 10)))
                        .replace(/{mixForDeleting}/g, String(parseInt(utils.formatEther(mixForDeleting), 10)))
                    ),
                    nameInput = el("input", { placeholder: msg("MATE_DETAIL_NAME_FORM_INPUT") }),
                    el("label.terms",
                        nameTermCheckbox = el("input", { type: "checkbox" }),
                        el("p", msg("MATE_DETAIL_NAME_FORM_TERMS")
                            .replace(/{mixForChanging}/g, String(parseInt(utils.formatEther(mixForChanging), 10)))
                            .replace(/{mixForDeleting}/g, String(parseInt(utils.formatEther(mixForDeleting), 10)))
                        ),
                    ),
                    el("a.submit-button", msg("MATE_DETAIL_NAME_FORM_SUBMIT"), {
                        click: async () => {
                            if (nameTermCheckbox.domElement.checked === true) {
                                const mixNeeded = await NameV2Contract.named(MateContract.address, this.id) !== true ? 0 : await NameV2Contract.getMIXForChanging();

                                const balance = await MixContract.balanceOf(owner);
                                if (balance.lt(mixNeeded)) {
                                    new Confirm(`${String(parseInt(utils.formatEther(mixNeeded), 10))} 믹스가 필요합니다.`, "믹스 구매", () => {
                                        open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                                    });
                                }

                                else if ((await MixContract.allowance(owner, NameV2Contract.address)).lt(mixNeeded)) {
                                    await MixContract.approve(NameV2Contract.address, constants.MaxUint256);
                                    setTimeout(async () => {
                                        const name = nameInput.domElement.value;
                                        if (await NameV2Contract.exists(name) === true) {
                                            new Alert(msg("MATE_NAME_EXISTS_ERROR"), msg("CONFIRM_BUTTON"));
                                        } else {
                                            await NameV2Contract.set(MateContract.address, this.id, name);
                                            ViewUtil.waitTransactionAndRefresh();
                                        }
                                    }, 2000);
                                }

                                else {
                                    const name = nameInput.domElement.value;
                                    if (await NameV2Contract.exists(name) === true) {
                                        new Alert(msg("MATE_NAME_EXISTS_ERROR"), msg("CONFIRM_BUTTON"));
                                    } else {
                                        await NameV2Contract.set(MateContract.address, this.id, name);
                                        ViewUtil.waitTransactionAndRefresh();
                                    }
                                }
                            }
                        },
                    }),
                    el(".remove-button-container",
                        el("a.remove-name-button", msg("MATE_DETAIL_REMOVE_NAME_BUTTON"), {
                            click: async () => {
                                new Confirm(msg("MATE_DETAIL_REMOVE_NAME_CONFIRM"), msg("CONFIRM_BUTTON"), async () => {
                                    const mixNeeded = await NameV2Contract.getMIXForDeleting();

                                    const balance = await MixContract.balanceOf(owner);
                                    if (balance.lt(mixNeeded)) {
                                        new Confirm(`${String(parseInt(utils.formatEther(mixNeeded), 10))} 믹스가 필요합니다.`, "믹스 구매", () => {
                                            open("https://klayswap.com/exchange/swap?input=0x0000000000000000000000000000000000000000&output=0xdd483a970a7a7fef2b223c3510fac852799a88bf");
                                        });
                                    }

                                    else if ((await MixContract.allowance(owner, NameV2Contract.address)).lt(mixNeeded)) {
                                        await MixContract.approve(NameV2Contract.address, constants.MaxUint256);
                                        setTimeout(async () => {
                                            await NameV2Contract.remove(MateContract.address, this.id);
                                            ViewUtil.waitTransactionAndRefresh();
                                        }, 2000);
                                    }

                                    else {
                                        await NameV2Contract.remove(MateContract.address, this.id);
                                        ViewUtil.waitTransactionAndRefresh();
                                    }
                                });
                            },
                        }),
                    ),
                ),

                // 팔로우 미
                el("section",
                    el("h2", msg("MATE_DETAIL_SNS_FORM_INPUT")),
                    el("p", msg("MATE_DETAIL_SNS_FORM_DESCRIPTION")),
                    el(".sns-form",
                        el("label", msg("MATE_DETAIL_SNS_FORM_TWITTER")),
                        el(".input-container",
                            "@", twitterInput = el("input"),
                        ),
                        el("a.submit-button", msg("MATE_DETAIL_SNS_FORM_TWITTER_SUBMIT"), {
                            click: async () => {
                                await FollowMeContract.set(MateContract.address, this.id, 0, twitterInput.domElement.value);
                                ViewUtil.waitTransactionAndRefresh();
                            },
                        }),
                    ),
                    el(".sns-form",
                        el("label", msg("MATE_DETAIL_SNS_FORM_INSTAGRAM")),
                        el(".input-container",
                            "@", instagramInput = el("input"),
                        ),
                        el("a.submit-button", msg("MATE_DETAIL_SNS_FORM_INSTAGRAM_SUBMIT"), {
                            click: async () => {
                                await FollowMeContract.set(MateContract.address, this.id, 1, instagramInput.domElement.value);
                                ViewUtil.waitTransactionAndRefresh();
                            },
                        }),
                    ),
                    el(".sns-terms",
                        el("p", "* ", msg("MATE_DETAIL_SNS_FORM_TERMS")),
                    ),
                ),

                // 메시지 남기기
                el("section",
                    el("h2", msg("MATE_DETAIL_MESSAGE_FORM_TITLE")),
                    el("p", msg("MATE_DETAIL_MESSAGE_FORM_DESCRIPTION")),
                    messageInput = el("input.message", { placeholder: msg("MATE_DETAIL_MESSAGE_FORM_INPUT") }),
                    el("label.terms",
                        messageTermCheckbox = el("input", { type: "checkbox" }),
                        el("p", msg("MATE_DETAIL_MESSAGE_FORM_TERMS")),
                    ),
                    el("a.submit-button", msg("MATE_DETAIL_MESSAGE_FORM_SUBMIT"), {
                        click: async () => {
                            if (messageTermCheckbox.domElement.checked === true) {
                                if ((await MessageContract.remainBlocks(this.id)).toNumber() !== 0) {
                                    new Alert(msg("MATE_DETAIL_MESSAGE_NOT_READY_ERROR"), msg("CONFIRM_BUTTON"));
                                } else {
                                    await MessageContract.set(this.id, messageInput.domElement.value);
                                    ViewUtil.waitTransactionAndRefresh();
                                }
                            }
                        },
                    }),
                ),
            );
        }
    }

    private async loadSNS() {

        const twitter = await FollowMeContract.followMe(MateContract.address, this.id, 0);
        const instagram = await FollowMeContract.followMe(MateContract.address, this.id, 1);

        if (twitter !== "" || instagram !== "") {
            this.snsDisplay.empty().append(
                el("h2", msg("MATE_DETAIL_SNS_TITLE")),
                twitter === "" ? undefined : el(".sns",
                    el("label", msg("MATE_DETAIL_SNS_TWITTER")),
                    el("a", `@${twitter}`, { href: `https://twitter.com/${twitter}`, target: "_blank" }),
                ),
                instagram === "" ? undefined : el(".sns",
                    el("label", msg("MATE_DETAIL_SNS_INSTAGRAM")),
                    el("a", `@${instagram}`, { href: `https://instagram.com/${instagram}`, target: "_blank" }),
                ),
            );
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
        Layout.current.title = msg("MATES_DETAIL_TITLE").replace(/{id}/, params.id);
    }

    public close(): void {
        this.container.delete();
    }
}