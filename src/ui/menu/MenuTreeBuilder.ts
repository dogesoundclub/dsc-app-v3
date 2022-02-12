import { DomNode, el } from "@hanul/skynode";
import { SkyRouter } from "skyrouter";
import ViewUtil from "../../view/ViewUtil";

interface Menu {
    uri: string;
    name: string;
    children?: {
        uri: string;
        name: string;
    }[];
}

class MenuTreeBuilder {

    public build(menus: Menu[], parent?: Menu) {
        const lis: DomNode[] = parent === undefined ? [] : [el("li.parent",
            el(`a${location.pathname === `/${parent.uri}` ? ".on" : ""}`,
                parent.name,
                { click: () => ViewUtil.go(`/${parent.uri}`) },
            ),
        )];
        for (const menuItem of menus) {
            const li = el("li",
                el(`a${location.pathname === `/${menuItem.uri}` ? ".on" : ""}`,
                    menuItem.name,
                    { click: () => ViewUtil.go(`/${menuItem.uri}`) },
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
