import React, { useContext, useState } from 'react'
import Header from './Header'
import Things from './Things'
import Cardspage from './Cardspage'

import { DataCon } from '../contexts/DataCon';

export default function Home() {

      return (
      <div>
          <Header style={{position:'sticky',top:'2px'}}/>
          <Things />
      </div>
      )
  
}
