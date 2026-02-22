import { create } from "zustand";
/*
type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (const k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};*/

const initData = [
  [
    "1-one",
    "1-two",
    "1-three",
    "1-one",
    "1-two",
    "1-three",
    "1-one",
    "1-two",
    "1-three",
    "1-one",
    "1-two",
    "1-three",
  ],
  [
    "2-one",
    "2-two",
    "2-three",
    "2-one",
    "2-two",
    "2-three",
    "2-one",
    "2-two",
    "2-three",
    "2-one",
    "2-two",
    "2-three",
  ],
];

interface TableStore {
  data: Array<Array<any>>; //Record<string, any>;
  setCellData: (key: string, data: any) => void;
  init: (initialData: Array<Array<any>>) => void;
}

export const useTableStore = create<TableStore>((set, get) => ({
  data: initData,
  setCellData: (row, col, dat) => {
    const oldData = get().data;
    oldData[row][col] = dat;
    set({ data: oldData });
  },
  init: (initialData) => set({ data: initialData }),
}));
/*
const createTableStore = (initialState: any) => {
  const useTableStoreBase = create<TableStore>((set, get) => ({
    data: initialState,
    setCellData: (key: string, data: any) => set({ [key]: data }),
  }));

  return createSelectors(useTableStoreBase);
};*/
