import * as React from 'react';

import {observer} from 'mobx-react';

import Store from '../store/store';
import GetAuthUrl from '../actions/getAuthUrl';

@observer
export default class extends React.Component<any, any> {
    componentWillMount() {
        Store.dispatch(new GetAuthUrl());
    }
        
    render() {
        let {authUrl} = Store.getState();
        return <p>Please <a href={authUrl}>sign in</a> with your Office 365 or Outlook.com account.</p>;    
    }    
}