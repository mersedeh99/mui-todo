import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    cursor: 'pointer'
                }
            }
        }
    }
})