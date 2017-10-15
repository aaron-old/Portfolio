import React from 'react';
import {Image} from 'semantic-ui-react';
import portfolioImage from './portfolio-image.png';

const PortfolioImage = () => (
    <Image
        size="medium"
        shape="circular"
        centered
        src={portfolioImage}
        alt="Me on Mount. Elinor"
    />
);

export default PortfolioImage;
