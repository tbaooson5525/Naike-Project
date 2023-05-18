import { Box, Button, Rating, Typography } from '@mui/material'
import React from 'react'

export default function ReviewContent() {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Box sx={{display: 'flex'}}>
                <Rating sx={{color: '#d9d9d9'}} name="disabled" value={5} readOnly />
                <Typography sx={{paddingLeft: 2, fontSize: 17}} component="legend">0 Stars</Typography>
            </Box>
            <Box sx={{paddingTop: 2}}>
                <Typography sx={{fontWeight: 600}}>
                    No Ratings
                </Typography>
                <Box sx={{textAlign: 'center', paddingY: 4, borderTop: "1px solid #d9d9d9", borderBottom: "1px solid #d9d9d9", marginTop: 2}}>
                    <Typography  component="legend">Be the first to review this item</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        size='large'
                        sx={{color: 'black', paddingY: 4}}
                    />
                    <br />
                    <Button sx={{backgroundColor: 'black', padding:'1 3'}} variant="contained">WRITE A REVIEW</Button>
                </Box>
            </Box>
        </div>
    )
}
