import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navbar from '../Components/Component/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Component/Footer/Footer';
export default function BasicGrid() {

    return (
        <div>
            <Navbar></Navbar>
            <div className='container ' id='layout'>
                <Grid item={true} xs={12} md={12} xl={12}>
                    <Outlet />
                </Grid>
            </div>
            <Footer/>
     
        </div>

    )
}