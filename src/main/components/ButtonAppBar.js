import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

export default function ButtonAppBar() {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    const pages = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"}
    ];

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky" color='inherit'>
                <Toolbar>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map(({name, path}) => (
                            <Button
                                key={name}
                                onClick={() => routeChange(path)}
                                sx={{my: 2, color: 'black', display: 'block'}}
                            >
                                {name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}