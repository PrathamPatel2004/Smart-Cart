import { Button } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import CategoryPanel from "./CategoryPanel";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddressPanel from "./AddressPanel";

function Navbar(){

    const navRef = useRef();
    const [CategoryPanelOpen, setCategoryPanelOpen] = useState(false);
    const [AddressPanelOpen, setAddressPanelOpen] = useState();
    const [activateNavItem, setActiveNavItem] = useState(null);

    const OpenCategoryPanel = () => { setCategoryPanelOpen(true); }
    const CloseCategoryPanel = () => { setCategoryPanelOpen(false); }
    const OpenAddressPanel = () => { setAddressPanelOpen(true); }
    const CloseAddressPanel = () => { setAddressPanelOpen(false); }

    const navItems = [
        {
            name : "SmartPhones & Accessories",
            MenuItems : [{ MenuName : "SmartPhones", SubMenuItems : ["Gaming SmartPhones", "SmartWatch", "Foldeble SmartPhones", "5G SmartPhones", "RAM Expandable SmartPhones" ]},
                        { MenuName : "Accessories", SubMenuItems : ["Smarphone Covers", "Storage & Memory", "USB Cables", "Screen Protectors", "Wireless Chargers", "Power Banks"] }
                    ]
        },
        {
            name : "Fashion",
            MenuItems : [{ MenuName : "Men’s Clothing", SubMenuItems : ["T-Shirts", "Formal Shirts", "Jeans", "Bottomwear", "Innerwear", "Blazers"]},
                        { MenuName : "Women’s Clothing", SubMenuItems : ["Dresses", "Tops & Tees", "Lehenga Choli", "Kurtis", "Sarees", "Jeans"]},
                        { MenuName : "Kid’s Clothing", SubMenuItems : ["T-Shirts", "Shirts", "Jeans", "Bottomwear", "Shorts"]},
                        { MenuName : "Footwear", SubMenuItems : ["Sneakers", "Heels", "Loafers", "Slippers", "Boots", "Sandals"]},
                        { MenuName : "Accessories", SubMenuItems : ["Watches", "Handbags", "Jewelry", "Belts", "Purse", "Sunglasses"]},
                    ]
        },
        {
            name : "Electronics",
            MenuItems : [{ MenuName : "Laptops & Computers", SubMenuItems : ["MacBook Air", "Dell XPS", "HP Spectre", "Lenovo ThinkPad", "Asus ROG"] },
                        { MenuName: "TVs & Appliances", SubMenuItems: ["Smart TVs", "Air Conditioners", "Refrigerators", "Washing Machines", "Microwaves"] },
                        { MenuName: "Cameras", SubMenuItems: ["DSLR", "Mirrorless", "GoPro", "Camera Lenses", "Tripods"] }
                    ]
        },
        {
            name : "Groceries",
            MenuItems : [{ MenuName: "Beverages", SubMenuItems: ["Coca-Cola", "Pepsi", "Red Bull", "Tropicana Juice", "Green Tea"] },
                        { MenuName: "Snacks", SubMenuItems: ["Lays", "Kurkure", "Haldiram Namkeen", "Popcorn", "Chocolates"] },
                        { MenuName: "Staples", SubMenuItems: ["Rice", "Wheat Flour", "Cooking Oil", "Lentils", "Spices"] }
                    ]
        },
        {
            name : "Sports",
            MenuItems : [{ MenuName: "Fitness Gear", SubMenuItems: ["Treadmills", "Dumbbells", "Yoga Mats", "Resistance Bands", "Protein Shakes"] },
                        { MenuName: "Sports Equipment", SubMenuItems: ["Cricket Bats", "Football", "Basketball", "Badminton Rackets", "Tennis Balls"] }
                    ]
        },
        {
            name : "Home & Furniture",
            MenuItems : [{ MenuName: "Furniture", SubMenuItems: ["Sofas", "Beds", "Dining Tables", "Wardrobes", "TV Units"] },
                        { MenuName: "Home Decor", SubMenuItems: ["Wall Art", "Lamps", "Curtains", "Clocks", "Indoor Plants"] },
                        { MenuName: "Kitchen & Dining", SubMenuItems: ["Cookware", "Dinner Sets", "Kitchen Storage", "Appliances", "Cutlery"] }
                    ]
        }
    ]

    useEffect(() => {
    const timer = { current: null };
    
    function handleClickOutside(event) {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setActiveNavItem(null);
        }
    }

    function handleMouseLeave() {
        timer.current = setTimeout(() => {
            setActiveNavItem(null);
        }, 200);
    }

    function handleMouseEnter() {
        if (timer.current) {
            clearTimeout(timer.current);
        }
    }

    const navEl = navRef.current;
    if (navEl) {
        navEl.addEventListener("mouseleave", handleMouseLeave);
        navEl.addEventListener("mouseenter", handleMouseEnter);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        if (navEl) {
            navEl.removeEventListener("mouseleave", handleMouseLeave);
            navEl.removeEventListener("mouseenter", handleMouseEnter);
        }
    };
    }, []);

    return (
        <>
            <nav>
                <div className="navbar container flex items-center justify-end gap-2">
                    <div className="col_1 w-[18%]">
                        <Button aria-haspopup="true" aria-expanded={CategoryPanelOpen} className="!text-black" onClick={OpenCategoryPanel}>
                            <WidgetsOutlinedIcon className="mr-1" />Shop By Category<KeyboardArrowDownOutlinedIcon className="ml-3" />
                        </Button>
                    </div>

                    <div className="col_2 w-[64%]" ref={navRef}>
                        <ul className="flex items-center gap-4 relative">
                            {navItems.map(item => (
                                <li className="list-none relative" key={item.name} onMouseEnter={() => setActiveNavItem(item)}>
                                    <Button className="transition !text-black !font-[500] hover:!text-[red] hover:!bg-white">
                                        {item.name}
                                    </Button>
                                    {activateNavItem?.name === item.name && (
                                        <div className="absolute top-full left-0 mt-2 w-max bg-white shadow-lg rounded-lg p-4 z-10 grid grid-cols-3 gap-6">
                                            {item.MenuItems.map(menu =>(
                                                <div key={menu.MenuName}>
                                                    <h4 className="font-semibold text-[14px] mb-2">{menu.MenuName}</h4>
                                                    <ul className="space-y-1">
                                                        {menu.SubMenuItems?.map((sub, idx) => (
                                                            <li key={idx} className="text-sm text-gray-700 hover:text-red-500 cursor-pointer p-1">
                                                                {sub}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col_3 w-[18%] !flex !items-center !justiify-end">
                        <Button aria-haspopup="true" aria-expanded={AddressPanelOpen} className="!text-black w-auto" onClick={OpenAddressPanel}>
                            <LocationOnOutlinedIcon className="mr-2" />
                            Choose Location
                            <KeyboardArrowDownOutlinedIcon className="ml-2" />
                        </Button>
                    </div>
                </div>
            </nav>

            <CategoryPanel CategoryPanelOpen={CategoryPanelOpen} CloseCategoryPanel={CloseCategoryPanel}/>
            <AddressPanel AddressPanelOpen={AddressPanelOpen} CloseAddressPanel={CloseAddressPanel}/>

        </>
    )
}

export default Navbar;