import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <div className="w-full bg-black pt-[40px] px-[40px] pb-[15px]">
      <div className="flex justify-between ">
        <div className="grid grid-cols-3 gap-10 text-sm leading-8">
          <ul className="text-white font-semibold">
            <li><a href="#">FIND A STORE</a></li>
            <li><a href="#">BECOME A MEMBER</a></li>
            <li><a href="#">SIGN UP FOR EMAIL</a></li>
            <li><a href="#">Send Us Feedback</a></li>
          </ul>
          <ul>
            <h1 className="text-white font-semibold">GET HELP</h1>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Order Status</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Delivery</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Returns</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Payment Options</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Contact Us</a> </li>
          </ul> 
          <ul>
            <h1 className="text-white font-semibold">ABOUT NIKE</h1>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">News</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Returns</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Investors</a> </li>
            <li className="text-[#7e7e7e] hover:text-white"><a href="">Sustainability</a> </li>
          </ul> 
        </div>
        <div className="flex gap-2">
          <div className="rounded-full items-center flex justify-center h-[30px] w-[30px] hover:bg-white bg-[#7e7e7e]">
            <TwitterIcon sx={{color: 'black'}}/>
          </div>
          <div className="rounded-full items-center flex justify-center h-[30px] w-[30px] hover:bg-white bg-[#7e7e7e]">
            <FacebookIcon sx={{color: 'black'}}/>
          </div>
          <div className="rounded-full items-center flex justify-center h-[30px] w-[30px] hover:bg-white bg-[#7e7e7e]">
            <YouTubeIcon sx={{color: 'black'}}/>
          </div>
          <div className="rounded-full items-center flex justify-center h-[30px] w-[30px] hover:bg-white bg-[#7e7e7e]">
            <InstagramIcon sx={{color: 'black'}}/>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 text-xs items-center">
          <LocationOnIcon sx={{color:'white'}}/>
          <p className="text-white">Vietnam</p>
          <p className="text-[#7e7e7e]">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <div>
          <ul className="flex text-[#7e7e7e] gap-3 text-xs items-center">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
