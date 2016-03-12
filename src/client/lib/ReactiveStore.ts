import {observable, transaction} from 'mobx';
import {Action, ExecuteFunction} from './Action';

export default class ReactiveStore<T> {
    private state: T = <T>observable({});
    
    getState(): T {
        return this.state;
    }
    
    dispatch = (action: Action | ExecuteFunction): void => {
        if ((<Action>action).execute) {
            transaction(() => { (<Action>action).execute(this.dispatch); });            
        } else {
            transaction(() => { (<ExecuteFunction>action)(this.dispatch); });
        }
    }
}
