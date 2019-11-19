import React from "react";
import Button from "../../Button";
import { ContentContainer, CatText } from "./styles";

export default () => (
  <div>
    <ContentContainer>
      <CatText>
        I heard u needed to call a function from{" "}
        <Button onClick={() => window.alert("hello")}>here</Button> too
      </CatText>
      <img
        src={
          "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg"
        }
      />
    </ContentContainer>
  </div>
);
