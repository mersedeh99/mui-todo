import { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type handleClickType = (input:string) => void;

interface InputProps {
    handleClick: handleClickType
}

const FilterList = ({ handleClick }:InputProps) => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <TextField
            fullWidth
            label="Search"
            id="fullWidth"
            onChange={(e) => setSearchValue(e.target.value)}
            InputProps={{
                endAdornment: <Button onClick={() => handleClick(searchValue)}><SearchIcon /></Button>,
            }}
        />
    )
}

export default FilterList