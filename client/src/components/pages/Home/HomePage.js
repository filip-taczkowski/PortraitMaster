import React from 'react';

import PromoBox from '../../features/PromoBox/PromoBox';
import TrendingPhotos from '../../features/TrendingPhotos/TrendingPhotosContainer';
import PhotosCatalog from '../../features/PhotosCatalog/PhotosCatalogContainer';

const HomePage = () => (
  <div>
    <PromoBox />
    <TrendingPhotos />
    <PhotosCatalog />
  </div>
);

export default HomePage;
