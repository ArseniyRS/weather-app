import {Autocomplete, Button, FilledInput, FormControl, InputLabel, TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';
import cities from '../assets/cities.json';
import {WRITE_CITY} from "../constants/weather";
import {useDispatch} from "react-redux";
import {ICity} from "../models/ICity";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        background: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        borderRadius: 5,
        padding: '0 30px',
    },
});

const CitySearch = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState<ICity | null>()
    const classes = useStyles();
    return (
            <Autocomplete
                autoHighlight
                onChange={(event, value) => setCity(value)}
                //getItemValue={(item) => item.label}
                id="component-filled"
                options={cities}
                getOptionLabel={option => option.name}
                style={{width: '80%'}}
                renderInput={(params) => (
                    <div className={'city-search'}>
                        <TextField
                            required
                            {...params}
                            label="City"
                            autoFocus
                            autoComplete={'Bishkek'}
                            className={classes.root}
                        />
                        <Button  className={'city-search__submit'} onClick={() => dispatch({type: WRITE_CITY, payload: city})}><i className="fas fa-check" /></Button>
                    </div>)}
            />
    );
};

export default CitySearch;