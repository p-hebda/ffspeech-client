import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const pages = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"}
    ];

    const currentPage = pages.find((page) => page.path === window.location.pathname);
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color='inherit'>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                    {currentPage !== undefined ? currentPage.name : "Not Found"}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {pages.map(({name, path}) => <MenuItem key={name} onClick={() => {
                            handleClose();
                            routeChange(path);
                        }}>{name}</MenuItem>)}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}