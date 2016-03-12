export interface ExecuteFunction {
    (dispatch?: DispatchFunction): void;
}

export interface Action {
    execute: ExecuteFunction;
}

export type DispatchFunction = (action: Action | ExecuteFunction) => void;
