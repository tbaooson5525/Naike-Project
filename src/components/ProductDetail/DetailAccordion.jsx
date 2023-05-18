import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DetailAccordion({title, content}) {
    return (
        <div className='px-6'>
            <Accordion sx={{borderTop: '1px solid #d9d9d9', borderBottom: '1px solid #d9d9d9',borderLeft: 'none',borderRight: 'none', boxShadow:'none', borderRadius: 0}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{paddingTop: 2, paddingBottom: 2, margin: 0}}
                >
                    <div className='text-[20px] font-medium'>{title}</div>
                </AccordionSummary>
                <AccordionDetails>
                    {content}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
