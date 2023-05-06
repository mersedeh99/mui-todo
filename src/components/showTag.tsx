import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { getTags, deleteTag } from "../redux/reducers/tagsSlice";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const ShowTag = () => {
    const dispatch = useAppDispatch()
    const tags = useAppSelector(getTags)
    return (
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {
                tags.map((item:string, index:number) => <Box key={index} sx={{ padding: '0.5rem' }}><Chip label={item} onClick={() => dispatch(deleteTag(index))} /></Box>)
            }
        </Stack>
    )
}

export default ShowTag