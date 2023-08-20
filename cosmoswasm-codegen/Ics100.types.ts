/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export type Status = "INITIAL" | "SYNC" | "CANCEL" | "COMPLETE";
export interface DetailsResponse {
  cancel_timestamp?: Timestamp | null;
  complete_timestamp?: Timestamp | null;
  id: string;
  maker: MakeSwapMsg;
  path: string;
  status: Status;
  taker?: TakeSwapMsg | null;
  [k: string]: unknown;
}
export interface MakeSwapMsg {
  buy_token: Coin;
  create_timestamp: number;
  desired_taker: string;
  expiration_timestamp: number;
  maker_address: string;
  maker_receiving_address: string;
  sell_token: Coin;
  source_channel: string;
  source_port: string;
  timeout_height: Height;
  timeout_timestamp: number;
  [k: string]: unknown;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export interface Height {
  revision_height: number;
  revision_number: number;
  [k: string]: unknown;
}
export interface TakeSwapMsg {
  create_timestamp: number;
  order_id: string;
  sell_token: Coin;
  taker_address: string;
  taker_receiving_address: string;
  timeout_height: Height;
  timeout_timestamp: number;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  MakeSwap: MakeSwapMsg;
} | {
  TakeSwap: TakeSwapMsg;
} | {
  CancelSwap: CancelSwapMsg;
};
export interface CancelSwapMsg {
  create_timestamp: string;
  maker_address: string;
  order_id: string;
  timeout_height: HeightOutput;
  timeout_timestamp: string;
  [k: string]: unknown;
}
export interface HeightOutput {
  revision_height: string;
  revision_number: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  [k: string]: unknown;
}
export interface ListResponse {
  swaps: AtomicSwapOrder[];
  [k: string]: unknown;
}
export interface AtomicSwapOrder {
  cancel_timestamp?: Timestamp | null;
  complete_timestamp?: Timestamp | null;
  id: string;
  maker: MakeSwapMsg;
  path: string;
  status: Status;
  taker?: TakeSwapMsg | null;
  [k: string]: unknown;
}
export type QueryMsg = {
  list: {
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  list_by_desired_taker: {
    desired_taker: string;
    limit?: number | null;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  list_by_maker: {
    limit?: number | null;
    maker: string;
    start_after?: string | null;
    [k: string]: unknown;
  };
} | {
  list_by_taker: {
    limit?: number | null;
    start_after?: string | null;
    taker: string;
    [k: string]: unknown;
  };
} | {
  details: {
    id: string;
    [k: string]: unknown;
  };
};