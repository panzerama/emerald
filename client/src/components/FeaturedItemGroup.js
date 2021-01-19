import React from 'react'
import FeaturedItem from './FeaturedItem'
import './FeaturedItemGroup.css'

export default function FeaturedItemGroup(props) {
  return (
    <div className="wrapper">
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
      <FeaturedItem />
    </div>
  )
}