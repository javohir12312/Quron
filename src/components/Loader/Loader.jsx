import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import style from "./Loader.module.scss"

function Loader() {
    return (
        <div className={style.box}>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="success" />
            </Stack>
            <p>Suralardan birini tanlang, tanlagan bo'lsangiz biroz kuting</p>
        </div>
    );
}

export default Loader