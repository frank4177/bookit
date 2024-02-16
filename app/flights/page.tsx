import ResultsSection from '@/components/sections/Flights/ResultsSection'
import SearchSection from '@/components/sections/Flights/SearchSection'
import React from 'react'

const FlightsPage = () => {
  return (
    <div className='space-y-7'>
      <SearchSection/>
      <ResultsSection/>
    </div>
  )
}

export default FlightsPage