import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import DSCFamilyContract from "../../../../contracts/DSCFamilyContract";
import Wallet from "../../../../klaytn/Wallet";
import Layout from "../Layout";
import ViewUtil from "../../../ViewUtil";

export default class DscFamily implements View {

    private container: DomNode;

    constructor() {
        Layout.current.title = msg("DSC_FAMILY_TITLE");
        Layout.current.content.append(this.container = el(".dsc-family-view",
            el("header",
                el("h1", msg("DSC_FAMILY_TITLE")),
                el("h2", msg("DSC_FAMILY_DESC")),
                el("button", msg("REGISTER_BUTTON"), {
                    click: () => ViewUtil.go("/dscFamily/create"),
                }),
            ),
        ));
        this.load();
    }

    private async load() {
        const owner = await Wallet.loadAddress();
        const count = (await DSCFamilyContract.count()).toNumber();
        for (let id = 0; id < count; id += 1) {
            const data = await DSCFamilyContract.get(id);
            if (data !== undefined) {
                this.container.append(
                    el("section",
                        el("hr"),
                        el("header",
                            data.owner === owner ? el("button", "My Channel") : undefined,
                            el("h2", data.name),
                            data.owner === owner ? el("a", "Edit", {
                                click: () => ViewUtil.go(`/dscFamily/${id}/update`),
                            }) : undefined,
                        ),
                        el("article",
                            el("img", { src: data.image }),
                            el(".content",
                                el("a", data.link, { href: data.link, target: "_blank" }),
                                el("p", data.description),
                            ),
                        ),
                    ),
                );
            }
        }
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}