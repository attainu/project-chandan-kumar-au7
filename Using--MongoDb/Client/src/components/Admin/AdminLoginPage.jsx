// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { userLoginFuncFromUserAction } from "../redux/actions/userAction";
// import { adminLoginFuncFromadminAction } from "../redux/actions/adminAction";

// import { userLoginSuccessAction } from "../redux/actions/userAction";
// import { userLoginErrorAction } from "../redux/actions/errorAction";

// const Login = () => {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const userLoginDatafromstore = useSelector(
//     (store) => store.userDataFromStore
//   );
//   const errordatafromstore = useSelector((store) => store.errorDatafromStore);

//   // ================== Maintaining state from here ================================//

//   const [UserType, setUserType] = useState("user");

//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");

//   var [EmError, setEmError] = useState("");
//   var [PassError, setPassError] = useState("");

//   // ================== Maintaining state end =========================================//

//   //=================== SubmitHandler for just one field =====================//

//   const formSubmitHandlerForAdmin = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setEmError("You Can't Skip email");
//     }
//     if (!password) {
//       setPassError("You Can't Skip password");
//     } else {
//       if (
//         Object.keys(userLoginDatafromstore.loginsuccess).length !== 0 ||
//         Object.keys(errordatafromstore.loginErrors).length !== 0
//       ) {
//         dispatch(userLoginErrorAction({}));
//         dispatch(userLoginSuccessAction({}));
//       }

//       dispatch(adminLoginFuncFromadminAction({ email, password }, history));
//       dispatch({
//         type: "HAVE_TO_LOAD_SPINNER",
//       });
//       dispatch({
//         type: "SET_HAVE_TO_DSPLAY_NOTIFIER",
//       });
//       // console.log(userLoginDatafromstore);
//     }
//   };

//   const formSubmitHandlerForUser = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setEmError("You Can't Skip email");
//     }
//     if (!password) {
//       setPassError("You Can't Skip password");
//     } else {
//       if (
//         Object.keys(userLoginDatafromstore.loginsuccess).length !== 0 ||
//         Object.keys(errordatafromstore.loginErrors).length !== 0
//       ) {
//         dispatch(userLoginErrorAction({}));
//         dispatch(userLoginSuccessAction({}));
//       }

//       dispatch(userLoginFuncFromUserAction({ email, password }, history));
//       dispatch({
//         type: "HAVE_TO_LOAD_SPINNER",
//       });
//       dispatch({
//         type: "SET_HAVE_TO_DSPLAY_NOTIFIER",
//       });
//       // console.log(userLoginDatafromstore);
//     }
//   };

//   //=================== End Of SubmitHandler for just one field END =====================//

//   return (
//     <>
//       <div className='hold-transition login-page'>
//         <div className='login-box'>
//           <div className='login-logo'>
//             <b>Login</b>Page
//           </div>
//           {/* <!-- /.login-logo --> */}
//           <div className='card'>
//             <div className='card-body login-card-body'>
//               <p className='login-box-msg'>*NOTE : All filds are mandatory</p>

//               <form onSubmit={ForgotFormSubmitHandler}>
//                 {/* ============== Start Email Div =========== */}

//                 {isSentEmail === true ? (
//                 <>
//                   {/* =============== Second Condition ========= */}

//                 <div className='input-group mb-3'>
//                   <input
//                     onChange={(e) => {
//                       setemail(e.target.value);
//                       setEmError("");
//                     }}
//                     type='email'
//                     className='form-control'
//                     placeholder='Email'
//                   />

//                   <div className='input-group-append'>
//                     <div className='input-group-text'>
//                       <button
//                         onClick={EmailSendSubmitHandler}
//                         className='fas fa-envelope btn btn-block btn-outline-success btn-sm'
//                         type='submit'></button>
//                     </div>
//                   </div>
//                   <h6 style={{ color: "red", textAlign: "left" }}>{EmError}</h6>

//                   {/* ================== End Email Div ================ */}

//                   {/* ============== Start OTP Div =========== */}

//                   <div>
//                     <select
//                       className='custom-select'
//                       id='inputGroupSelect03'
//                       aria-label='Example select with button addon'
//                       onChange={(e) => setUserType(e.target.value)}>
//                       <option value='user'>USER</option>

//                       <option value='admin'>ADMIN</option>
//                     </select>
//                   </div>
//                 </div>

//                 <h6 style={{ color: "red", textAlign: "left" }}>{EmError}</h6>

//                 <div className='input-group mb-3'>
//                   <input
//                     onChange={(e) => {
//                       setpassword(e.target.value);
//                       setPassError("");
//                     }}
//                     type='password'
//                     className='form-control'
//                     placeholder='Password'
//                   />
//                   <div className='input-group-append'>
//                     <div className='input-group-text'>
//                       <span className='fas fa-lock'></span>
//                     </div>
//                   </div>
//                 </div>

//                 <h6 style={{ color: "red", textAlign: "left" }}>{PassError}</h6>

//                 <div className='col-sm-8 mx-auto'>
//                   {UserType === "admin" ? (
//                     <button
//                       onClick={formSubmitHandlerForAdmin}
//                       type='submit'
//                       className='btn btn-block btn-outline-success btn-sm'>
//                       Sign_In_as_ADMIN
//                     </button>
//                   ) : (
//                     <button
//                       onClick={formSubmitHandlerForUser}
//                       type='submit'
//                       className='btn btn-block btn-outline-success btn-sm'>
//                       Sign_In_as_USER
//                     </button>
//                   )}
//                 </div>
//                 {/* <!-- /.col --> */}
//               </form>
//               {/*
//               <div className='social-auth-links text-center mb-3'>
//                 <p>- OR -</p>
//                 <Link to='#!' className='btn btn-block btn-primary'>
//                   <i className='fab fa-facebook mr-2' /> Sign in using Facebook
//                 </Link>
//                 <Link to='#!' className='btn btn-block btn-danger'>
//                   <i className='fab fa-google-plus mr-2' /> Sign in using
//                   Google+
//                 </Link>
//               </div> */}
//               {/* <!-- /.social-auth-links --> */}
//               <br />
//               <p className='mb-1'>
//                 <Link to='/forgot'>I Have forgot my password</Link>
//               </p>
//               <p className='mb-0'>
//                 <Link to='/register' className='text-center'>
//                   Don't have a account !
//                 </Link>
//               </p>
//             </div>
//             {/* <!-- /.login-card-body --> */}
//           </div>
//         </div>
//         {/* <!-- /.login-box --> */}
//       </div>
//     </>
//   );
// };

// export default Login;
