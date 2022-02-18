"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const Layout_1 = __importDefault(require("./Layout"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Home {
    constructor() {
        Layout_1.default.current.title = "홈";
        Layout_1.default.current.content.append(this.container = (0, skynode_1.el)(".home-view", (0, skynode_1.el)("header", (0, skynode_1.el)(".content", (0, skynode_1.el)("img.logo", { src: "/images/logo.svg" }), (0, skynode_1.el)(".intro", "Welcome to Doge Sound Club!"), (0, skynode_1.el)(".description", "도지사운드클럽은 NFT를 이용한 거버넌스로 운영되는 NFT 수집가들의 사교 모임입니다.\nMATES를 이용해서 클럽에 가입하고 투표할 수 있습니다."), (0, skynode_1.el)("button", "Enter", { click: () => ViewUtil_1.default.go("/mates") }))), (0, skynode_1.el)("section", (0, skynode_1.el)(".dogesound", (0, skynode_1.el)("img.talker", { src: "https://storage.googleapis.com/dsc-mate/336/dscMate-3.png" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "경) 제 8회 개소리 우승자 🐶🐕👻"), (0, skynode_1.el)(".old-sound", "Announcing the 7th best Doge Sound!"), (0, skynode_1.el)(".sound", `"대치동 APT 사는것 보다 도사클 10장 있는게 낫지"`), (0, skynode_1.el)("a.address", "0xcB295aB4898DF1B080e92E1b70708A09Bc113073"), (0, skynode_1.el)(".warning", "* 주의 : 위는 탈중앙화된 방식으로 DSC 홀더들에게 최다 득표를 받은 문구가 자동으로 표시된 것입니다. DSC 개발팀의 뜻과 무관할 수 있습니다."))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".feature", (0, skynode_1.el)(".title", "도지사운드클럽 특징 👻😻🐕"), (0, skynode_1.el)(".content", (0, skynode_1.el)(".card", (0, skynode_1.el)("img", { src: "/images/view/home/feature1.png" }), (0, skynode_1.el)(".title", "우리는 개소리에 진심인 자들입니다"), (0, skynode_1.el)(".content", "2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다.")), (0, skynode_1.el)(".card", (0, skynode_1.el)("img", { src: "/images/view/home/feature2.png" }), (0, skynode_1.el)(".title", "우리는 암호화폐를 좋아합니다."), (0, skynode_1.el)(".content", "특히 새로운 도전들에 대한 이야기를 좋아합니다.")), (0, skynode_1.el)(".card", (0, skynode_1.el)("img", { src: "/images/view/home/feature3.png" }), (0, skynode_1.el)(".title", "우리는 음악을 좋아합니다."), (0, skynode_1.el)(".content", "음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다.")))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".buy-mate", (0, skynode_1.el)(".card", (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Buy Mate"), (0, skynode_1.el)(".content", "메이트는 세계 최대 NFT 거래소인 OPENSA에서 구매할 수 있습니다. 국내 MIX 기반 거래소인 KLUBB에서도 구매할 수 있습니다.")), (0, skynode_1.el)(".button-wrap", (0, skynode_1.el)("a", "OPENSEA", { href: "https://opensea.io/collection/dogesoundclub-mates", target: "_blank" }), (0, skynode_1.el)("a", "KLUBS", { href: "https://klu.bs/pfp/0xE47E90C58F8336A2f24Bcd9bCB530e2e02E1E8ae", target: "_blank" }))), (0, skynode_1.el)(".warning", "*최근에는 짝짓기를 복제하는 가짜 NFT가 많이 있다. OpenC의 공식 주소는 https://opensea.io/collection/dogesoundclub-mates이다.\n*주소를 꼭 확인하시고 부정 프로젝트에 주의하시기 바랍니다.")), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".nft", (0, skynode_1.el)(".title", "NFT - DOGESOUNDCLUB MATES 😜😘💻"), (0, skynode_1.el)("section", (0, skynode_1.el)(".mate-container", (0, skynode_1.el)("img", { src: "/images/shared/img/mate-mock.png" })), (0, skynode_1.el)("article", (0, skynode_1.el)("p", "DSC MATES are 10,000 computer program generated 24*24 pixel art\ncharacters. They are issued as NFTs, making it easy to trade ownership of them."), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("button", "Go to see more about NFT", { click: () => ViewUtil_1.default.go("/mates") }), (0, skynode_1.el)("button", "What can you do with this?", { click: () => ViewUtil_1.default.go("/activities") })), (0, skynode_1.el)("hr"), (0, skynode_1.el)("p", "Mates can be purchased at Opensea."), (0, skynode_1.el)(".caption", "(the world's largest NFT marketplace)"), (0, skynode_1.el)(".button-container", (0, skynode_1.el)("a", "Go to OPENSEA", { href: "https://opensea.io/collection/dogesoundclub-mates", target: "_blank" })), (0, skynode_1.el)(".image-wrap", (0, skynode_1.el)("img", { src: "/images/logo.svg" }))))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".mission", (0, skynode_1.el)(".title", "사명 😜💻🏁"), (0, skynode_1.el)("iframe.video", {
            width: "100%",
            height: "590",
            src: "https://www.youtube.com/embed/nd-ycvvOCLo",
            title: "YouTube video player",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다."), (0, skynode_1.el)(".content", "DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다. DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다. DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다."))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".team", (0, skynode_1.el)(".title", "TEAM 😏🤗🤔"), (0, skynode_1.el)(".content", (0, skynode_1.el)(".card", (0, skynode_1.el)(".title", "ARVITOR (Manager)"), (0, skynode_1.el)(".content", "그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다.")), (0, skynode_1.el)(".card", (0, skynode_1.el)(".title", "HANUL (Dev)"), (0, skynode_1.el)(".content", "그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다.")), (0, skynode_1.el)(".card", (0, skynode_1.el)(".title", "YONG JIN (Artist)"), (0, skynode_1.el)(".content", "그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다.")))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".partnership", (0, skynode_1.el)(".title", "PARTNERSHIP 🏖🏛💿"), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "DSC Lable"), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/view/home/partnership/ozys.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/codestates.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/clonesNeverDie.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/asiaNftNow.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/nftz.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/metakongz.png" })), (0, skynode_1.el)(".title", "GOVERNANCE PARTNERSHIP"), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/view/home/partnership/casesByKate.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/animalsPunks.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/a.c.b.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/klits.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/crytorus.png" })), (0, skynode_1.el)(".title", "GOVERNANCE PARTNERSHIP"), (0, skynode_1.el)(".content", (0, skynode_1.el)("img", { src: "/images/view/home/partnership/klayRabbit.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/3pm.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/cuna.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/catTownPunks.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/rit.png" }), (0, skynode_1.el)("img", { src: "/images/view/home/partnership/kepler.png" })))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".contact", (0, skynode_1.el)(".title", "CONTACT ⌚️☎️📠"), (0, skynode_1.el)(".content", (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/discord.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Discord")), {
            href: "https://discord.com/invite/79CqdTdu8w",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/telegram.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Telegram")), {
            href: "https://t.me/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/twitter.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Twitter")), {
            href: "https://twitter.com/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/medium.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Medium")), {
            href: "https://medium.com/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/github.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Github")), {
            href: "https://github.com/dogesoundclub",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/youtube.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "Youtube")), {
            href: "https://www.youtube.com/channel/UCnt1jjJpL-YdHNcooykdY4w",
            target: "_blank",
        }), (0, skynode_1.el)("a.card", (0, skynode_1.el)("img", { src: "/images/view/home/contact/email.svg" }), (0, skynode_1.el)(".content", (0, skynode_1.el)(".title", "E-mail"), (0, skynode_1.el)(".caption", "dogesoundclub @ gmail.com")), {
            href: "mailto:support@ayias.io",
        }))), (0, skynode_1.el)("hr"), (0, skynode_1.el)(".tweets", (0, skynode_1.el)(".title", "TWEETS 😊😍💕"), (0, skynode_1.el)("a.twitter-timeline", {
            "data-theme": "dark",
            "data-height": "600",
            href: "https://twitter.com/dogesoundclub?ref_src=twsrc%5Etfw",
        }), (0, skynode_1.el)("script", {
            async: "async",
            src: "https://platform.twitter.com/widgets.js",
            charset: "utf-8"
        })))));
    }
    changeParams(params, uri) {
    }
    close() {
        this.container.delete();
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map