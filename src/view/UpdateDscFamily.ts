import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import DSCFamilyContract from "../contracts/DSCFamilyContract";
import Layout from "./Layout";
import ViewUtil from "./ViewUtil";

export default class UpdateDscFamily implements View {

    private id: number;

    private container: DomNode;
    private linkInput: DomNode<HTMLInputElement>;
    private nameInput: DomNode<HTMLInputElement>;
    private descriptionInput: DomNode<HTMLInputElement>;
    private image: string | undefined;

    constructor(params: ViewParams) {
        this.id = parseInt(params.id, 10);

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
                    el("label", msg("DSC_FAMILY_DETAIL_INPUT2")),
                    this.linkInput = el("input", { placeholder: msg("DSC_FAMILY_DETAIL_INPUT2") }),
                ),
                el(".introduction-container",
                    el(".input-container",
                        el("label", msg("DSC_FAMILY_DETAIL_TITLE1")),
                        this.nameInput = el("input", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE1") }),
                    ),
                    el(".input-container",
                        el("label", "Image"),
                        preview = el("img"),
                        el("input", {
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
                                    preview.domElement.src = this.image;
                                }, false);
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            },
                        }),
                    ),
                ),
                el(".input-container",
                    el("label", msg("DSC_FAMILY_DETAIL_TITLE3")),
                    this.descriptionInput = el("textarea", { placeholder: msg("DSC_FAMILY_DETAIL_TITLE2") }),
                ),
                el(".button-wrap",
                    el("button", "수정하기", {
                        click: async () => {
                            await DSCFamilyContract.update(this.id, {
                                link: this.linkInput.domElement.value,
                                name: this.nameInput.domElement.value,
                                image: this.image,
                                description: this.descriptionInput.domElement.value,
                            });
                            setTimeout(() => ViewUtil.go("/dscFamily"), 2000);
                        },
                    }),
                ),
                el("a", "삭제하기", {
                    click: async () => {
                        await DSCFamilyContract.remove(this.id);
                        setTimeout(() => ViewUtil.go("/dscFamily"), 2000);
                    },
                }),
            ),
        ));

        this.load();
    }

    private async load() {
        const data = await DSCFamilyContract.get(this.id);
        this.linkInput.domElement.value = data.link;
        this.nameInput.domElement.value = data.name;
        this.descriptionInput.domElement.value = data.description;
        this.image = data.image;
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}