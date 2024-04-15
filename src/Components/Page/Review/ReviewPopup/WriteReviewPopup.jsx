import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useStyles from "../../../../Style";
import { RiCloseCircleFill } from "react-icons/ri";
import { IconButton, Select } from "@mui/material";
import { Rating } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";
import '../Review.css'
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, FormControl } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Createcontext from "../../../../Hooks/Context";
import { useNavigate } from "react-router-dom";
  const WriteReviewPopup = ({
    reviewloading,
    onSubmit,
    buttonclass,
    GetProductReview,
    SetGetProductReview,
  }) => {
  if (buttonclass === undefined) {
    buttonclass = "WriteReviewBtn_Color";
  }
  const navigate = useNavigate();
  const { state } = React.useContext(Createcontext);
  const { register, handleSubmit, errors, getValues, control } = useForm();
  const classes = useStyles();
  const handleClickOpen = () => {
    if (state.login) {
      SetGetProductReview({ ...GetProductReview, popup: true });
    } else {
      navigate("/login");
    }
  };

  const handleClose = () => {
    SetGetProductReview({ ...GetProductReview, popup: false });
  };

  return (
    <>
      <Button
        className={classes[buttonclass]}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Write a review
      </Button>
      <Dialog
        open={GetProductReview.popup}
        onClose={handleClose}
        className={classes.WriteReviewDialog}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 writeReviewContainer px-0">
              <div className="col-12 writeReviewCloseIconContainer">
                <IconButton onClick={handleClose} aria-label="closebutton">
                  <RiCloseCircleFill color="#949494" size={24} />
                </IconButton>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12 text-center">
                  <h2 className="writeReviewHeadings">Leave a Review for Weedx.io</h2>
                  <h3 className="secRatingHeadings">How would you rate working at weedx.io?</h3>
                  <FormControl size={"small"}>
                    <Controller
                      render={() => (
                        <Rating
                          name="rating"
                          className={`mx-2 ${classes.WriteReviewStarIcons} ${errors.rating && 'customteatfsdfg'}` }
                          value={GetProductReview.value}
                          onChange={(e) => SetGetProductReview({ ...GetProductReview, 'value': e.target.value })}
                          precision={1}
                        />
                      )}
                      rules={{ required: GetProductReview.value === 0 }}
                      control={control}
                      name={'rating'}
                    />
                  </FormControl>
                </div>


                {/* <FormHelperText>{errors.Gender?.message}</FormHelperText> */}

                <div className="col-12 px-4 py-4">
                 
                  <div className="col-12">
                    <label className="writeReviewLabel" htmlFor="title">
                    Your Title at Work
                    </label>
                      <TextField
                        className={`${classes.reviewTextFieldStyle}`}
                        size="medium"
                        id="title"
                        value={GetProductReview.Title}
                        onChange={(e) => {
                          SetGetProductReview({
                            ...GetProductReview,
                            [e.target.name]: e.target.value,
                          });
                        }}
                        name="Title"
                        placeholder="Enter your title at work"
                      
                        fullWidth
                        inputRef={register("Title",{
                          required: GetProductReview.comment !== '' ?  GetProductReview.Title === "" && "Title is required*." : false,
                          minLength: {
                            value: 5,
                            message: "Please enter valid Title",
                          },
                          maxLength: {
                            value: 150,
                            message: "Please enter shot valid Title",
                          },
                        })}
                        helperText={errors.Title?.message}
                        error={Boolean(errors?.Title)}
                      />
                  </div>
                  <div className="col-12 ">
                  
                    <TextField
                      className={classes.Reviewtextarea}
                      size="medium"
                      id="title"
                      value={GetProductReview.comment}
                      onChange={(e) => {
                        SetGetProductReview({
                          ...GetProductReview,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      name="comment"
                      placeholder="Write a review...."
                      fullWidth
                      multiline
                      rows={5}
                      inputRef={register("comment",{
                        minLength: {
                          value: 5,
                          message: "Please enter valid Review",
                        },
                        maxLength: {
                          value: 250,
                          message: "Please enter shot valid Review",
                        },
                      })}
                    />
                  </div>
                  <div className="col-12">
                     <div className="reviewImage">
                      <input type='file' id="Reviewimage" accept="image/*" className="d-none"/>
                        <label htmlFor="Reviewimage" className="Reviewimagebox">
                           
                              <IoCloudUploadOutline size={22} /> <span>Drop files here or click to upload</span>
                           
                        </label>
                     </div> 
                  </div>
                  <div className="col-12">
                    
                      <LoadingButton loading={reviewloading} className={classes.submitreviewbtn}   type="submit" variant="outlined">
                        Submit
                      </LoadingButton>
                 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog >
    </>
  );
};
export default WriteReviewPopup;
