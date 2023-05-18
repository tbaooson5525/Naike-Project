import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Link } from '@mui/material';

const style = {
    position: 'relative',
    color:'black',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',  
    bgcolor: 'background.paper',
    border: '1px solid #fff',
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
    boxSizing: 'box-content',
    maxWidth: 930
};
export default function ProductDetailModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const testProducts = {
        id: 1,
        name: "Air Jordan Low SE",
        category: "Men",
        price: "3,369,000₫",
        imgUrl: "https://static.nike.com/a/images/t_default/a576a457-055e-40ff-911d-f148529e97e2/air-jordan-low-se-shoes-KKFsH5.png",
        size: ['EU 40','EU 40.5','EU 41','EU 41.5','EU 42','EU 42.5','EU 43','EU 43.5','EU 44','EU 44.5','EU 45','EU 45.5','EU 46','EU 46.5','EU 47']
    }

    return (
        <div className='px-6'>
            <Link color={'#111'} underline="always" component="button" onClick={handleOpen}>View Product Details</Link>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div className='flex items-center justify-start'>
                            <img className='h-[60px] w-[60px] object-cover' src={testProducts.imgUrl} alt={testProducts.name} />
                            <div className=' pt-2 px-3 grow'>
                                <h1>{testProducts.name}</h1>
                                <h2>{testProducts.price}</h2>
                            </div>
                        </div>
                        <div className='pt-[76px] pr-5 text-left text-[17px]'>
                            <p>Get into some summery fun in your new fave AJ1s. Made with a combination of suede and canvas, this pair gives you the comfort you know and love with a seasonal update.</p>
                            <br />
                            <p className='font-semibold'>Benefits</p>
                            <ul className='list-[square]'>
                                <li className='ml-5'>Suede and canvas upper offers durability and structure.</li>
                                <li className='ml-5'>Encapsulated Nike Air unit provides lightweight cushioning.</li>
                                <li className='ml-5'>Solid rubber outsoles give you traction on a variety of surfaces.</li>
                            </ul>
                            <br />
                            <p className='font-semibold'>Product Details</p>
                            <ul className='list-[square]'>
                                <li className='ml-5'>Wings logo stamped on heel</li>
                                <li className='ml-5'>Stitched-down Swoosh logo</li>
                                <li className='ml-5'>Jumpman Air design on tongue</li>
                                <li className='ml-5'>Foam sole</li>
                                <li className='ml-5'>Rubber traction</li>
                                <li className='ml-5'>Color Shown: Pistachio Frost/Aquatone/Psychic Purmle/Celestial Gold</li>
                                <li className='ml-5'>Style: DX4334-300</li>
                                <li className='ml-5'>Country/Region of Origin: Indonesia</li>
                            </ul>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
