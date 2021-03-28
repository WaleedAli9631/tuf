import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { motion } from "framer-motion";
import { ethers } from "ethers";

const StyledButton = styled(Button)`
color: #ec6e15;
border-color: #ec6e15;
  && :hover {
    color: #ec6e15;
    border-color: #ec6e15;
    background-color: #DCDCDC;
  }
`;

const StyledRadio = styled(Radio)`
  color: #ec6e15;
  border-color: black;
  && :hover {
    color: #ec6e15;
    border-color: #ec6e15;
    background-color: #DCDCDC;
  }
`;

const StyledFormLabel = styled(FormLabel)`
color: black;
`;

const abi = [
    // Read-Only Functions
    "function balanceOf(address owner) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",

    // Authenticated Functions
    "function transfer(address to, uint amount) returns (boolean)",

    // Events
    "event Transfer(address indexed from, address indexed to, uint amount)"
];

// This can be an address or an ENS name
const address = "dai.tokens.ethers.eth";

// An example Provider
const provider = ethers.getDefaultProvider();

// An example Signer
const signer = ethers.Wallet.createRandom().connect(provider);

// Read-Only; By connecting to a Provider, allows:
// - Any constant function
// - Querying Filters
// - Populating Unsigned Transactions for non-constant methods
// - Estimating Gas for non-constant (as an anonymous sender)
// - Static Calling non-constant methods (as anonymous sender)
const erc20 = new ethers.Contract(address, abi, provider);

// Read-Write; By connecting to a Signer, allows:
// - Everything from Read-Only (except as Signer, not anonymous)
// - Sending transactions for non-constant functions
const erc20_rw = new ethers.Contract(address, abi, signer)

const interactWithBank = async() => {    
    // var contract = new ethers.Contract(contractAddress, contractAbi, provider);
    // var wallet = provider.getSigner(1);
    // contract = contract.connect(wallet);

    // var balance = await contract.getUserBalance();
    // console.log(balance.toString(10));
};

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }));
  
  export default function ErrorRadios() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
  
    const handleRadioChange = (event) => {
      setValue(event.target.value);
      setHelperText(' ');
      setError(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
      } else if (value === 'worst') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
      } else {
        setHelperText('Please select an option.');
        setError(true);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error} className={classes.formControl}>
          <StyledFormLabel component="legend">Options</StyledFormLabel>
          <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
            <FormControlLabel value="best" control={<StyledRadio color = "orange" />} label="Option 1" />
            <FormControlLabel value="worst" control={<StyledRadio color = "orange" />} label="Option 2" />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <motion.div whileHover={{ scale: 1.1 }}>
          <StyledButton type="submit" variant="outlined" color="primary" className={classes.button}>
            Submit
          </StyledButton>
          </motion.div>          
        </FormControl>
      </form>
    );
  }
  