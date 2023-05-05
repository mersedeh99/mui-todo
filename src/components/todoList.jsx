import { useEffect, useState } from "react";
import { fetchData } from "../utility/fetchAsyncData";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList, dataReceived } from "../redux/reducers/todoListSlice";
import { setTags } from "../redux/reducers/tagsSlice";

import { Box, List, ListItem } from "@mui/material";
import styles from "../styles/todoStyle.module.css";

import FilterList from "./filter";


const ToDoList = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(getTodoList)

    const handleClick = (searchValue) => {
        const filteredData = data.filter((item) => {
            return item.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        dispatch(dataReceived(filteredData))
    }
    const handleListClick = (title) => {
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
                        {data.map(item => <ListItem key={item.id} onClick={() => handleListClick(item.title)}>{item.title}</ListItem>)}
                    </List>
                </>
            }
        </Box>

    )
}

export default ToDoList