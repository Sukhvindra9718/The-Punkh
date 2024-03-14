import React from 'react'
import VideosOverview from './VideosOverview'
import ImagesOverview from './ImagesOverview'


function Gallery({submenuActive}) {
  
  return (
    <div>
        {submenuActive === 0 && <VideosOverview />}
        {submenuActive === 1 && <ImagesOverview />}
    </div>
  )
}

export default Gallery