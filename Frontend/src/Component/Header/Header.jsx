import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { Button } from "@mui/material";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SearchBar from "../SearchBar/SearchBar.jsx"
import Badge from '@mui/material/Badge';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Tooltip from '@mui/material/Tooltip';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import Navbar from "../NavBar/Nabar.jsx";

function Header() {
    const NoteField = ["Note 1", "Note 2"]
    return (
        <header>
            <div className="top-strip py-2 mt-1 border-t-[1px] border-gray-400 border-b-[1px] bg-[white]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col_1 w-[75%]">
                            <marquee className="!text-[red] mx-3 mt-1">
                                {NoteField.map((item, index) => (
                                    <span key={index} className="mr-4">{item}</span>
                                ))}
                            </marquee>
                        </div>
                        <div className="col_2 w-[25%] flex justify-end items-center">
                            <Button className="text-xs px-1 py-[2px] h-auto min-h-0">
                                <Link to="/help-center" className="link0 flex items-center gap-[2px] transition">
                                    <SupportAgentIcon className="text-sm mt-[-3px]" />Help Center
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header py-3 mt-1 border-t-[1px] border-gray-400 border-b-[1px] bg-[white]'>
                <div className="container flex items-center">
                    <div className="col_1 logo w-[25%]">
                        <Link to='/' className="flex items-center">
                            <img src={logo} alt="logo" className="w-[70%] h-[50px]" />
                        </Link>
                    </div>

                    <div className="col_2 w-[50%] searchBox flex items-center">
                        <SearchBar />
                    </div>
                    
                    <div className="col_3 w-[25%] icons">
                        <ul className='flex items-center justify-end gap-4 w-full'>
                            <li className='list-none'>
                                <Badge badgeContent={4} color="primary">
                                    <PermIdentityOutlinedIcon sx={{ fontSize: 35 }} />
                                </Badge>      
                            </li>
                            <li><hr className='h-[30px] border-[1px] border-gray-400'/></li>
                            <li className='list-none'>
                                <Tooltip title="Compare">
                                    <Badge badgeContent={4} color="primary">
                                        <CompareArrowsIcon sx={{ fontSize: 35 }} />
                                    </Badge>
                                </Tooltip>
                            </li>
                            <li className='list-none'>
                                <Tooltip title="WishList">
                                    <Badge badgeContent={4} color="primary">
                                        <FavoriteBorderIcon sx={{ fontSize: 35 }} />
                                    </Badge>
                                </Tooltip>
                            </li>
                            <li className='list-none'>
                                <Tooltip title="Cart">
                                    <Badge badgeContent={4} color="primary">
                                        <ShoppingBagRoundedIcon sx={{ fontSize: 35 }} />
                                    </Badge>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='navbar py-2 mt-1 border-t-[1px] border-gray-400 border-b-[1px] bg-[white]'>
                <Navbar />
            </div>
        </header>
    )
}

export default Header;