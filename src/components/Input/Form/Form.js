import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {InputContext} from "../../../context/InputContext";

// const theme = createMuiTheme({
//     overrides: {
//         MuiFormLabel: {
//             root: {
//                 "&$focused": {
//                     color: "tomato",
//                     fontWeight: "bold"
//                 }
//             },
//
//             focused: {}
//         }
//     }
// });

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '55%',
        },
        '& .MuiInputBase-root': {
            backgroundColor: "white",
        },

        // '& .MuiOutlinedInput-notchedOutline': {
        //     borderColor: "red"
        // }
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    // overrides: {
    //     // ...
    //     MuiOutlinedInput: {
    //         focused: {
    //             border: '1px solid red'
    //         },
    //         '& $notchedOutline': {
    //             border: '1px solid red'
    //         },
    //     },
    //     // ...
    // }
    // overrides: {
    //     MuiOutlinedInput: {
    //         root: {
    //             position: 'relative',
    //             '& $notchedOutline': {
    //                 borderColor: 'rgba(0, 0, 0, 0.23)',
    //             },
    //             '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
    //                 borderColor: 'red',
    //                 // Reset on touch devices, it doesn't add specificity
    //                 '@media (hover: none)': {
    //                     borderColor: 'rgba(0, 0, 0, 0.23)',
    //                 },
    //             },
    //             '&$focused $notchedOutline': {
    //                 borderColor: 'red',
    //                 borderWidth: 1,
    //             },
    //         },
    //     },
    //     MuiFormLabel: {
    //         root: {
    //             '&$focused': {
    //                 color: 'red'
    //             }
    //         }
    //     }
    // }
}));

export default function Form(props) {
    const classes = useStyles();
    const {url,setUrl,fetchUrl} = useContext(InputContext);

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    required
                    id="outlined-required"
                    placeholder="Enter URL with http(s) protocol"
                    variant="outlined"
                    value={url}
                    onChange={e =>setUrl(e.target.value)}
                />
            </div>
            <div className={classes.button}>
                <Button variant="contained"
                        color="secondary"
                        onClick={fetchUrl}
                >
                    DOWNLOAD
                </Button>
            </div>
        </form>
    );
}
