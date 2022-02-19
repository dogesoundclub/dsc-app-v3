import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import MessageContract from "../../contracts/MessageContract";
import MateMessage from "./MateMessage";

export default class MateMessageList extends DomNode {

    private messageList: DomNode;

    constructor(private mateId: number) {
        super(".mate-message-list");
        this.append(
            el("table",
                el("thead",
                    el("tr",
                        el("th", "BLOCK #", { width: "15%" }),
                        el("th", "NAME", { width: "15%" }),
                        el("th", "MSG", { width: "45%" }),
                        el("th", "HOLDER ADDR", { width: "25%" }),
                    ),
                ),
                this.messageList = el("tbody"),
            ),
        );
        this.loadMessages();
    }

    private async loadMessages() {
        const count = (await MessageContract.recordCount(this.mateId)).toNumber();
        SkyUtil.repeat(count, (index) => {
            this.messageList.append(new MateMessage(this.mateId, index));
        });
    }
}
