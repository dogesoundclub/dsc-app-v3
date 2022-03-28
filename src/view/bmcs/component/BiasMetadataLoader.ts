import bmcsMetadata from "./bias-metadata/bmcs.json";
import deepseaMetadata from "./bias-metadata/deepsea.json";
import poisonMetadata from "./bias-metadata/poison.json";
import rubyMetadata from "./bias-metadata/ruby.json";
import sapphireMetadata from "./bias-metadata/sapphire.json";

const metadatas = {
    bmcs: bmcsMetadata,
    deepsea: deepseaMetadata,
    poison: poisonMetadata,
    ruby: rubyMetadata,
    sapphire: sapphireMetadata,
};

class BiasMetadataLoader {

    public load(type: string, id: number) {

        const ms = (metadatas as any)[type] === undefined ? [] : (metadatas as any)[type];
        const metadata = ms.find((m: any) => m.tokenId === id);

        if (metadata !== undefined) {
            const clone = Object.assign({}, metadata);
            clone.image = `https://storage.googleapis.com/dsc-bias/bias/${type}/bia-${id}.png`;
            return clone;
        }
    }
}

export default new BiasMetadataLoader();
