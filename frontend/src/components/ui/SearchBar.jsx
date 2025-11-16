import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({value,onChange}) {
    const [highlight, setHighlight] = useState("border-[#e8e8e8]");

    return (
        <div className={`px-3 py-2 flex items-center gap-4 border-4 bg-white rounded ${highlight}`}>
            <AiOutlineSearch size={24} />
            <input 
                type="text" 
                placeholder="Search notices..." 
                className="text-[#002054] focus:outline-none rounded w-full"
                onFocus={() => setHighlight("border-[#002054]")}
                onBlur={() => setHighlight("border-[#e8e8e8]")}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default SearchBar;
