import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';
import customerData2 from '../data/customer-data2';
import HeroComponent from '../components/HeroComponent';
import SubHead from '../components/SubHead';
import Secondary from '../components/Secondary';
import Paragraph from '../components/Paragraph';
import AlikaSam from "../assets/MobileView_AlikaSamCreations.png";
import Flyer from '../assets/Single_US_Letter_Flyer_Mockup_3.png';
import Calaveras from '../assets/calaveras.jpg';
import Agriculture from '../assets/purdueagriculture.jpg';
import ywca from '../assets/ywca.png';
import TurkeyRun from '../assets/turkey-run-mobile.jpg';
import Fade from 'react-reveal/Fade';

export default () => (
  <Layout>
    <HeroComponent/>
    {/* <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <Heading className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            We create beautiful websites.
          </Heading>
          <Paragraph className="text-xl lg:text-2xl mt-6 font-light">
            HANK Development is a team of four women developers striving to create seamless digital experiences through creativity and strategy.
          </Paragraph>
          <Paragraph className="mt-8 md:mt-12">
            <Button size="lg">Learn More</Button>
          </Paragraph>
        </div>
        <div className="lg:w-1/2">
          <HeroImg />
        </div>
      </div>
    </section> */}
    <section id="services" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <SubHead className="text-3xl lg:text-5xl font-semibold">Our Services</SubHead>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <Paragraph className="font-semibold text-xl"> Web Design</Paragraph>
              <Paragraph className="mt-4">
              Working with our team, we create a custom web design that is visually appealing, easy to use, and optimized for all devices.
              </Paragraph>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <Paragraph className="font-semibold text-xl">Web Development</Paragraph>
              <Paragraph className="mt-4">
              We leverage different technologies for enhanced user experiences and develop a site that encourages growth. We always keep in mind the abilities of your team to edit and update content when developing.
              </Paragraph>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <Paragraph className="font-semibold text-xl">Graphic Design</Paragraph>
              <Paragraph className="mt-4">
              We will help you bring your brand to life. Our team is capable of creating impactful logos, infographics, branding elements, and more.
              </Paragraph>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <div className="container mx-auto text-center">
    <SubHead className="text-3xl lg:text-5xl font-semibold">Past Projects</SubHead>
    </div>
    <SplitSection
      id="expertise"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <Secondary className="text-3xl font-semibold leading-tight">Alika Sam Creations</Secondary>
          <Paragraph className="mt-8 text-xl font-light leading-relaxed">
            An eCommerce site for sustainable candles that was designed and developed by one of our team members. This site was created in Squarespace to make it easy for the customer to make changes.
          </Paragraph>
        </div>
      }
      secondarySlot={
        <Fade right>
          <img src={AlikaSam} alt="AlikaSamCreations Mobile Mockup" style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.08)'
          }}/>
        </Fade>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <Secondary className="text-3xl font-semibold leading-tight">
            Purdue Agricultural Communication
          </Secondary>
          <Paragraph className="mt-8 text-xl font-light leading-relaxed">
            A site developed in WordPress with Beaver Builder to advertise media relations within the department. The goal was to create a scalable site that was easy to edit with new members.
          </Paragraph>
        </div>
      }
      secondarySlot={
      <Fade left>
        <img src={Agriculture} alt="Purdue Agriculture Mockup" style={{
        boxShadow: '0 10px 28px rgba(0,0,0,.08)'
        }}/>
      </Fade>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <Secondary className="text-3xl font-semibold leading-tight">
            Rolling Hills Lawn Landscaping
          </Secondary>
          <Paragraph className="mt-8 text-xl font-light leading-relaxed">
            Marketing materials for a local lawncare business in Kansas City. This clean, friendly design sets apart this company from competitors in the landscaping business.
          </Paragraph>
        </div>
      }
      secondarySlot={
      <Fade right>
        <img src={Flyer} alt="Rolling Hills Flyer" style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.08)'
        }}/>
      </Fade>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <Secondary className="text-3xl font-semibold leading-tight">
            YWCA of Greater Lafayette
          </Secondary>
          <Paragraph className="mt-8 text-xl font-light leading-relaxed">
            To showcase a gallery, we created a brand guide to inform and guide deliverables centered around expression and strategic communication. 
          </Paragraph>
        </div>
      }
      secondarySlot={
      <Fade left>
        <img src={ywca} alt="YWCA Branding Guide" style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.08)'
        }}/>
      </Fade>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <Secondary className="text-3xl font-semibold leading-tight">
            Calaveras State Park
          </Secondary>
          <Paragraph className="mt-8 text-xl font-light leading-relaxed">
            A passion project to design and develop a site to update a state park in California. The design focused on large images to attract visitors.
          </Paragraph>
        </div>
      }
      secondarySlot={
      <Fade right>
        <img src={Calaveras} alt="Calaveras Site Mockup" style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.08)'
        }}/>
      </Fade>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <Secondary className="text-3xl font-semibold leading-tight">
            Turkey Run State Park
          </Secondary>
          <Paragraph className="mt-8 text-xl font-light leading-relaxed">
            A redesign of a popular state park in Indiana. The goal of this design was to add interest and more modern, responsive design.
          </Paragraph>
        </div>
      }
      secondarySlot={
      <Fade left>
        <img src={TurkeyRun} alt="Turkey Run State Park Mobile Mockup" style={{
          boxShadow: '0 10px 28px rgba(0,0,0,.08)'
        }}/>
      </Fade>}
    />

    {/* <section id="about" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section> */}

    <section id="about" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <SubHead className="text-3xl lg:text-5xl font-semibold text-center mb-20">About the Team</SubHead>
        <div className="flex flex-col md:flex-row md:-mx-3 w-full">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:-mx-3 w-full">
          {customerData2.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <SubHead className="text-5xl font-semibold">Ready to grow your business?</SubHead>
      <Paragraph className="mt-8 text-xl font-light">
        We would love to work with you to fulfill your business' needs. For any inquiries or questions, feel free to send us an email.
      </Paragraph>
      <p className="mt-8">
        <Button size="xl"><a href="mailto:hankdevelopmentinc@gmail.com" style={{backgroundSize: "0", color: "#393939"}}>Get Started Now</a></Button>
      </p>
    </section>
  </Layout>
);
