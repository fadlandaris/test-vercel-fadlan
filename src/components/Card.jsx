import React from 'react'
import { spices } from '../assets/assets'
import styles from '../style'
import { navLinks } from '../constants/constants'

const Card = () => {
  return (
    <main className={`${styles.flexCenter}`}>
      <div className={``}>
        <p className={`text-center font-poppins text-3xl font-bold`}>Test Vercel</p>
        <img src={spices} alt={spices} className={`w-[400px]`}/>
          <div className={`flex justify-between`}>
            {navLinks.map((nav, index) => (
              <p key={index}>{nav.title}</p>
            ))}
          </div>
      </div>
    </main>
  )
}

export default Card