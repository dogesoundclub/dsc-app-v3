import { DomNode, el } from "@hanul/skynode";
import CommonUtil from "../../CommonUtil";
import MessageContract from "../../contracts/MessageContract";

export default class MateMessage extends DomNode {

    constructor(private mateId: number, private index: number) {
        super("tr");
        this.load();
    }

    private async load() {
        const record = await MessageContract.record(this.mateId, this.index);
        this.append(
            el("td", record.blockNumber),
            el("td", record.name),
            el("td", record.message),
            el("td", CommonUtil.shortenAddress(record.owner)),
        );
    }
}
