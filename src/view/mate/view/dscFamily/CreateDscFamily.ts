import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import CollapsibleItem from "../../component/CollapsibleItem";
import CollapsibleSelect from "../../component/CollapsibleSelect";
import DSCFamilyContract from "../../../../contracts/DSCFamilyContract";
import Layout from "../Layout";
import ViewUtil from "../../../ViewUtil";

export default class CreateDscFamily implements View {

    private container: DomNode;
    private linkInput: DomNode<HTMLInputElement>;
    private nameInput: DomNode<HTMLInputElement>;
    private descriptionInput: DomNode<HTMLInputElement>;
    private image: string | undefined;

    constructor() {
        Layout.current.title = msg("DSC_FAMILY_TITLE");

        let preview: DomNode<HTMLImageElement>;
        Layout.current.content.append(this.container = el(".create-dsc-family-view",
            el("header",
                el("h1", msg("DSC_FAMILY_TITLE")),
                el("h2", msg("DSC_FAMILY_DESC")),
            ),
            el("section",
                el("hr"),
                el(".input-container",
                    el("label", msg("DSC_FAMILY_DETAIL_TITLE1")),
                    this.nameInput = el("input", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE1") }),
                ),
                el(".channel-container",
                    el(".input-container",
                        el("label", msg("DSC_FAMILY_DETAIL_TITLE2")),
                        new CollapsibleSelect("Channel"),
                    ),
                    el(".input-container",
                        el("label", msg("DSC_FAMILY_DETAIL_INPUT2")),
                        this.linkInput = el("input", { placeholder: msg("DSC_FAMILY_DETAIL_INPUT2") }),
                    ),
                ),
                el(".introduction-container",
                    el(".input-container",
                        el("label", msg("DSC_FAMILY_DETAIL_TITLE3")),
                        this.descriptionInput = el("textarea", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE2") }),
                    ),
                    el(".file-box",
                        el("h3", "Image"),
                        el("label",
                            el("img", { src: "/images/shared/icn/icn_plus.svg", width: "34" }),
                            preview = el(".preview"),
                            el("input.image-input", {
                                placeholder: msg("DSC_FAMILY_DETAIL_TITLE4"),
                                type: "file",
                                change: (event) => {
                                    const file = event.target.files[0];
                                    const reader = new FileReader();
                                    reader.addEventListener("load", async () => {
                                        const result = await fetch(`https://api.dogesound.club/dscfamily/uploadimage`, {
                                            method: "POST",
                                            body: reader.result as string,
                                        });
                                        this.image = await result.text();
                                        preview.style({
                                            backgroundImage: `url(${this.image})`
                                        });
                                    }, false);
                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                },
                            }),
                        ),
                    ),
                ),
                el(".button-wrap",
                    el("button", msg("REGISTER_BUTTON"), {
                        click: async () => {
                            await DSCFamilyContract.add({
                                link: this.linkInput.domElement.value,
                                name: this.nameInput.domElement.value,
                                image: this.image,
                                description: this.descriptionInput.domElement.value,
                            });
                            setTimeout(() => ViewUtil.go("/dscFamily"), 2000);
                        },
                    }),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        if (this.container.deleted !== true) {
            this.container.delete();
        }
    }
}