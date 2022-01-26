import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://github.com/Sinakhx">
                Sina khodabandehloo
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};
