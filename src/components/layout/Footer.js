import React from 'react';
import SubHead from '../SubHead';
import Paragraph from '../Paragraph';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800 md:flex-column">
    <div className="flex -mx-3 flex-col md:flex-row">
      <div className="flex-1 px-3">
        <SubHead className="text-3xl font-semibold">About Us</SubHead>
        <Paragraph className="mt-5 mb-10">HANK Development is a team of four female web developers based in West Lafayette, IN who specialize in creative and strategic websites.</Paragraph>
      </div>
      {/* <div className="flex-1 px-3">
        <SubHead className="text-lg font-semibold">Important Links</SubHead>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div> */}
      <div className="flex-1 px-3">
        <SubHead className="text-3xl font-semibold">Contact Us</SubHead>
        <ul className="mt-4 leading-loose">
          <li>
            <a className="px-2" href="https://www.linkedin.com/in/hank-development-4882991b6/">LinkedIn</a>
          </li>
          <li>
            <a className="px-2" href="mailto:hankdevelopmentinc@gmail.com">hankdevelopmentinc@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
