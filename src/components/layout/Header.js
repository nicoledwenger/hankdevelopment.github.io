import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../Logo';

const Header = () => (
  <header className="sticky top-0 bg-white" style={{zIndex: "1000"}}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-2 text-primary-default mr-5" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-2 text-primary-default mr-5" href="#expertise">
          Expertise
        </AnchorLink>
        <AnchorLink className="px-2 text-primary-default mr-5" href="#about">
          About
        </AnchorLink>
        <AnchorLink className="px-2 text-primary-default mr-5" href="#contact">
          Contact
        </AnchorLink>
      </div>
{/*       <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div> */}
    </div>
  </header>
);

export default Header;
