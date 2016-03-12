import {Action} from '../lib/action';
import {getRequest} from '../service';
import Store from '../store/store';

export default class LoadItems implements Action {
    constructor() { }

    execute() {
        let {items} = Store.getState();
        
        return getRequest('/mailfolders/inbox/messages?$top=10').then((response) => {
            let messages = response.value;
            
            for (let message of messages) {
                items.push({
                    id: message["Id"],
                    subject: message["Subject"],
                    text: message["Body"]["Content"]
                });    
            }
        })
    }
}