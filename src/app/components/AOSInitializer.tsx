'use client';

import { useEffect } from 'react';

export default function AOSInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init;
    }
  }, []);
  return null;
}
