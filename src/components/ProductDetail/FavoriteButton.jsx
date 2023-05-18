import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FavoriteButton() {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <button className='flex items-center justify-center w-full rounded-[30px] py-[18px] mt-3 px-6 font-medium text-lg hover:border-slate-800 border-[1px]' onClick={handleClick}>
            Favorite 
            {isClicked ? <FavoriteBorderIcon fontSize='small'/> : <FavoriteIcon fontSize='small'/>}
        </button>
    )
}
