import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { MdSearch } from "react-icons/md";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface NavBarProps {
  categories: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export const NavBar = ({ categories, title }: NavBarProps) => {
  const userStatus = "LoggedOut"

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {userStatus === "LoggedIn" ? <Button size="small" color="primary">Profile</Button> : <div style={{width: 77}}></div>}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <MdSearch />
        </IconButton>
        <Button variant="outlined" size="small">
          {userStatus === "LoggedIn" ? "Log Out" : "Sign up / Log In"}
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {categories.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}