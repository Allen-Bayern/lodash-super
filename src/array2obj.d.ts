declare function array2obj<
  T extends Record<K, PropertyKey> & Record<V, any>,
  K extends string = 'key',
  V extends string = 'value'
>(array: T[], key?: K, value?: V): Record<T[K], T[V]>;

export default array2obj;
