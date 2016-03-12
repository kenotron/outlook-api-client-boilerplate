import * as React from 'react';
import Store from '../store/store';
import {observer} from 'mobx-react';

import LoadItems from '../actions/loadItems';

@observer
export default class Main extends React.Component<any, any> {
    componentWillMount() {
        Store.dispatch(new LoadItems());
    }
    
    render() {
        let {items} = Store.getState();
        
        return (
            <section className="main">
                {items && items.length > 0 ? items.map(item => (
                    <div>{item.subject}</div>
                )) : <div>Loading Messages</div>}
            </section>
        );
    }
}