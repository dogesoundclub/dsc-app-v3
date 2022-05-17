import { DomNode, el } from "@hanul/skynode";
import ViewUtil from "../../ViewUtil";


export default class PageSelect extends DomNode {
    private selectedValue: DomNode;
    private ul: DomNode;

    constructor(current: string) {
        super(".select");
        this.append(
            el(".selected", {
                click: () => {
                    if (this.ul.domElement.style.display === "block") {
                        this.ul.style({
                            display: "none",
                        });
                    } else {
                        this.ul.style({
                            display: "block",
                        });
                    }
                }
            },
                this.selectedValue = el(".selected-value", current),
                el(".arrow"),
            ),
            this.ul = el("ul",
                el("li.option", "CH1 : 도지사운드클럽", {
                    click: () => {
                        this.selectedValue.empty().appendText("CH1 : 도지사운드클럽");
                        this.ul.style({
                            display: "none",
                        });
                        ViewUtil.go("/");
                    }
                }),
                el("li.option", "CH2 : 생존한 메이트들, BMCS", {
                    click: () => {
                        this.selectedValue.empty().appendText("CH2 : 생존한 메이트들, BMCS");
                        this.ul.style({
                            display: "none",
                        });
                        ViewUtil.go("/bmcs");
                    }
                }),
                el("li.disabled", "CH3 : 이계에서 온 친구들 eMATE", {
                    // click: () => {
                    //     this.selectedValue.empty().appendText("CH3 : 이계에서 온 친구들 eMATE");
                    //     this.ul.style({
                    //         display: "none",
                    //     });
                    // }
                }),
                el("li.disabled", "CH4 : 아이야스 엔진", {
                    // click: () => {
                    //     this.selectedValue.empty().appendText("CH4 : 아이야스 엔진");
                    //     this.ul.style({
                    //         display: "none",
                    //     });
                    // }
                }),
            ),
        );
    }
}