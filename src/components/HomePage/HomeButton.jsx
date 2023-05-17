import React from 'react'

export default function HomeButton({children, link, bgColor, textColor, absolute = false}) {
    return (
        <div>
            <button href={link} className={`bg-${bgColor} text-${textColor} ${absolute ? 'absolute':''} bottom-[24px] left-[24px] font-medium rounded-[30px] py-1.5 px-5 mt-6`}>
                {children}
            </button>
        </div>
    )
}
