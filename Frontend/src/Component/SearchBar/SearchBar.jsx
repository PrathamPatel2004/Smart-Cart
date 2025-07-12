import React from 'react';
import Button from '@mui/material/Button';
import { ImSearch } from "react-icons/im";

function SearchBar() {
  return (
    <div className="searchbox w-[100%] h-[50px] rounded-[5px] bg-[#ededed] relative p-2">
      <input type='text' placeholder='Search for Products' className='w-full h-[35px] bg-inherit focus:outline-none text-[15px] p-2'/>
      <Button className='!absolute top-[11px] right-[10px] z-50 w-[30px] h-[30px] !min-w-[30px] !min-h-[30px] !rounded-full'><ImSearch className='text-[#424242]'/></Button>
    </div>
  )
}

export default SearchBar;