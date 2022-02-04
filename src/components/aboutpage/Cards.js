import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CardsLayout from './CardsLayout';

const getData = graphql`
query GetAboutPageContent {
    strapiAboutPage {
      about_me
      what_ive_done
      aboutme_images {
        alternativeText
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      whativedone_images {
        alternativeText
        id
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  
`

const Cards = () => {
    const data = useStaticQuery(getData);
    const {
        strapiAboutPage: {
            about_me, what_ive_done, aboutme_images, whativedone_images
        }
    } = data;

    return (
        <div className="text-center h-auto max-w-screen-lg space-y-2
                        mx-auto flex flex-col items-center
                        xl:max-w-screen-xl lg:space-y-16">        
            <CardsLayout text={about_me} image={aboutme_images} />
            <CardsLayout text={what_ive_done} image={whativedone_images} order="reverse" alt={true} />
        </div>
    )
}

export default Cards;