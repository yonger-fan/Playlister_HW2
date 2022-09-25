import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const { song,deleteCallback, hideDeleteSongModalCallback } = this.props;
        let name = "";
        if (song) {
            name = song.title;
        }
    
        return (
            <div 
                class="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-list-root'>
                        <div class="modal-north">
                            Remove Song?
                        </div>
                        <div class="modal-center">
                            <div class="modal-center-content">
                                Are you aure you wish to permanently remove {name} form the playlist?
                            </div>
                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                class="modal-button" 
                                value='Confirm'
                                onClick={deleteCallback}
                                 />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}