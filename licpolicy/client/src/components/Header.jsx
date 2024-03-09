
import { AppBar, Toolbar } from '@mui/material';

const Header = () => {
    const logo = "https://licindia.in/o/liferaytheme-theme/images/logo.png";
    
    return (
        <AppBar position="static" style={{backgroundColor:"lightgray"}}>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 120 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;