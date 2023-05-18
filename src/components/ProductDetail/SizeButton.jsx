import React from 'react'

export default function SizeButton({props}) {
    return (
        <button className='h-12 rounded text-center hover:border-slate-800 border-[1px]'>
            {props}
        </button>
    )
}
