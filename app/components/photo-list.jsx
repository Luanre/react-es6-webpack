import React from 'react';
import Photo from '../components/photo.jsx';
import PhotoStore from '../stores/photo-store.js';

class PhotoList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        var photos, allPhotos;

        allPhotos = [];
        photos = PhotoStore.getState();

        for (var i in photos) {
            allPhotos.push(<Photo src={photos[i].src} caption={photos[i].caption} />);
        }

        return <div classNams="all-photos">
            {allPhotos}
            </div>;
    }
}

export default PhotoList;