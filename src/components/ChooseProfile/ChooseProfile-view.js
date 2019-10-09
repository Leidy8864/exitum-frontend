
import React, { Fragment } from 'react';
import './style.css';

function View(props) {

    const {
        handleChangeRole
    } = props;

    return (
        <div>

            <form>

            {/* <input type="text" onChange={email}/> */}
            <input type="radio" name="role" onChange={handleChangeRole} value="employee"/>Impulsor
            <input type="radio" name="role" onChange={handleChangeRole} value="entrepreneur" />Emprendedor
            </form>
        </div>
    );
}
export default View;
