import React from "react";
import { Heading, Text } from "rebass";
import styled from "styled-components";
import icon from "../images/icon.svg";

const HeaderText = styled.div`
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-weight: normal;

  padding-right: 15px;
  padding-left: 15px;

  margin: auto;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }
`;

class LandHeader extends React.Component  {

    render(){

      return(
        <div className = {this.props.className}>         
            <img className = "icon" src = {icon} alt = "Website icon"/>
            <HeaderText>Placeholder</HeaderText>
        </div>
      )
      
    }
}

    const LandHeaderStyled = styled(LandHeader)`
   
    .icon{
      padding: 15px;


      background-color: white;
      color: white;
      font-size: 2em;
      margin-right: auto;
      margin-left: auto;
      margin-top: 50px;
      margin-bottom: 15px;
      height: 200px;
      @media only screen and (max-width: 600px) {
      height: 100px;
  }
      }
    background-color: white;
    border-radius: 10px;
    display: flex;
    height: 400px;
    flex-direction: column;
    align-content: flex-end;
    @media only screen and (max-width: 600px) {
      height: 250px;
  }
   `;
   
  export default LandHeaderStyled;
