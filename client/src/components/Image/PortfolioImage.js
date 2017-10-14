import React from 'react';
import {Image} from 'semantic-ui-react';
import portfolioImage from './portfolio-image.jpg';

const PortfolioImage = () => {

    return (
        <Image
            size="medium"
            shape="rounded"
            centered
            src={portfolioImage}
        />
    )
};

export default PortfolioImage;