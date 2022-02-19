import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import { View, ViewParams } from "skyrouter";
import AttributesContract from "../contracts/AttributesContract";
import ImageContract from "../contracts/ImageContract";
import Layout from "./Layout";

export default class FullyOn implements View {

    private container: DomNode;
    private idInput: DomNode<HTMLInputElement>;
    private image: DomNode<HTMLImageElement>;
    private attributeDisplay: DomNode;

    constructor() {
        Layout.current.title = msg("FULLY_ON_CHAIN_TITLE");
        Layout.current.content.append(this.container = el(".fully-on-view",
            el("header",
                el("h1", msg("FULLY_ON_CHAIN_TITLE")),
            ),
            el("section",
                el("hr"),
                el("article",
                    el("img", { src: "/images/view/activities/bg_dsc_family.png" }),
                    el("h2", msg("FULLY_ON_CHAIN_TITLE1")),
                    el("p", msg("FULLY_ON_CHAIN_DESC1")),
                ),
                el("hr"),
                el("article",
                    el("h2", msg("FULLY_ON_CHAIN_TITLE2")),
                    el("p", msg("FULLY_ON_CHAIN_DESC2")),
                    el(".form",
                        this.idInput = el("input", { placeholder: "검색" }),
                        el("button", "보기", {
                            click: () => {
                                this.load(parseInt(this.idInput.domElement.value, 10));
                            },
                        }),
                    ),
                    el(".mate-container",
                        this.image = el("img"),
                        this.attributeDisplay = el("p", "Level 5, Frightened Mouth, Tiger, Silver Chain, Green hair in Purple Cap, Red Cross Earring, Cigarette"),
                    ),
                ),
            ),
        ));
        this.load(0);
    }

    private async load(id: number) {

        const image = await ImageContract.image(id);
        this.image.domElement.src = image;

        const attributes: any = {};
        const promises: Promise<void>[] = [];
        promises.push((async () => {
            attributes.level = `Level ${await AttributesContract.level(id)}`;
        })());
        promises.push((async () => {
            attributes.face = await AttributesContract.face(id);
        })());
        promises.push((async () => {
            attributes.faceDetailA = await AttributesContract.faceDetailA(id);
        })());
        promises.push((async () => {
            attributes.faceDetailB = await AttributesContract.faceDetailB(id);
        })());
        promises.push((async () => {
            attributes.neck = await AttributesContract.neck(id);
        })());
        promises.push((async () => {
            attributes.mouth = await AttributesContract.mouth(id);
        })());
        promises.push((async () => {
            attributes.eyes = await AttributesContract.eyes(id);
        })());
        promises.push((async () => {
            attributes.forehead = await AttributesContract.forehead(id);
        })());
        promises.push((async () => {
            attributes.headwear = await AttributesContract.headwear(id);
        })());
        promises.push((async () => {
            attributes.headwearDetail = await AttributesContract.headwearDetail(id);
        })());
        promises.push((async () => {
            attributes.ears = await AttributesContract.ears(id);
        })());
        promises.push((async () => {
            attributes.items = await AttributesContract.items(id);
        })());
        await Promise.all(promises);

        this.attributeDisplay.empty().appendText(Object.values(attributes).filter((v) => v !== "").join(", "));
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}