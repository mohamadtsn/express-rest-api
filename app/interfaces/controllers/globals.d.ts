declare function controller<T = new() => any, M = Function | string>(controller: T, method: string): T<M>;
