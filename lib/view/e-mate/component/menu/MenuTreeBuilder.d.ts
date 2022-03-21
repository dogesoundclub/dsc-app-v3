import { DomNode } from "@hanul/skynode";
interface Menu {
    uri?: string;
    name: string;
    children?: {
        uri: string;
        name: string;
    }[];
    click?: () => void;
}
declare class MenuTreeBuilder {
    build(menus: Menu[], parent?: Menu): DomNode<HTMLElement>;
}
declare const _default: MenuTreeBuilder;
export default _default;
//# sourceMappingURL=MenuTreeBuilder.d.ts.map