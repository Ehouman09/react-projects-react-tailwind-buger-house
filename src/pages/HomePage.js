import React from "react";
import HeroTop from "../components/marketing/pageSection/HeroTop";
import LastProducts from "../components/marketing/pageSection/LastProducts";
import Products from "../components/marketing/pageSection/Products";
import EventCard from "../components/marketing/pageSection/EventCard";
import Booking from "../components/marketing/pageSection/Booking";

export default function HomePage() {
  return (
    <>
      <HeroTop/>
      <LastProducts/>
      <Products/>
      <EventCard/>
      <Booking/>
    </>
    
  )
}
