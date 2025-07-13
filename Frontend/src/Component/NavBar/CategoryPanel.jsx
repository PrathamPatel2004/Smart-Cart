import React, { useEffect } from 'react';
import { Box, Button, Drawer, Divider, ListItem, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import icon from '../../assets/icon.jpg';
import ExpandMore from '@mui/icons-material/ExpandMore';

function CategoryPanel( { CategoryPanelOpen, CloseCategoryPanel }) {

    const location = useLocation();
    const [openCategory, setOpenCategory] = React.useState({});

    const toggleCategory = (name) => {
        setOpenCategory((prev) => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    useEffect(() => {
        if (CategoryPanelOpen) {
            CloseCategoryPanel();
        }
    }, [location]);

    const CategoryFields = [
    {
        name: "Fashion",
        icon : icon,
        subCategories: ["Men’s Clothing", "Women’s Clothing", "Kid’s Clothing", "Footwear", "Accessories"]
    },
    {
        name: "Electronics",
        icon : icon,
        subCategories: ["Mobiles", "Laptops", "Cameras", "Audio", "Wearables"]
    },
    {
        name: "Groceries",
        icon : icon,
        subCategories: ["Fruits & Vegetables", "Snacks", "Beverages", "Staples"]
    },
    {
        name: "Sports",
        icon : icon,
        subCategories: ["Exercise Equipment", "Outdoor Gear", "Indoor Games"]
    },
    {
        name: "Stationery",
        icon : icon,
        subCategories: ["Books", "Notebooks", "Pens & Art Supplies"]
    },
    {
        name: "Fitness",
        icon : icon,
        subCategories: ["Gym Equipment", "Yoga", "Supplements"]
    },
    {
        name: "Beauty",
        icon : icon,
        subCategories: ["Makeup", "Skincare", "Haircare", "Fragrance"]
    },
    {
        name: "Home",
        icon : icon,
        subCategories: ["Furniture", "Kitchen", "Decor", "Bedding"]
    }];
    const DrawerList = (
        <Box className="w-[350px]" role="presentation">
            <header className="text-[25px] font-[500] p-3 flex items-center justify-between ml-3">
                Categories
                <Button onClick={CloseCategoryPanel} className="!text-black !min-w-[30px] !min-h-[30px] !rounded-full !mt-1 !text-[25px]"><CloseIcon /></Button>
            </header>
            <Divider className="!mx-[25px] !border-2 !mt-2" />
            <List>
                {CategoryFields.map((category, index) => (
                    <Box key={category.name}>
                        <ListItemButton onClick={() => toggleCategory(category.name)}>
                            <ListItemAvatar><Avatar alt="Remy Sharp" src={category.icon} /></ListItemAvatar>
                            <ListItemText primary={category.name} />
                            {openCategory[category.name] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>

                        <Collapse in={openCategory[category.name]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {category.subCategories?.map((sub) => (
                                    <Link
                                        to={`/category/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                                        key={sub}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText primary={sub} className='text-[gray]' />
                                        </ListItemButton>
                                    </Link>
                                ))}
                            </List>
                        </Collapse>
                    </Box>
                ))}
            </List>
        </Box>
    )
    return (
        <Drawer open={CategoryPanelOpen} onClose={CloseCategoryPanel}>
            {DrawerList}
        </Drawer>
    )
}

export default CategoryPanel;