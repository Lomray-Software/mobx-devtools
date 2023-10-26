export interface IComponentStore {
  componentName: string;
  stores: Record<string, any>;
}

export type TComponentGroupStore =
  | Record<string, IComponentStore>
  | ({
      [key: string]: TComponentGroupStore;
    } & IComponentStore);

export type IStoresState = TComponentGroupStore;
