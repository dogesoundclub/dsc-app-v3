import { DomNode, el } from "@hanul/skynode";
import { constants, utils } from "ethers";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import superagent from "superagent";
import CommonUtil from "../../../../CommonUtil";
import MateMessageList from "../../component/matemessage/MateMessageList";
import Alert from "../../component/dialogue/Alert";
import Confirm from "../../component/dialogue/Confirm";
import FollowMeContract from "../../../../contracts/FollowMeContract";
import MateContract from "../../../../contracts/MateContract";
import MatesPoolContract from "../../../../contracts/MatesPoolContract";
import MessageContract from "../../../../contracts/MessageContract";
import MixContract from "../../../../contracts/MixContract";
import NameV2Contract from "../../../../contracts/NameV2Contract";
import Wallet from "../../../../klaytn/Wallet";
import Layout from "../Layout";
import ViewUtil from "../../../ViewUtil";

export default class MatesDetail implements View {

    private id: number;
    private container: DomNode;

    private nameDisplay: DomNode;
    private mixDisplay: DomNode;
    private snsDisplay: DomNode;

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
                    new MateMessageList(this.id),
                ),
                el("hr"),
                el("section.lockable-container",
                    el("h2", "Lockable Contents 🕸🦄🔐"),
                    el("p", "당신이 소유한 AYIAS Contents입니다."),
                    el(".content",
                        el(".lock-container",
                            el(".lock-wrap",
                                el("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" }),
                            ),
                            el("p", "AYIAS VOXEL 1"),
                        ),
                        el(".lock-container",
                            el(".lock-wrap",
                                el("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" }),
                            ),
                            el("p", "AYIAS VOXEL 2"),
                        ),
                        el(".lock-container",
                            el(".lock-wrap",
                                el("img", { src: "/images/shared/icn/icn_lock.svg", alt: "lock" }),
                            ),
                            el("p", "AYIAS VOXEL 3"),
                        ),
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
                /*el("a.transfer-button", msg("MATE_TRANSFER_BUTTON"), {
                    click: () => {
                        //TODO:
                        //new Prompt(msg("MATE_TRANSFER_CONFIRM_MESSAGE").replace(/{name}/, name), msg("MATE_TRANSFER_CONFIRM_BUTTON"), async (address) => {
                        //    await MateContract.transfer(address, this.id);
                        //});
                    },
                }),*/

                // 메이트 이름짓기
                el("hr"),
                el("section.name-container",
                    el("h2", msg("MATE_DETAIL_NAME_FORM_TITLE")),
                    el("p", msg("MATE_DETAIL_NAME_FORM_DESCRIPTION")
                        .replace(/{mixForChanging}/g, String(parseInt(utils.formatEther(mixForChanging), 10)))
                        .replace(/{mixForDeleting}/g, String(parseInt(utils.formatEther(mixForDeleting), 10)))
                    ),
                    nameInput = el("input", { placeholder: msg("MATE_DETAIL_NAME_FORM_INPUT") }),
                    el(".checkbox-container",
                        nameTermCheckbox = el("input", { type: "checkbox" }),
                        el("label", msg("MATE_DETAIL_NAME_FORM_TERMS")
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
                    el(".button-wrap",
                        el("a", msg("MATE_DETAIL_REMOVE_NAME_BUTTON"), {
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

                el("hr"),
                // 팔로우 미
                el("section.sns-container",
                    el("h2", msg("MATE_DETAIL_SNS_FORM_TITLE")),
                    el("p", msg("MATE_DETAIL_SNS_FORM_DESCRIPTION")),
                    el(".sns-form",
                        el(".input-container",
                            el("img", { src: "/images/shared/icn/icn_twitter.svg" }),
                            el("p", "@"),
                            twitterInput = el("input", { placeholder: msg("MATE_DETAIL_SNS_FORM_TWITTER") }),
                        ),
                    ),
                    el(".sns-form",
                        el(".input-container",
                            el("img", { src: "/images/shared/icn/icn_instagram.svg" }),
                            el("p", "@"),
                            instagramInput = el("input", { placeholder: msg("MATE_DETAIL_SNS_FORM_INSTAGRAM") }),
                        ),
                    ),
                    el("a.submit-button", msg("SUBMIT_BUTTON"), {
                        click: async () => {
                            await FollowMeContract.set(MateContract.address, this.id, 0, twitterInput.domElement.value);
                            await FollowMeContract.set(MateContract.address, this.id, 1, instagramInput.domElement.value);
                            ViewUtil.waitTransactionAndRefresh();
                        },
                    }),
                    el(".caption", msg("MATE_DETAIL_SNS_FORM_TERMS")),
                ),

                el("hr"),
                // 메시지 남기기
                el("section.name-container",
                    el("h2", msg("MATE_DETAIL_MESSAGE_FORM_TITLE")),
                    el("p", msg("MATE_DETAIL_MESSAGE_FORM_DESCRIPTION")),
                    messageInput = el("input.message", { placeholder: msg("MATE_DETAIL_MESSAGE_FORM_INPUT") }),
                    el(".checkbox-container",
                        messageTermCheckbox = el("input", { type: "checkbox" }),
                        el("label", msg("MATE_DETAIL_MESSAGE_FORM_TERMS")),
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
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}