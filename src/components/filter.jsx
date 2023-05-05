import { useState } from "react";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FilterList = ({ handleClick }) => {

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