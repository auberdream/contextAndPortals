import React, { useState } from "react";
import { ContentContainer } from "./styles";
import HeaderPortal from "../../Header/HeaderPortal";

export default () => {
  const catPics = [
    "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg",
    "https://www.petplan.co.uk/images/breeds/norwegian-forest-cat.jpg",
    "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
    "http://cdn.shopify.com/s/files/1/2525/3114/files/Ragdoll_Cat_2_large.png?v=1520142351",
    "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/3c6a0a1b2cdf64ed?w=890&h=590&crop=1",
    "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg",
    "https://www.petplan.co.uk/images/breeds/norwegian-forest-cat.jpg",
    "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg",
    "http://cdn.shopify.com/s/files/1/2525/3114/files/Ragdoll_Cat_2_large.png?v=1520142351",
    "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/3c6a0a1b2cdf64ed?w=890&h=590&crop=1"
  ];

  const [catImg, setCatImg] = useState(catPics[0]);

  return (
    <div>
      <HeaderPortal>
        <button
          onClick={() => {
            setCatImg(catPics[Math.floor(Math.random() * 10)]);
          }}
        >
          random cat
        </button>
      </HeaderPortal>
      <ContentContainer>
        <img alt={'randomcat'} src={catImg} width={400} />
      </ContentContainer>
    </div>
  );
};
