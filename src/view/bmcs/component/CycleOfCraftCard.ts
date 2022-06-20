import { DomNode, el } from "@hanul/skynode";
import CommonUtil from "../../../CommonUtil";
import CycleContract from "../../../contracts/CycleContract";
import Klaytn from "../../../klaytn/Klaytn";
import Wallet from "../../../klaytn/Wallet";
import Alert from "../../shared/Alert";
import ViewUtil from "../../ViewUtil";
import CraftLoading from "./craft-loading/CraftLoading";

export default class CycleOfCraftCard extends DomNode {
  constructor(
    id: number,
    metadata: any,
    currentBlock: number,
    startBlock: number,
    level: number,
    claimableCount: number
  ) {
    super(".cycle-of-craft-card");

    if (startBlock === 0 || level === 0) {
      // if (true) {
      level = parseInt(
        metadata.attributes
          .find((a: any) => a.trait_type === "Crafting Speed")
          ?.value.substring("Level ".length)
      );
      this.append(
        el(
          ".image-container",
          el(
            "img",
            { src: metadata.image, alt: "bmcs" },
            { click: () => ViewUtil.go(`/bmcs/mates/${id}`) }
          ),
          new CraftLoading()
        ),
        el("hr"),
        el(
          ".info-container",
          // el("img", { src: metadata.image, alt: "bmcs" }, { click: () => ViewUtil.go(`/bmcs/mates/${id}`) }),
          el(".title", metadata.name),
          // el("hr"),
          el("a", "채굴 시작하기", {
            click: async () => {
              const owner = await Wallet.loadAddress();
              if (owner !== undefined) {
                const startBlock = await Klaytn.loadBlockNumber();
                const results = await (
                  await fetch(
                    "https://api.dogesound.club/sign-set-level?" +
                      new URLSearchParams({
                        owner,
                        id: String(id),
                        startBlock: String(startBlock),
                        speed: String(level),
                      })
                  )
                ).text();
                await CycleContract.setLevel(id, startBlock, level, results);
                ViewUtil.waitTransactionAndRefresh();
              }
              console.log("clicked");
            },
          }),
          el(
            ".progress-container",
            // new CraftLoading(),
            el(".progress"),
            el(
              ".content",
              el("p", "새로 얻은 BMCS는 채굴 시작 트랜잭션이 필요합니다.")
            )
          )
        ),
        el(
          ".mobile-info-container",
          el(
            ".info-container",
            // el("img", { src: metadata.image, alt: "bmcs" }, { click: () => ViewUtil.go(`/bmcs/mates/${id}`) }),
            el(".title", metadata.name),
            // el("hr"),

            el(
              ".progress-container",
              // new CraftLoading(),
              el(".progress"),
              el(
                ".content",
                el("p", "새로 얻은 BMCS는 채굴 시작 트랜잭션이 필요합니다.")
              )
            )
          ),
          el("a", "채굴 시작하기", {
            click: async () => {
              const owner = await Wallet.loadAddress();
              if (owner !== undefined) {
                const startBlock = await Klaytn.loadBlockNumber();
                const results = await (
                  await fetch(
                    "https://api.dogesound.club/sign-set-level?" +
                      new URLSearchParams({
                        owner,
                        id: String(id),
                        startBlock: String(startBlock),
                        speed: String(level),
                      })
                  )
                ).text();
                await CycleContract.setLevel(id, startBlock, level, results);
                ViewUtil.waitTransactionAndRefresh();
              }
              console.log("clicked");
            },
          })
        )
      );
    } else {
      let speed = 0;
      if (level === 1) {
        speed = 1;
      } else if (level === 2) {
        speed = 2;
      } else if (level === 3) {
        speed = 3;
      } else if (level === 4) {
        speed = 4;
      } else if (level === 5) {
        speed = 5;
      } else if (level === 6) {
        speed = 10;
      } else if (level === 7) {
        speed = 10;
      }

      const pointPerEngine = 60 * 86400;
      const acc = ((currentBlock - startBlock) * speed) % pointPerEngine;

      let bar;
      let mobileBar;
      this.append(
        el(
          ".image-container",
          el(
            "img",
            { src: metadata.image, alt: "bmcs" },
            { click: () => ViewUtil.go(`/bmcs/mates/${id}`) }
          ),
          new CraftLoading()
        ),
        el("hr"),
        el(
          ".info-container",
          el(".title", metadata.name),
          el(
            ".content",
            el(
              ".text-cotnainer",
              el(".title", "휙득까지 남은 Block"),
              el(
                "p",
                CommonUtil.numberWithCommas(
                  String((pointPerEngine - acc) / speed)
                )
              )
            ),
            el(
              ".text-cotnainer",
              el(".title", "제작 완료된 엔진 수"),
              el("p", CommonUtil.numberWithCommas(String(claimableCount)))
            )
          ),
          el(".progress-container", el(".progress", (bar = el(".bar")))),
          el("a", "엔진 받기", {
            click: async () => {
              if (claimableCount === 0) {
                new Alert("아직 받을 수 있는 엔진이 없습니다.");
              } else {
                await CycleContract.claim(id, claimableCount);
                ViewUtil.waitTransactionAndRefresh();
              }
            },
          })
        ),
        el(
          ".mobile-info-container",
          el(
            ".content",
            el(
              ".title-container",
              el(".title", metadata.name),
              el(
                ".text-cotnainer",
                el(".title", "휙득까지 남은 Block"),
                el(
                  "p",
                  CommonUtil.numberWithCommas(
                    String((pointPerEngine - acc) / speed)
                  )
                )
              )
            ),
            el(
              ".sub-container",
              el(
                ".progress-container",
                el(".progress", (mobileBar = el(".bar")))
              ),
              el(
                ".text-cotnainer",
                el(".title", "제작 완료된 엔진 수"),
                el("p", CommonUtil.numberWithCommas(String(claimableCount)))
              )
            )
          ),
          el("a", "엔진 받기", {
            click: async () => {
              if (claimableCount === 0) {
                new Alert("아직 받을 수 있는 엔진이 없습니다.");
              } else {
                await CycleContract.claim(id, claimableCount);
                ViewUtil.waitTransactionAndRefresh();
              }
            },
          })
        )
      );

      mobileBar.style({
        width: `${(acc / pointPerEngine) * 100}%`,
      });

      bar.style({
        width: `${(acc / pointPerEngine) * 100}%`,
      });
    }
  }
}
