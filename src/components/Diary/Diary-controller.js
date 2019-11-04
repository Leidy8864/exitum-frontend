
import React from 'react';
import View from './Diary-view';

class Diary extends React.Component {
    state = {
        isConfirmed: localStorage.getItem('confirmed') || "false",
    }

    render() {
        let blockDiary =
            <div className="start-diary modal fade" id="diary" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" id="dialog" role="document">
                    <div className="modal-content" id="content-diary">
                        <div className="diary-header">
                        <button type="submit" className="add-diary" data-toggle="modal" data-target="#newdiary"><span>+</span></button>
                        <span>Empieza una agenda</span>
                        </div>
                    </div>
                </div>
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
