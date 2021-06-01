import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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