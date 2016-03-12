import {Action, DispatchFunction} from '../lib/action';
import Store from '../store/store';

export default class GetAuthUrl implements Action {
    execute(dispatch: DispatchFunction) {
        fetch('/authUrl')
            .then((response: Response) => { return response.text(); })
            .then((url: string) => {
                dispatch(() => {
                    Store.getState().authUrl = url;
                });
            })
    }
}