"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const skynode_1 = require("@hanul/skynode");
const msg_js_1 = __importDefault(require("msg.js"));
const Layout_1 = __importDefault(require("./Layout"));
class BuyMate {
  constructor() {
    Layout_1.default.current.title = (0, msg_js_1.default)("JOIN_CLUB_TITLE");
    Layout_1.default.current.content.append(
      (this.container = (0, skynode_1.el)(
        ".buy-mate-view",
        (0, skynode_1.el)(
          "section",
          (0, skynode_1.el)("img", {
            src: "/images/shared/img/img_mate-mock.png",
          }),
          (0, skynode_1.el)("h1", (0, msg_js_1.default)("JOIN_CLUB_TITLE")),
          (0, skynode_1.el)("p", (0, msg_js_1.default)("JOIN_CLUB_DESC")),
          (0, skynode_1.el)(
            "button",
            (0, msg_js_1.default)("JOIN_CLUB_BUTTON"),
            {
              click: () => {
                window.open(
                  "https://opensea.io/collection/dogesoundclub-mates"
                );
              },
            }
          )
        )
      ))
    );
  }
  changeParams(params, uri) {}
  close() {
    this.container.delete();
  }
}
exports.default = BuyMate;
//# sourceMappingURL=BuyMate.js.map
