export type Address = string;

export interface ISocialMedia {
    name: string;
    url: string;
}
export interface NFTs {
    balance: {
        [key: string]: NFT[];
    },
    tokens: {
        [key: string]: NFT[];
    }
}

export interface NFT {
    [key: string]: any;
    result: any[];
}

export interface IModal {
    show: boolean;
    content: string;
    data?: {
        [key: string]: string | boolean | number;
    };
}

export type ChainList = "eth"
    | "0x1"
    | "ropsten"
    | "0x3"
    | "rinkeby"
    | "0x4"
    | "goerli"
    | "0x5"
    | "kovan"
    | "0x2a"
    | "polygon"
    | "0x89"
    | "mumbai"
    | "0x13881"
    | "bsc"
    | "0x38"
    | "bsc testnet"
    | "0x61"
    | "avalanche"
    | "0xa86a"
    | "avalanche testnet"
    | "0xa869"
    | "fantom"
    | "0xfa";

export interface INftOwnerCollection {
    status?: string;
    total?: number;
    page?: number;
    page_size?: number;
    cursor?: string;
    result?: INftOwner[];
};
export interface INftOwner {
    /**
     * @description The address of the contract of the NFT
     * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
     */
    token_address: string;
    /**
     * @description The token id of the NFT
     * @example 15
     */
    token_id: string;
    /**
     * @description The type of NFT contract standard
     * @example ERC721
     */
    contract_type: string;
    /**
     * @description The address of the owner of the NFT
     * @example 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e
     */
    owner_of: string;
    /**
     * @description The blocknumber when the amount or owner changed
     * @example 88256
     */
    block_number: string;
    /**
     * @description The blocknumber when the NFT was minted
     * @example 88256
     */
    block_number_minted: string;
    /** @description The uri to the metadata of the token */
    token_uri?: string;
    /** @description The metadata of the token */
    metadata?: string;
    /** @description when the metadata was last updated */
    synced_at?: string;
    /**
     * @description The number of this item the user owns (used by ERC1155)
     * @example 1
     */
    amount?: string;
    /**
     * @description The name of the Token contract
     * @example CryptoKitties
     */
    name: string;
    /**
     * @description The symbol of the NFT contract
     * @example RARI
     */
    symbol: string;
};
