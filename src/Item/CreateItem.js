import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
import useStyles from "./styles";

const BASE_URL = 'http://localhost:3000/';

export default function CreateItem() {
    const classes = useStyles()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState()

    const createItem = async() => {
        const reqBody = {
            'name': name,
            'price': price,
            'description': description
        }
        await axios.post(BASE_URL + 'api/items', reqBody)
        window.location.href = '/'
    }

    return (<>
         <p className={classes.title}>Add Item</p>
         <Typography style={{fontFamily: 'CenturyGothicBold',
        fontWeight: 'bold',}} className={classes.step}>Enter Name of the Item</Typography>
        <TextField  required style={{ width: 500, height:'40px' }} variant='outlined' value={name} onChange={(e) => setName(e.target.value)}></TextField>
        <br></br> <br></br>
        <Typography style={{fontFamily: 'CenturyGothicBold',
        fontWeight: 'bold',}} className={classes.step}>Enter Description of Item</Typography>
        <TextField  style={{ width: 500, height:'40px' }} variant='outlined' value={description} onChange={(e) => setDescription(e.target.value)}></TextField>
        <br></br> <br></br>
        <Typography style={{fontFamily: 'CenturyGothicBold',
        fontWeight: 'bold',}} className={classes.step}>Enter Price of the Item</Typography>
        <TextField  style={{ width: 500, height:'40px' }} variant='outlined' type="number" value={price} onChange={(e) => setPrice(e.target.value)}></TextField>
        <br></br>
        <br></br>
        <br></br>
        <Button disabled={name.length === 0}  style={{ color: '#ffffff' }} className={classes.mediaButtonApply}  onClick={createItem}>Add Item</Button></>

    )
}