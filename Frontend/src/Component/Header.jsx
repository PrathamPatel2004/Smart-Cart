import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const NoteField = ["Note 1", "Note 2"]
    return (
        <header>
            <div className="top-strip py-2 mt-1 border-t-[1px] border-gray-400 border-b-[1px] bg-[white]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col_1 w-[70%]">
                            <marquee className="!text-[red] mx-3 mt-1">
                                {NoteField.map((item, index) => (
                                    <span key={index} className="mr-4">{item}</span>
                                ))}
                            </marquee>
                        </div>
                        <div className="col_2 w-[30%] flex justify-end items-center">
                            <Link to="/help-center" className="!text-[Blue]">Help Center</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;