import React from 'react';
import { brand } from '../data/content';
export default function Logo() {
  return (
    <a className="logo" href="#">
      ✳ {brand.name}
      <span>{brand.chineseName}</span>
    </a>
  );
}
