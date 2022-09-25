import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const { editSongCallback, hideEditSongModalCallback } = this.props;
       
        return (
            <div 
                class="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div class="modal-root" id='verify-delete-list-root'>
                        <div class="modal-north">
                            Edit Song
                        </div>
                        <div class="modal-center">
                        <div class="modal-center-content">
                        <table>
                            <tr>
                                <td>Title:</td>
                                <td><input type = "text" id = "tname" name = "text"/> </td>
                            </tr>
                            <tr>
                                <td>Artist:</td>
                                <td><input type = "text" id = "aname" name = "text"/></td>
                            </tr>
                            <tr>
                                <td>You Tube Id:</td>
                                <td><input type = "text" id = "yname" name = "text"/></td>
                            </tr>
                        </table>
                    </div>

                        </div>
                        <div class="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                class="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                class="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}