import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from './Toolbar.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        backgroundColor: "rgba(0, 0, 0, 0.87)",
    },
    title: {
        flexGrow: 1,
        fontSize: "1.3rem"
    },
}));

export default function ButtonAppBar() {
    const classe = useStyles();

    return (
        <div className={classe.root}>
            <AppBar position="static">
                <Toolbar className={classe.toolbar}>
                    <Typography variant="h6" className={classe.title}>
                        <div className={classes.yt}></div> YouLoader
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
