import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Contest implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "개소리 경연 대회";
        Layout.current.content.append(this.container = el(".contest-view",
            el("header",
                el("h1", "Provincial Governor's Sound Contest Rules 🐶🎖💰"),
                el("p", "If you use more than five mates, you can submit candidates for Gaesori (if the contest is still accepting candidates). Example of Dojisound candidate: Bitcoin is mankind's biggest blunder. , DSC collects garbage.) The provincial governor's sound with the most votes is automatically posted on the main page of the web page. Mates used for candidate submission or voting cannot be used again in that vote.Dogesound competition is a dog sound contest that runs on the Clayton chain. If you use more than five mates, you can submit candidates for Gaesori. The provincial governor sound with the most votes is automatically posted on the main page of the web page. The mate you used can be used again next time. Submission or voting of provincial governor sound candidates does not affect mate ownership at all. (Example: Bitcoin is humanity's biggest blooper. Or any phrase that DSC would like)"),
                el(".warning", "* The submission or voting of provincial governor's sound candidates has no effect on mate ownership."),
                el("p", `
                The contest is always open 365 days a year. The contest consists of a total of three stages (receiving candidates, voting, and resting), and the status changes at regular time intervals. Candidates will be accepted every two weeks, 1 day (about 86,400 blocks), 1 day (about 86,400 blocks) for voting, and 12 days (about 1,036,800 blocks).

                The winner's provincial governor sound will be NFTed and delivered to the winner. Please check the NFT of the existing winners through the link below!
                `),
                el(".button-wrap",
                    el("button", "The Winner's NFT"),
                ),
            ),
            el("section",
                el("hr"),
                el("h2", "The winner of Dojisound 👑🚀✌️"),
                el("", "테이블"),
                el("hr"),
                el("h2", "Do Governor Sound Contest Status Board 🐶👍🎖"),
                el("", "voting"),
            ),
        ))
    }


    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}