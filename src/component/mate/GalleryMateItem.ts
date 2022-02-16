import { DomNode, el } from "@hanul/skynode";
import ViewUtil from "../../view/ViewUtil";

export default class GalleryMateItem extends DomNode {
    constructor(
        id: number,
        source: string,
    ) {
        super(".gallery-mate-item");
        this.append(
            el("a", { click: () => ViewUtil.go(`${id}`), },
                el("img", { src: source }),
                el(".id", `#${id}`),
            ),
        )
    }
}