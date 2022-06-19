"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const BrowserInfo_1 = __importDefault(require("../../../BrowserInfo"));
const MobileMenu_1 = __importDefault(require("../component/menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../component/menu/PCMenu"));
const ViewUtil_1 = __importDefault(require("../../ViewUtil"));
const PageSelect_1 = __importDefault(
  require("../../mate/component/PageSelect")
);
const msg_js_1 = __importDefault(require("msg.js"));
class BmcsLayout {
  constructor() {
    BmcsLayout.current = this;
    let select;
    skynode_1.BodyNode.append(
      (this.container = (0, skynode_1.el)(
        ".bmcs-layout",
        (0, skynode_1.el)(
          "header",
          (0, skynode_1.el)(
            ".left",
            (0, skynode_1.el)(
              "a.menu-button",
              (0, skynode_1.el)("img", {
                src: "/images/shared/icn/icn_menu.svg",
              }),
              {
                click: (event, button) => {
                  const rect = button.rect;
                  new MobileMenu_1.default({
                    left: rect.right,
                    top: rect.bottom,
                  }).appendTo(skynode_1.BodyNode);
                },
              }
            )
          ),
          (0, skynode_1.el)(
            "a",
            { click: () => ViewUtil_1.default.go("/bmcs") },
            (0, skynode_1.el)("img.logo", {
              align: "left",
              src: "/images/shared/logo/bmcs.svg",
              alt: "logo",
            })
          ),
          new PCMenu_1.default(),
          new PageSelect_1.default("CH2 : 생존한 메이트들, BMCS"),
          (select = (0, skynode_1.el)(
            "select.language-select",
            (0, skynode_1.el)("option", "🇰🇷 KOREAN", { value: "ko" }),
            {
              change: () => {
                BrowserInfo_1.default.changeLanguage(select.domElement.value);
              },
            }
          ))
        ),
        (0, skynode_1.el)(
          "main",
          (this.content = (0, skynode_1.el)(".content"))
        ),
        (0, skynode_1.el)(
          "footer",
          (0, skynode_1.el)(
            ".sidebar",
            (0, skynode_1.el)(
              ".content",
              (0, skynode_1.el)(
                ".term",
                (0, skynode_1.el)("a", { href: "/terms" }, "서비스이용약관"),
                (0, skynode_1.el)("a", "support@dsclabel.co.kr")
              ),
              (0, skynode_1.el)(
                ".social",
                (0, skynode_1.el)("a", "링크트리 바로가기", {
                  href: "https://linktr.ee/dogesoundclub",
                  target: "_blank",
                })
              )
            )
          ),
          (0, skynode_1.el)(
            ".provider",
            (0, skynode_1.el)("h6", "DSC LABEL Inc."),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("FOOTER_DESC")),
            (0, skynode_1.el)(
              "p",
              "Copyright @2022 DSC LABEL Inc. ALL RIGHTS RESERVED."
            )
          )
        )
      ))
    );
    select.domElement.value = BrowserInfo_1.default.language;
  }
  set title(title) {
    document.title = `Biased Mate - ${title}`;
  }
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = BmcsLayout;
//# sourceMappingURL=Layout.js.map
