import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
  muiBtn: {
    "&.MuiButtonBase-root": {
      backgroundColor: "white",
      color: "#00b96a",
      // outline: "1px solid #00b96a",
      border:"1px solid #31B665",
      borderRadius: "25px 25px",
      minWidth: "100%",
      textTransform: "none",
    },
    "&.MuiButtonBase-root:hover": {

      color: "white",
      background: "#00b96a",
      boxShadow: "2px 2px"

    }
  },
  muiIcon: {
    fontSize: "x-large",
    color: "#4267B2",
  },
  insta: {
    fontSize: "x-large",
    color: "#fb3958",


  },
  muiIcons:{
    fontSize: "large",
    color:"gray",
    
  },
  loadingBtnTextAndBack: {
    "& .MuiButton-text": {
      fontSize: ".7rem",
    },
    "& .MuiLoadingButton-root":{
      width:"100%",
      borderRadius:"40px",
      backgroundColor: "#ffff",
      color: "#31B665",
      // outline: "1px solid #31B665",
      textTransform: "none",
      border:"1px solid #31B665"
      // backgroundColor:"#31B665"

    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border:"1px solid #31B665"
    },
  },
  loadingBtnTextAndBack: {
    "& .MuiButton-text": {
      fontSize: ".7rem",
    },
    "& .MuiLoadingButton-root":{
      width:"100%",
      borderRadius:"40px",
      backgroundColor: "#ffff",
      color: "#31B665",
      // outline: "1px solid #31B665",
      textTransform: "none",
      border:"1px solid #31B665"
      // backgroundColor:"#31B665"

    },
    "& .MuiButtonBase-root:hover": {
      color: "#ffff",
      backgroundColor: "#00b96a",
      border:"1px solid #31B665"
    },
  },
  disPen_Icons:{
    fontSize: "large",
    color:"#31B665",
    
  },
  muiSearchIcon:{
    "& .MuiSvgIcon-root":{
      color:"#31B665"
    }
  }
 
});
export default useStyles