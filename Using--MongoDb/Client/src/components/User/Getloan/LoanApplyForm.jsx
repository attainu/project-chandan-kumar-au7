import * as React from "react";
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
          <form className={classes.form} noValidate>
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
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='fullname'
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
                    name='pannumber'
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
                  name='mobileno'
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
                  name='address'
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
                  name='city'
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
                  name='pincode'
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
                  name='age'
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
                  fullWidth
                  id='totalloanamount'
                  label='TotalLoanAmount'
                  name='totalloanamount'
                  autoComplete='totalloanamount'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='tenor'
                  label='Tenor'
                  type='tenor'
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
                  id='interestrate'
                  label='Interestrate'
                  name='interestrate'
                  autoComplete='interestrate'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='aadharnumber'
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
                  label='Aadhar_Card'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='aadharcardimage'
                  type='file'
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  label='Pan_Card'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='pancardimage'
                  type='file'
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  label='Bank_Passbook'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='bankaccountimage'
                  type='file'
                />

                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  label='Current_Image'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name='usercurrentimage'
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
