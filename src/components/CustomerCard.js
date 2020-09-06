import React from 'react';
import Card from './Card';
import Paragraph from '../components/Paragraph';

const CustomerCard = ({ customer }) => (
  <Card className="mb-10">
      <img
        className="w-56 h-56 mr-4 mb-10 rounded-full"
        src={customer.customerImage}
        alt={customer.customerName}
      />
    <Paragraph className="text-xl font-semibold">{customer.title}</Paragraph>
    <Paragraph className="mt-6 font-light">{customer.content}</Paragraph>
    

      {/* 
        <div className="flex items-center mt-8">
        <div>
        <p>{customer.customerName}</p>
        <p className="text-sm text-gray-600">{customer.customerTitle}</p>
      </div> 
       </div>*/}
   
  </Card>
);

export default CustomerCard;
