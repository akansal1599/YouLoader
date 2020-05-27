import React from 'react';
import Form from "./Form/Form";

import classes from './Input.module.css';

const Input = (props) => {

    //
    // return(
    //     <form>
    //         <label htmlFor="fname">First name:</label><br/>
    //         <input type="text" id="fname" value={url} onChange={e => setUrl(e.target.value)}/><br/>
    //         <input type="submit" value="Submit" onClick={fetchUrl(url)}/>
    //     </form>
    // )

    return(
        <div className={classes.input}>
            <Form />
        </div>
    )
}

export default Input;
