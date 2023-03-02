import { DomNode, el } from "@hanul/skynode";
import SkyUtil from "skyutil";
import MessageContract from "../../../../contracts/MessageContract";
import MateMessage from "./MateMessage";

export default class MateMessageList extends DomNode {

    private messageList: DomNode;

    constructor(private mateId: number) {
        super(".mate-message-list");
        this.append(
            el("table",
                el("thead",
                    el("tr",
                        el("th.block", "BLOCK #", { width: "15%" }),
                        el("th.name", "NAME", { width: "15%" }),
                        el("th.msg", "MSG", { width: "45%" }),
                        el("th.address", "HOLDER ADDR", { width: "25%" }),
                    ),
                ),
                this.messageList = el("tbody"),{style: {"table-layout": "fixed", "word-break" : "break-all" } },
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
