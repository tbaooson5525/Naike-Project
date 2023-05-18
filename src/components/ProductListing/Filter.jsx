import { useState } from "react";
import Checkbox from "./Checkbox";
import CheckModel from "./CheckModel";
import More from "./More";
import MoreAll from "./MoreAll";


export default function Filter({ open, onFilterClose }) {
  if (!open) return null;

  const [check, setCheck] = useState(false);

  const [more, setMore] = useState(false);

  function handleCheck() {
    setCheck(true);
  }

  function handleNoCheck() {
    setCheck(false);
  }

  function handleMoreOpen() {
    setMore(true);
  }

  function handleMoreClose() {
    setMore(false);
  }
  return (
    <div className="w-full h-full px-5 bg-white fixed overflow-auto z-[40] lg:fixed lg:w-[290px] lg:h-full lg:overflow-auto lg:pt-20">
      <div className="pt-5 pb-5 relative lg:hidden">
        <h1 className="text-base pt-5">Filter</h1>
        <div className="absolute top-4 right-8">
          <button className="fixed" onClick={onFilterClose}>
            <div className="w-8 text-black">
              <svg fill="#111" viewBox="0 0 24 24">
                <path d="M12 0C9.813 0 7.8.533 5.96 1.6A11.793 11.793 0 0 0 1.6 5.96C.533 7.8 0 9.813 0 12s.533 4.2 1.6 6.04a11.793 11.793 0 0 0 4.36 4.36C7.8 23.467 9.813 24 12 24s4.2-.533 6.04-1.6a11.793 11.793 0 0 0 4.36-4.36C23.467 16.2 24 14.187 24 12s-.533-4.2-1.6-6.04a11.793 11.793 0 0 0-4.36-4.36C16.2.533 14.187 0 12 0zm5.2 15.28l-1.92 1.92L12 13.84 8.72 17.2 6.8 15.28 10.16 12 6.8 8.72 8.72 6.8 12 10.08l3.28-3.28 1.92 1.92L13.92 12l3.28 3.28z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <h2 className="text-base pt-2 pb-8 font-medium">Sort By</h2>
        <div className="flex-col pb-5">
          <div className="flex items-center gap-3 pb-5">
            <input
              id="default-radio-1"
              type="radio"
              name="colored-radio"
              className="w-5 h-5"
            />
            <label htmlFor="default-radio-1">Featured</label>
          </div>
          <div className="flex items-center gap-3 pb-5">
            <input
              id="default-radio-2"
              type="radio"
              name="colored-radio"
              className="w-5 h-5"
            />
            <label htmlFor="default-radio-2">Newest</label>
          </div>
          <div className="flex items-center gap-3 pb-5">
            <input
              id="default-radio-3"
              type="radio"
              name="colored-radio"
              className="w-5 h-5"
            />
            <label htmlFor="default-radio-3">Price: High-Low</label>
          </div>
          <div className="flex items-center gap-3 pb-5">
            <input
              id="default-radio-4"
              type="radio"
              name="colored-radio"
              className="w-5 h-5"
            />
            <label htmlFor="default-radio-4">Price: Low-High</label>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ul className="text-base font-medium flex whitespace-nowrap lg:flex-col">
          <li className="pb-[14px] px-4">
            <a href="">Lifestyle</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Jordan</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Running</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Basketball</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Training & Gym</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Football</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Skateboarding</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Golf</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Nike By You</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Boots</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Tennis</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Athletics</a>
          </li>
          <li className="pb-[14px] px-4">
            <a href="">Walking</a>
          </li>
        </ul>
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Gender</h2>
        <Checkbox
          children={"Men"}
          check={check}
          onCheck={handleCheck}
        />
        <Checkbox children={"Women"}  />
        <Checkbox children={"Unisex"}  />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Shop By Price</h2>
        <Checkbox children={"Under 1,000,000đ"} check={check} onCheck={handleCheck} />
        <Checkbox children={"1,000,000₫ - 2,000,000₫"} check={check} onCheck={handleCheck} />
        <Checkbox children={"2,000,001₫ - 4,999,999₫"} check={check} onCheck={handleCheck} />
        <Checkbox children={"Over 5,000,000₫"} check={check} onCheck={handleCheck} />
      </div>
      <div className="border-t">
        <h2 className="text-base pt-10 pb-8 font-medium">Brand</h2>
        <Checkbox children={"Nike Sportswear"} />
        <Checkbox children={"Jordan"} />
        <Checkbox children={"Nike By You"} />
        <Checkbox children={"ACG"} />
        <button
          className={`${more ? "hidden" : "block"} pb-5`}
          onClick={handleMoreOpen}
        >
          + More
        </button>
        <More children={"NikeLab"} more={more} onMoreClose={handleMoreClose} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Shoes</h2>
        <Checkbox children={"Platforms"} />
        <Checkbox children={"Boots"} />
      </div>
      <div className="border-t">
        <h2 className="text-base pt-10 pb-8 font-medium">Icon</h2>
        <Checkbox children={"Air Force 1"} />
        <Checkbox children={"Air Max"} />
        <Checkbox children={"Air Rift"} />
        <Checkbox children={"Blazer"} />
        <button
          className={`${more ? "hidden" : "block"} pb-5`}
          onClick={handleMoreOpen}
        >
          + More
        </button>
        <MoreAll children={"Bruin"} more={more} />
        <MoreAll children={"Cortez"} more={more} />
        <MoreAll children={"Huarache"} more={more} />
        <MoreAll children={"Internationalist"} more={more} />
        <MoreAll children={"Mercurial"} more={more} />
        <MoreAll children={"Metcon"} more={more} />
        <MoreAll children={"Miler"} more={more} />
        <MoreAll children={"Nike Dunk"} more={more} />
        <MoreAll children={"Pegasus"} more={more} />
        <MoreAll children={"Phantom"} more={more} />
        <MoreAll children={"Presto"} more={more} />
        <MoreAll children={"Roshe"} more={more} />
        <MoreAll children={"Structure"} more={more} />
        <MoreAll children={"Sunray"} more={more} />
        <MoreAll children={"Tempo"} more={more} />
        <MoreAll children={"Tiempo"} more={more} />
        <MoreAll children={"Vomero"} more={more} />
        <MoreAll children={"Zoom Rival"} more={more} />
        <MoreAll children={"G.T. Series"} more={more} />
        <More
          children={"Nike Invincible"}
          more={more}
          onMoreClose={handleMoreClose}
        />
      </div>
      <div className="border-t">
        <h2 className="text-base pt-10 pb-8 font-medium">Air Max</h2>
        <Checkbox children={"Air Max 1"} />
        <Checkbox children={"Air Max 90"} />
        <Checkbox children={"Air Max 95"} />
        <Checkbox children={"Air Max 97"} />
        <button
          className={`${more ? "hidden" : "block"} pb-5`}
          onClick={handleMoreOpen}
        >
          + More
        </button>
        <MoreAll children={"Air Max 270"} more={more} />
        <MoreAll children={"Air Max Plus"} more={more} />
        <More children={"VaporMax"} more={more} onMoreClose={handleMoreClose} />
      </div>
      <div className="border-t">
        <h2 className="text-base pt-10 pb-8 font-medium">Technology</h2>
        <Checkbox children={"Nike FlyEase"} />
        <Checkbox children={"All Conditions Control"} />
        <Checkbox children={"Nike Anti-Clog"} />
        <Checkbox children={"Nike Flyknit"} />
        <button
          className={`${more ? "hidden" : "block"} pb-5`}
          onClick={handleMoreOpen}
        >
          + More
        </button>
        <MoreAll children={"Nike Flymesh"} more={more} />
        <MoreAll children={"Nike Flyweave"} more={more} />
        <MoreAll children={"Nike Flywire"} more={more} />
        <MoreAll children={"GORE-TEX"} more={more} />
        <MoreAll children={"Nike Lunarlon"} more={more} />
        <MoreAll children={"Nike Max Air"} more={more} />
        <MoreAll children={"Nike Air"} more={more} />
        <MoreAll children={"Nike Free"} more={more} />
        <MoreAll children={"Nike React"} more={more} />
        <MoreAll children={"Nike Shox"} more={more} />
        <MoreAll children={"NikeSkin"} more={more} />
        <MoreAll children={"Nike Zoom Air"} more={more} />
        <More
          children={"Nike ZoomX"}
          more={more}
          onMoreClose={handleMoreClose}
        />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Closure Type</h2>
        <Checkbox children={"Slip-On"} />
        <Checkbox children={"Zip"} />
        <Checkbox children={"Strap"} />
        <Checkbox children={"Toggle"} />
      </div>
      <div className="border-t">
        <h2 className="text-base pt-10 pb-8 font-medium">Athletes</h2>
        <Checkbox children={"LeBron James"} />
        <Checkbox children={"Kevin Durant"} />
        <Checkbox children={"Tiger Woods"} />
        <Checkbox children={"Ja Morant"} />
        <button
          className={`${more ? "hidden" : "block"} pb-5`}
          onClick={handleMoreOpen}
        >
          + More
        </button>
        <MoreAll children={"Cristiano Ronaldo"} more={more} />
        <MoreAll children={"Serena Williams"} more={more} />
        <MoreAll children={"Rafael Nadal"} more={more} />
        <MoreAll children={"Naomi Osaka"} more={more} />
        <MoreAll children={"Russell Westbrook"} more={more} />
        <MoreAll children={"Giannis Antetokounmpo"} more={more} />
        <MoreAll children={"Nyjah Huston"} more={more} />
        <MoreAll children={"Jayson Tatum"} more={more} />
        <MoreAll children={"Elena Delle Donne"} more={more} />
        <More
          children={"Ishod Wair"}
          more={more}
          onMoreClose={handleMoreClose}
        />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Shoe Height</h2>
        <Checkbox children={"Low Top"} />
        <Checkbox children={"Mid Top"} />
        <Checkbox children={"High Top"} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Width</h2>
        <Checkbox children={"Regular"} />
        <Checkbox children={"Wide"} />
        <Checkbox children={"Extra Wide"} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Shoe Feel</h2>
        <Checkbox children={"Free & Flexible"} />
        <Checkbox children={"Springy & Neutral"} />
        <Checkbox children={"Soft & Supportive"} />
      </div>
      <div className="border-t">
        <h2 className="text-base pt-10 pb-8 font-medium">Surface</h2>
        <Checkbox children={"Artificial Grass"} />
        <Checkbox children={"Firm Ground"} />
        <Checkbox children={"Hard Court"} />
        <Checkbox children={"Indoor Court"} />
        <button
          className={`${more ? "hidden" : "block"} pb-5`}
          onClick={handleMoreOpen}
        >
          + More
        </button>
        <MoreAll children={"Multi-Ground"} more={more} />
        <MoreAll children={"Road"} more={more} />
        <MoreAll children={"Track"} more={more} />
        <MoreAll children={"Trail"} more={more} />
        <More children={"Turf"} more={more} onMoreClose={handleMoreClose} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Best For</h2>
        <Checkbox children={"Cold Weather"} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Material</h2>
        <Checkbox children={"Canvas"} />
        <Checkbox children={"Leather"} />
        <Checkbox children={"Velvet"} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Features</h2>
        <Checkbox children={"Ghost Lace system"} />
        <Checkbox children={"Spikeless"} />
        <Checkbox children={"Water-resistant"} />
        <Checkbox children={"Waterproof"} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Benefits</h2>
        <Checkbox children={"Cushioned"} />
        <Checkbox children={"Easy On & Off"} />
        <Checkbox children={"Ultra Comfort"} />
      </div>
      <div className="border-t pb-5">
        <h2 className="text-base pt-10 pb-8 font-medium">Collaborator</h2>
        <Checkbox children={"Off-White™"} />
      </div>
      <CheckModel check={check} onNoCheck={handleNoCheck} />
    </div>
  );
}
