import React from 'react';
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { headersData } from './headersData';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';


export default function Header () {
    const { nav, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return (
                <Toolbar className={toolbar}>
                    {lushakLogo}
                    <div>{getMenuButtons()}</div>
                </Toolbar>
        );
    };

    const lushakLogo = (
        <Typography variant='h6' component='h1' className={logo}>
            Lushak
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: 'inherit',
                        to: href,
                        component: Link,
                        className: menuButton
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={nav}>{displayDesktop()}</AppBar>
        </header>
    );
}