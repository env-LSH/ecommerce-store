'use client';

import { useState, useEffect } from 'react';

const formatter = new Intl.NumberFormat('ko', {
  style: 'currency',
  currency: 'KRW',
});

interface CurrencyProps {
  value?: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className=" font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
