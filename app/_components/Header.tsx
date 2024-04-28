import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className="p-3 flex justify-between items-center border shadow-sm">
        <Image src={'/images/logo.png'} alt="logo" width={90} height={10} />
        <Button variant="default">Get Started</Button>
      </div>
    </>
  );
};

export default Header;
