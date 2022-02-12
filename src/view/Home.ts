import { DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";
import Layout from "./Layout";

export default class Home implements View {
    private container: DomNode;

    constructor() {
        Layout.current.title = "홈";
        Layout.current.content.append(this.container = el(".home-view",
            el("header",
                el(".content",
                    el("img.logo", { src: "/images/logo.svg" }),
                    el(".intro", "Welcome to Doge Sound Club!"),
                    el(".description", "도지사운드클럽은 NFT를 이용한 거버넌스로 운영되는 NFT 수집가들의 사교 모임입니다.\nMATES를 이용해서 클럽에 가입하고 투표할 수 있습니다."),
                    el("button", "Enter"),
                ),
            ),
            el("section",
                el(".dogesound",
                    el("img.talker", { src: "https://storage.googleapis.com/dsc-mate/336/dscMate-3.png" }),
                    el(".content",
                        el(".title", "경) 제 8회 개소리 우승자 🐶🐕👻"),
                        el(".old-sound", "Announcing the 7th best Doge Sound!"),
                        el(".sound", `"대치동 APT 사는것 보다 도사클 10장 있는게 낫지"`),
                        el("a.address", "0xcB295aB4898DF1B080e92E1b70708A09Bc113073"),
                        el(".warning", "* 주의 : 위는 탈중앙화된 방식으로 DSC 홀더들에게 최다 득표를 받은 문구가 자동으로 표시된 것입니다. DSC 개발팀의 뜻과 무관할 수 있습니다."),
                    ),
                ),
                el("hr"),
                el(".feature",
                    el(".title", "도지사운드클럽 특징 👻😻🐕"),
                    el(".content",
                        el(".card",
                            el("img", { src: "/images/view/home/feature1.png" }),
                            el(".title", "우리는 개소리에 진심인 자들입니다"),
                            el(".content", "2주마다 스마트 컨트랙트를 이용해 최고의 도지사운드(개소리)를 선정합니다."),
                        ),
                        el(".card",
                            el("img", { src: "/images/view/home/feature2.png" }),
                            el(".title", "우리는 암호화폐를 좋아합니다."),
                            el(".content", "특히 새로운 도전들에 대한 이야기를 좋아합니다."),
                        ),
                        el(".card",
                            el("img", { src: "/images/view/home/feature3.png" }),
                            el(".title", "우리는 음악을 좋아합니다."),
                            el(".content", "음악은 개소리와 함께 자본에 대한 집착을 환기하는 수단이 됩니다. dsc 개발팀은 DJ SET과 로우파이 비디오를 업로드합니다."),
                        ),
                    ),
                ),
                el("hr"),
                el(".buy-mate",
                    el(".card",
                        el(".content",
                            el(".title", "Buy Mate"),
                            el(".content", "메이트는 세계 최대 NFT 거래소인 OPENSA에서 구매할 수 있습니다. 국내 MIX 기반 거래소인 KLUBB에서도 구매할 수 있습니다."),
                        ),
                        el(".button-wrap",
                            el("button", "OPENSEA"),
                            el("button", "KLUBS"),
                        ),
                    ),
                    el(".warning", "*최근에는 짝짓기를 복제하는 가짜 NFT가 많이 있다. OpenC의 공식 주소는 https://opensea.io/collection/dogesoundclub-mates이다.\n*주소를 꼭 확인하시고 부정 프로젝트에 주의하시기 바랍니다."),
                ),
                el("hr"),
                el(".nft",
                    el(".title", "NFT - DOGESOUNDCLUB MATES 😜😘💻"),
                ),
                el("hr"),
                el(".mission",
                    el(".title", "사명 😜💻🏁"),
                    el("img", { src: "/images/view/home/mission.png" }),
                    el(".content",
                        el(".title", "DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다."),
                        el(".content", "DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다. DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다. DSC의 사명은 NFT에 기반한 거버넌스를 통해 사회에 선한 영향력을 결집해내는데에 있습니다."),
                    ),
                ),
                el("hr"),
                el(".team",
                    el(".title", "TEAM 😏🤗🤔"),
                    el(".content",
                        el(".card",
                            el(".title", "ARVITOR (Manager)"),
                            el(".content", "그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다."),
                        ),
                        el(".card",
                            el(".title", "HANUL (Dev)"),
                            el(".content", "그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다."),
                        ),
                        el(".card",
                            el(".title", "YONG JIN (Artist)"),
                            el(".content", "그림을 조합하는 프로그램을 만들었습니다. 슈퍼 컬렉터가 되고 싶습니다."),
                        ),
                    ),
                ),
                el("hr"),
                el(".partnership",
                    el(".title", "PARTNERSHIP 🏖🏛💿"),
                    el(".content",
                        el(".title", "DSC Lable"),
                        el(".content",
                            el("img", { src: "/images/view/home/partnership/ozys.png" }),
                            el("img", { src: "/images/view/home/partnership/codestates.png" }),
                            el("img", { src: "/images/view/home/partnership/clonesNeverDie.png" }),
                            el("img", { src: "/images/view/home/partnership/asiaNftNow.png" }),
                            el("img", { src: "/images/view/home/partnership/nftz.png" }),
                            el("img", { src: "/images/view/home/partnership/metakongz.png" }),
                        ),
                        el(".title", "GOVERNANCE PARTNERSHIP"),
                        el(".content",
                            el("img", { src: "/images/view/home/partnership/casesByKate.png" }),
                            el("img", { src: "/images/view/home/partnership/animalsPunks.png" }),
                            el("img", { src: "/images/view/home/partnership/a.c.b.png" }),
                            el("img", { src: "/images/view/home/partnership/klits.png" }),
                            el("img", { src: "/images/view/home/partnership/crytorus.png" }),
                        ),
                        el(".title", "GOVERNANCE PARTNERSHIP"),
                        el(".content",
                            el("img", { src: "/images/view/home/partnership/klayRabbit.png" }),
                            el("img", { src: "/images/view/home/partnership/3pm.png" }),
                            el("img", { src: "/images/view/home/partnership/cuna.png" }),
                            el("img", { src: "/images/view/home/partnership/catTownPunks.png" }),
                            el("img", { src: "/images/view/home/partnership/rit.png" }),
                            el("img", { src: "/images/view/home/partnership/kepler.png" }),
                        ),
                    ),
                ),
                el("hr"),
                el(".contact",
                    el(".title", "CONTACT ⌚️☎️📠"),
                    el(".content",
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/kakaotalk.svg" }),
                            el(".content",
                                el(".title", "Kakaotalk"),
                                el(".caption", "PASSWORD : 10000"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/discord.svg" }),
                            el(".content",
                                el(".title", "Discord"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/telegram.svg" }),
                            el(".content",
                                el(".title", "Telegram"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/twitter.svg" }),
                            el(".content",
                                el(".title", "Twitter"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/instagram.svg" }),
                            el(".content",
                                el(".title", "Instagram"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/medium.svg" }),
                            el(".content",
                                el(".title", "Medium"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/github.svg" }),
                            el(".content",
                                el(".title", "Github"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/youtube.svg" }),
                            el(".content",
                                el(".title", "Youtube"),
                            ),
                        ),
                        el("a.card",
                            el("img", { src: "/images/view/home/contact/email.svg" }),
                            el(".content",
                                el(".title", "E-mail"),
                                el(".caption", "dogesoundclub @ gmail.com"),
                            ),
                        ),
                    ),
                ),
                el("hr"),
                el(".tweets",
                    el(".title", "TWEETS 😊😍💕"),
                    el("a.twitter-timeline", {
                        "data-theme": "dark",
                        "data-height": "600",
                        href: "https://twitter.com/dogesoundclub?ref_src=twsrc%5Etfw",
                    }),
                    el("script", {
                        async: "async",
                        src: "https://platform.twitter.com/widgets.js",
                        charset: "utf-8"
                    }),
                ),
            ),
        ));
    }

    public changeParams(params: ViewParams, uri: string): void {
    }

    public close(): void {
        this.container.delete();
    }
}