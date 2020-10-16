import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import Icon from "@material-ui/core/Icon";

import { GetLoanFunctionFromGetLoanAction } from "../../../redux/actions/getLoanAction";

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "100vh",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function LoanApplyForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const GetLoanDataResponseFromStore = useSelector(
    (store) => store.GetLoanDataResponseFromStore
  );

  // console.log(
  //   "GetLoanDataResponseFromStore ======> >>>>>> ",
  //   GetLoanDataResponseFromStore.settotalloanamount
  // );

  const classes = useStyles();
  const [pannumberValues, setpannumberValues] = React.useState({
    pannumber: "",
    showpannumber: false,
  });

  const handleChange = (prop) => (event) => {
    setpannumberValues({ ...pannumberValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setpannumberValues({
      ...pannumberValues,
      showpannumber: !pannumberValues.showpannumber,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [city, setcity] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [pincode, setpincode] = useState("");
  const [address, setaddress] = useState("");
  const [age, setage] = useState("");
  const [totalloanamount, settotalloanamount] = useState("");
  const [tenor, settenor] = useState("");
  const [interestrate] = useState(8);

  const [pancardimage, setpancardimage] = useState("");
  const [aadharcardimage, setaadharcardimage] = useState("");
  const [bankaccountimage, setbankaccountimage] = useState("");
  const [usercurrentimage, setusercurrentimage] = useState("");

  const setaadharcardimageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setaadharcardimage(img);
      // console.log("aadharcardimage ", aadharcardimage);
      // console.log("e.target.files ", e);
    }
  };
  const setpancardimageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setpancardimage(img);
      // console.log("pancardimage ", pancardimage);
      // console.log("e.target.files ", e.target.files[0]);
    }
  };
  const setbankaccountimageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setbankaccountimage(img);
      // console.log("e.target.files ", e.target.files[0]);
      // console.log("bankaccountimage ", bankaccountimage);
    }
  };
  const setusercurrentimageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setusercurrentimage(img);
      // console.log("e.target.files ", e.target.files[0]);
      // console.log("usercurrentimage ", usercurrentimage);
    }
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("email", email);
    // formData.append("fullname", fullname);
    // formData.append("city", city);
    // formData.append("mobileno", mobileno);
    // formData.append("pannumber", pannumber);
    // formData.append("pincode", pincode);
    // formData.append("address", address);
    // formData.append("age", age);
    // formData.append("totalloanamount", totalloanamount);
    // formData.append("tenor", tenor);
    // formData.append("interestrate", interestrate);

    // formData.append("pancardimage", pancardimage);
    // formData.append("aadharcardimage", aadharcardimage);
    // formData.append("bankaccountimage", bankaccountimage);
    // formData.append("usercurrentimage", usercurrentimage);

    // console.log(
    //   "formData ====>>>> ",
    //   email,
    //   fullname,
    //   city,
    //   mobileno,
    //   pannumberValues.pannumber,
    //   pincode,
    //   address,
    //   age,
    //   totalloanamount,
    //   tenor,
    //   interestrate,
    //   pancardimage,
    //   aadharcardimage,
    //   bankaccountimage,
    //   usercurrentimage
    // );

    const pannumber = pannumberValues.pannumber;

    dispatch(
      GetLoanFunctionFromGetLoanAction(
        {
          email,
          fullname,
          city,
          mobileno,
          pannumber,
          pincode,
          address,
          age,
          totalloanamount,
          tenor,
          interestrate,
          pancardimage,
          aadharcardimage,
          bankaccountimage,
          usercurrentimage,
        },
        history
      )
    );
    dispatch({
      type: "HAVE_TO_LOAD_SPINNER",
    });
    dispatch({
      type: "SET_HAVE_TO_DSPLAY_NOTIFIER",
    });
  };

  useEffect(() => {
    if (GetLoanDataResponseFromStore.loanAmountAndTenor != null) {
      settotalloanamount(
        Number(
          JSON.stringify(GetLoanDataResponseFromStore.loanAmountAndTenor.LoanA)
        )
      );
      settenor(
        Number(
          JSON.stringify(GetLoanDataResponseFromStore.loanAmountAndTenor.Ten)
        )
      );
    }
  }, [GetLoanDataResponseFromStore]);

  return (
    <Grid container component='main'>
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Apply For Your Loan
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={formSubmitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* ========{{{{}}}}======= 1st input field ========{{{{{}}}}}===== */}
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  onChange={(e) => setemail(e.target.value)}
                  // name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  onChange={(e) => setfullname(e.target.value)}
                  // name='fullname'
                  label='FullName'
                  type='text'
                  id='fullname'
                  autoComplete='fullname'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* ======{{{{{{{}}}}}}}====== password ======{{{{{{{}}}}}}}====== */}
                <FormControl
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  className={clsx(classes.margin, classes.textField)}>
                  <InputLabel htmlFor='outlined-adornment-password'>
                    PanCardNumber
                  </InputLabel>
                  <OutlinedInput
                    id='outlined-adornment-password'
                    type={pannumberValues.showpannumber ? "text" : "password"}
                    value={pannumberValues.pannumber}
                    // name='pannumber'
                    onChange={handleChange("pannumber")}
                    endAdornment={
                      <InputAdornment>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}>
                          {pannumberValues.showpannumber ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
                {/* ======{{{{{{{}}}}}}}====== password ======{{{{{{{}}}}}}}====== */}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  onChange={(e) => setmobileno(e.target.value)}
                  // name='mobileno'
                  label='MobileNo'
                  type='number'
                  id='mobileno'
                  autoComplete='mobileno'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='address'
                  label='Address'
                  onChange={(e) => setaddress(e.target.value)}
                  // name='address'
                  autoComplete='address'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  id='city'
                  label='City'
                  onChange={(e) => setcity(e.target.value)}
                  // name='city'
                  autoComplete='city'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  onChange={(e) => setpincode(e.target.value)}
                  // name='pincode'
                  label='AreaPinCode'
                  type='number'
                  id='pincode'
                  autoComplete='pincode'
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  onChange={(e) => setage(e.target.value)}
                  // name='age'
                  label='Age'
                  type='number'
                  id='age'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  type='number'
                  fullWidth
                  id='totalloanamount'
                  label='TotalLoanAmount'
                  name='totalloanamoun'
                  value={totalloanamount}
                  onChange={(e) => settotalloanamount(e.target.value)}
                  // name='totalloanamount'
                  autoComplete='totalloanamount'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  type='number'
                  required
                  fullWidth
                  value={tenor}
                  onChange={(e) => settenor(e.target.value)}
                  // name='tenor'
                  label='Tenor'
                  name='tenor'
                  id='tenor'
                  autoComplete='tenor'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  value='8'
                  readOnly
                  id='interestrate'
                  label='Interestrate'
                  // onChange={(e) => setinterestrate(e.target.value)}
                  // name='interestrate'
                  autoComplete='interestrate'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  // onChange={(e) => setDescription(e.target.value)}
                  // name='aadharnumber'
                  label='AadharNumber'
                  type='aadharnumber'
                  id='aadharnumber'
                  autoComplete='aadharnumber'
                />
              </Grid>
            </Grid>
            {/* =================={{{{{{{{ code for image taking  }}}}}}}} ======================*/}
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  accept='.jpg,.png,.jpeg'
                  onChange={
                    setaadharcardimageHandler
                    // console.log("aadharcardimage ", aadharcardimage);
                  }
                  label='Aadhar_Card'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // name='aadharcardimage'
                  type='file'
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  label='Pan_Card'
                  accept='.jpg,.png,.jpeg'
                  onChange={
                    setpancardimageHandler
                    // console.log("pancardimage ", pancardimage);
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // name='pancardimage'
                  type='file'
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  label='Bank_Passbook'
                  accept='.jpg,.png,.jpeg'
                  onChange={
                    setbankaccountimageHandler
                    // console.log("e ", e); //
                    // console.log("bankaccountimage ", bankaccountimage); //
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // name='bankaccountimage'
                  type='file'
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  label='Current_Image'
                  accept='.jpg,.png,.jpeg'
                  onChange={
                    setusercurrentimageHandler
                    // console.log("usercurrentimage ", usercurrentimage);
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  // name='usercurrentimage'
                  type='file'
                />
              </Grid>
            </Grid>

            <br />
            <br />

            <Button
              type='submit'
              endIcon={<Icon>send</Icon>}
              color='primary'
              variant='outlined'>
              Apply_For_Loan
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
