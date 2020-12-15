import React, { useState, useEffect } from 'react';
import { AppBar, Button, Drawer, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons/Menu';
import { headersData } from './headersData';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';


export default function Header () {
    const { nav, logo, menuButton, toolbar, drawerContainer } = useStyles();
    
    const [state, setState] = useState({ 
        mobileView: false,
        drawerOpen: false,
    })
    
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
    
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

    }, []);

    

    const displayDesktop = () => {
        return (
                <Toolbar className={toolbar}>
                    {lushakLogo}
                    <div>{getMenuButtons()}</div>
                </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'arial-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                    >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
                <div>{lushakLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Link
              {...{
                component: Link,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        });
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
            <AppBar className={nav}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}