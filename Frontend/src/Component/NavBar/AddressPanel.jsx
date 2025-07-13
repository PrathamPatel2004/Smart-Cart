import { Box, Button, Drawer, Divider } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

function AddressPanel( { AddressPanelOpen, CloseAddressPanel} ) {

    const DrawerList = (
        <Box className="w-[550px]" role="presentation">
            <header className="text-[25px] font-[500] p-3 flex items-center justify-between ml-3">
                Choose Delivery Address
                <Button onClick={CloseAddressPanel} className="!text-black !min-w-[30px] !min-h-[30px] !rounded-full !mt-1 !text-[25px]"><CloseIcon /></Button>
            </header>
            <Divider className="!mx-[25px] !border-2 !mt-2" />
            
            <form>
                <div className="input !container !w-full">
                    <label>Address Line 1</label>
                    <input type="text" name="text" placeholder="Address Line 1" required />
                </div>
                <div className="input container">
                    <label>Address Line 2</label>
                    <input type="text" name="text" placeholder="Address Line 2" required />
                </div>
            </form>
        </Box>
    )

    return (
        <Drawer anchor='right' open={AddressPanelOpen} onClose={CloseAddressPanel}>
            {DrawerList}
        </Drawer>
    )
}

export default AddressPanel;