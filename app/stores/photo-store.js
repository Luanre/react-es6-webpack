import AppDispatcher from '../dispatchers/app.dispatcher.js';
import {EventEmitter} from 'events';

let photos = [
    {caption: 'Японский макак', src: 'https://img6-fotki.yandex.net/get/6847/63641203.1f/0_STATIC1d9d96_771951f6_X4L'},
    {caption: '#Питер', src: 'https://img-fotki.yandex.ru/get/3305/47042681.38/0_c2635_ee3419c2_XXL'}
];

class PhotoStore extends EventEmitter {

    getState() {
        return photos;
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}

let _PhotoStore = new PhotoStore();

export default _PhotoStore;

AppDispatcher.register((payload) => {
    let action = payload.action;
    switch(action.type) {
        default:
            break;
    }
});