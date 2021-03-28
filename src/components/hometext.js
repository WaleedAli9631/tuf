import * as React from "react"
import styled from "styled-components";


const HeaderText = styled.div`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: normal;

  padding-right: 15px;
  padding-left: 15px;

  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

class HText extends React.Component {
    render(){
      return <div className={this.props.className}>
         <HeaderText>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod eros vel urna placerat vestibulum. 
         Aenean aliquet ex sit amet lectus dignissim faucibus. Ut pellentesque magna quis orci euismod interdum. 
         In lorem urna, mollis eget metus vitae, accumsan dignissim risus. Aenean maximus id nunc eget efficitur.
          Suspendisse at rutrum lectus. Phasellus iaculis auctor dui, at viverra enim egestas quis.
         </HeaderText>
      </div>
      }
    }
    
    const HTextStyled = styled(HText)`
      
    `
    
    export default  HTextStyled;