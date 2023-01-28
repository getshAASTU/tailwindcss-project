import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () => {
  return (
    <section className={`flex flex-wrap items-center justify-evenly flex-row`}>
       {
        clients.map(({id,logo})=>{
          return (
            <div key={id} className={`${styles.flexCenter}  flex-1 sm:min-w-[192px] py-4 min-w-[120px]`}>
                <img src={logo} alt="" className='sm:w-[192px] w-[100px] object-contain' />
            </div>
          )
        })
       }
    </section>
  )
}

export default Clients