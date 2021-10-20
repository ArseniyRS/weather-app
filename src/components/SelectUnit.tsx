import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {WRITE_UNIT} from "../constants/weather";
import {RootState} from "../store/store";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        background: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        borderRadius: 5,


    },
});
const SelectUnit = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const unit = useSelector((state: RootState) => state.weatherReducer.unit)
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
            <Select
                className={classes.root}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unit}
                label={unit}
                onChange={(e) => dispatch({type: WRITE_UNIT, payload: e.target.value})}
            >
                <MenuItem value={'metric'}>C</MenuItem>
                <MenuItem value={'imperial'}>F</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectUnit;