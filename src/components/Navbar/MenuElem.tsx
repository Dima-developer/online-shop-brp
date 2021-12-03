import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type MenuElemProps = {
    title: string,
    elementsMenu: Array<string>,
}

const MenuElem = ({title, elementsMenu}: MenuElemProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <React.Fragment>
             <Button aria-controls="atv-menu" aria-haspopup="true" onClick={handleClick}>
                {title}
            </Button>
            <Menu
                id="atv-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    elementsMenu.map((elem,idx) => {
                        return(
                            <React.Fragment key={idx} >
                            <MenuItem onClick={handleClose}>{elem}</MenuItem>
                        </React.Fragment>
                        )
                    })
                }
    
            </Menu>
        </React.Fragment>
    )
}

export default MenuElem;