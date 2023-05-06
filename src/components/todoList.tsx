import { useEffect, useState } from "react";
import { fetchData } from "../utility/fetchAsyncData";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { getTodoList, dataReceived } from "../redux/reducers/todoListSlice";
import { setTags } from "../redux/reducers/tagsSlice";

import { Box, List, ListItem } from "@mui/material";
import styles from "../styles/todoStyle.module.css";

import FilterList from "./filter";

type listItems = {
    id:number,
    title:string
}

const ToDoList = () => {
    const dispatch = useAppDispatch()
    const { loading, data, error } = useAppSelector(getTodoList)

    const handleClick = (searchValue:string) => {
        const filteredData = data.filter((item:listItems) => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        dispatch(dataReceived(filteredData))
    }
    const handleListClick = (title:string) => {
        dispatch(setTags(title))
    }
    useEffect(() => {
        dispatch(fetchData('https://jsonplaceholder.typicode.com/todos'))
    }, [dispatch])

    return (
        <Box className={styles.box}>
            {loading && <div>Loading...</div>}
            {data &&
                <>
                    <FilterList handleClick={handleClick} />
                    <List>
                        {data.map((item:listItems) => <ListItem key={item.id} onClick={() => handleListClick(item.title)}>{item.title}</ListItem>)}
                    </List>
                </>
            }
        </Box>

    )
}

export default ToDoList