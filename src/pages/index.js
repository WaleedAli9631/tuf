import * as React from "react"
import Layout from "../components/layout"
import Voter from "../components/vote_selection.js"
import Htext from "../components/hometext.js"
import styled from "styled-components";
import Hero from "../components/landheader.js"


const Wrapper = styled.div`
  display: flex;
`;
const Wrapper2 = styled.div`
  margin: auto;
  align-content: center;
  width: fit-content;
`;
const Content = styled.div`
  width: 1000px;
  padding-top: 25px;
  margin: auto;
`;

//doesn't do anything :(
const StyledVoter = styled(Voter)`
  padding-top: 25px;
  margin: auto;
`;

const IndexPage = () => (
  <Layout>
    <Wrapper2>
      <Hero/>
    </Wrapper2>
   <Wrapper>
     <Content>
      <Htext/>
      <Wrapper2>
        <StyledVoter/>
      </Wrapper2>
     </Content>
   </Wrapper> 
  </Layout>
)

export default IndexPage
