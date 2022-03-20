"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const BrowserInfo_1 = __importDefault(require("../BrowserInfo"));
const MobileMenu_1 = __importDefault(require("../component//menu/MobileMenu"));
const PCMenu_1 = __importDefault(require("../component//menu/PCMenu"));
const ViewUtil_1 = __importDefault(require("./ViewUtil"));
class Layout {
  constructor() {
    Layout.current = this;
    let select;
    skynode_1.BodyNode.append(
      (this.container = (0, skynode_1.el)(
        ".layout",
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
            { click: () => ViewUtil_1.default.go("/") },
            (0, skynode_1.el)("img.logo", {
              align: "left",
              src: "/images/dsc.svg",
              alt: "logo",
            })
          ),
          new PCMenu_1.default(),
          (0, skynode_1.el)(
            "a.bmcs",
            { click: () => ViewUtil_1.default.go("bmcs") },
            "Go to BMCS >"
          ),
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
              (0, skynode_1.el)(".term"),
              (0, skynode_1.el)(
                ".social",
                (0, skynode_1.el)("img", {
                  src: "/images/shared/icn/icn_linktree.svg",
                }),
                (0, skynode_1.el)("a", "링크트리 바로가기", {
                  href: "https://linktr.ee/dogesoundclub",
                  target: "_blank",
                })
              )
            )
          ),
          (0, skynode_1.el)(
            ".provider",
            (0, skynode_1.el)("img", { src: "/images/view/layout/dsc.svg" }),
            (0, skynode_1.el)("p", (0, msg_js_1.default)("FOOTER_DESC")),
            (0, skynode_1.el)(
              "p",
              "Copyright @2021 DSCLabel Inc. ALL RIGHTS RESERVED."
            )
          )
        )
      ))
    );
    select.domElement.value = BrowserInfo_1.default.language;
  }
  set title(title) {
    document.title = `Doge Sound Club - ${title}`;
  }
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = Layout;
//# sourceMappingURL=Layout.js.map
