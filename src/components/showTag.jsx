import { useSelector, useDispatch } from "react-redux";
import { getTags, deleteTag } from "../redux/reducers/tagsSlice";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const ShowTag = () => {
    const dispatch = useDispatch()
    const tags = useSelector(getTags)
    return (
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {
                tags.map((item, index) => <Box key={index} sx={{ padding: '0.5rem' }}><Chip label={item} onClick={() => dispatch(deleteTag(index))} /></Box>)
            }
        </Stack>
    )
}

export default ShowTag