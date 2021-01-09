import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

const SideBar = ()=>{
    return (  
        <Link to="client/add">
        <AddIcon/><Typography variant="h4">SideBar</Typography>
        </Link>
    )
}

export default SideBar;