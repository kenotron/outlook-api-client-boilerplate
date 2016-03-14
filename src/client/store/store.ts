import ReactiveStore from '../lib/reactiveStore';
import {extendObservable} from 'mobx';
import {StateTree} from './schema';

var Store = new ReactiveStore<StateTree>();

extendObservable(Store.getState(), {
    items: [],
    authUrl: null
});

export default Store;
