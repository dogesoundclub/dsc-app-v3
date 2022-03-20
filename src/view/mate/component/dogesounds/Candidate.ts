import { DomNode, el } from "@hanul/skynode";
import msg from "msg.js";
import CandidateList from "./CandidateList";

export default class Candidate extends DomNode {

    private radio: DomNode<HTMLInputElement> | undefined;

    constructor(
        list: CandidateList, index: number, votable: boolean, dogeSound: string, votes: number, checked: boolean,
    ) {
        super("li.candidate");
        if (votable === true) {
            this.radio = el<HTMLInputElement>("input", {
                name: "dogesounds-candidate-radio",
                type: "radio",
                change: () => {
                    list.selected = index;
                },
            }).appendTo(this);
            if (checked === true) {
                this.radio.domElement.checked = true;
                list.selected = index;
            }
        }
        this.append(
            el("div.doge-sound", dogeSound, {
                click: () => {
                    if (this.radio !== undefined && this.radio.domElement.checked !== true) {
                        this.radio.domElement.checked = true;
                        list.selected = index;
                    }
                },
            }),
            el("div.votes", `${msg("DOGESOUNDS_VOTE_COUNT")} : ${votes}`),
        );
    }
}
