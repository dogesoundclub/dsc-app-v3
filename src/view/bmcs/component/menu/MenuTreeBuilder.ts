import { DomNode, el } from "@hanul/skynode";
import { SkyRouter } from "skyrouter";
import ViewUtil from "../../../ViewUtil";

interface Menu {
    uri?: string;
    name: string;
    children?: {
        uri: string;
        name: string;
    }[];
    click?: () => void,
}

class MenuTreeBuilder {

    public build(menus: Menu[], parent?: Menu) {
        const lis: DomNode[] = parent === undefined ? [] : [el("li.parent",
            el(`a${location.pathname === `/${parent.uri}` ? ".on" : ""}`,
                parent.name,
                { click: () => parent.click !== undefined ? parent.click() : ViewUtil.go(`/${parent.uri}`), },
            ),
        )];
        for (const menuItem of menus) {
            const li = el("li",
                el(`a${location.pathname === `/${menuItem.uri}` ? ".on" : ""}`, { href: `/${menuItem.uri}` },
                    menuItem.name,
                    // { click: () => menuItem.click !== undefined ? menuItem.click() : ViewUtil.go(`/${menuItem.uri}`) },
                ),
            );
            if (menuItem.children !== undefined) {
                li.append(this.build(menuItem.children, menuItem));
            }
            lis.push(li);
        }
        return el("ul", ...lis);
    }
}

export default new MenuTreeBuilder();
