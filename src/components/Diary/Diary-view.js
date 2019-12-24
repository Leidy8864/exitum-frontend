
import React from 'react';
import './style.css';
import ModalDiary from '../Modal-diary/Modal-diary-controller';
import Reminders from '../Reminders/Reminders-controller'
function View(props) {
    const { blockDiary } = props;
    return (
        <div className="Diary">
            {blockDiary}
            <div className="reminder mt-4">
                <Reminders />
            </div>
            <ModalDiary/>
        </div>
    );
}
export default View;
