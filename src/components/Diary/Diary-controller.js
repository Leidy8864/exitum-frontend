
import React from 'react';
import View from './Diary-view';

class Diary extends React.Component {
    state = {
        isConfirmed: localStorage.getItem('confirmed') || "false",
    }

    render() {
        let blockDiary =
            <div className="start-diary ">
                <button type="submit" className="add-diary" data-toggle="modal" data-target="#newdiary"><img width="50px" src={require('../../public/icons/AGENDA.png')} /></button>
            </div>
        if (this.state.isConfirmed === "false") {
            blockDiary = <br />;
        }
        return (
            <View
                blockDiary={blockDiary}
            />
        );
    }
}
export default Diary;
