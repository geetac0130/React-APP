import { Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import useStyles from "./styles";

const BASE_URL = 'http://localhost:3000/';

export default function EditItem() {
    const classes = useStyles()
    const {id} = useParams();
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allItems = await axios.get(BASE_URL + `api/items/${id}`)
                setName(allItems.data.name)
                setPrice(allItems.data.price)
                setDescription(allItems.data.description)
                // setItemInfo(allItems.data);
            } catch (error) {
                console.error("Error while fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const editItem = async() => {
        const reqBody = {
            'name': name,
            'price': price,
            'description': description
        }
        await axios.put(BASE_URL + `api/items/${id}`, reqBody)
        window.location.href = '/'
    }

    return (<>
        <p className={classes.title}>Update Item</p>
        <Typography style={{fontFamily: 'CenturyGothicBold',
        fontWeight: 'bold',}} className={classes.step}>Enter Name of the Item</Typography>
        <TextField required style={{ width: 500, height:'40px' }} variant='outlined' value={name} onChange={(e) => setName(e.target.value)}></TextField>
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
        <Button disabled={name.length === 0} style={{ color: '#ffffff' }} className={classes.mediaButtonApply} onClick={editItem}>Update Item</Button></>
    )
}