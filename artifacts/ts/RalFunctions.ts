/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
} from "@alephium/web3";
import { default as RalFunctionsContractJson } from "../functions/RalFunctions.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Foo, AllStructs } from "./types";

// Custom types for the contract
export namespace RalFunctionsTypes {
  export type Fields = {
    time: bigint;
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTime: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getResult: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    doCalc: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[bigint, boolean]>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  RalFunctionsInstance,
  RalFunctionsTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as RalFunctionsTypes.Fields;
  }

  at(address: string): RalFunctionsInstance {
    return new RalFunctionsInstance(address);
  }

  tests = {
    getTime: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalFunctionsTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getTime", params);
    },
    getResult: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalFunctionsTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getResult", params);
    },
    doCalc: async (
      params: Omit<
        TestContractParamsWithoutMaps<RalFunctionsTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<[bigint, boolean]>> => {
      return testMethod(this, "doCalc", params);
    },
  };
}

// Use this object to test and deploy the contract
export const RalFunctions = new Factory(
  Contract.fromJson(
    RalFunctionsContractJson,
    "",
    "5bab07d81a5c011886a3756e6687d9cc0dc9a23093b9d09af835b0bbd8bcb30e",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class RalFunctionsInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<RalFunctionsTypes.State> {
    return fetchContractState(RalFunctions, this);
  }

  methods = {
    getTime: async (
      params?: RalFunctionsTypes.CallMethodParams<"getTime">
    ): Promise<RalFunctionsTypes.CallMethodResult<"getTime">> => {
      return callMethod(
        RalFunctions,
        this,
        "getTime",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getResult: async (
      params?: RalFunctionsTypes.CallMethodParams<"getResult">
    ): Promise<RalFunctionsTypes.CallMethodResult<"getResult">> => {
      return callMethod(
        RalFunctions,
        this,
        "getResult",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    doCalc: async (
      params?: RalFunctionsTypes.CallMethodParams<"doCalc">
    ): Promise<RalFunctionsTypes.CallMethodResult<"doCalc">> => {
      return callMethod(
        RalFunctions,
        this,
        "doCalc",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends RalFunctionsTypes.MultiCallParams>(
    calls: Calls
  ): Promise<RalFunctionsTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      RalFunctions,
      this,
      calls,
      getContractByCodeHash
    )) as RalFunctionsTypes.MultiCallResults<Calls>;
  }
}
