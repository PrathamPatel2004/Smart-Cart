import React from "react";

function Header() {
    const NoteField = ["Note 1", "Note 2"]
    return (
        <header>
            <div className="top-strip py-2 mt-1 border-t-[1px] border-gray-400 border-b-[1px] bg-[white]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col_1 w-[80%]">
                            <marquee className="!text-[red] mx-3">
                                {NoteField.map((item, index) => (
                                    <span key={index} className="mr-4">{item}</span>
                                ))}
                            </marquee>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;