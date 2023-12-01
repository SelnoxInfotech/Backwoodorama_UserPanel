import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import useStyles from "../../../../Style";
import { RiCloseCircleFill } from "react-icons/ri";
import { IconButton } from "@mui/material";
import { Rating } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Createcontext from "../../../../Hooks/Context";
import { useNavigate } from "react-router-dom";
const WriteReviewPopup = ({
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
  // const [open, setOpen] = React.useState(GetProductReview.popup);

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
  console.log(errors);
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

              <div className="col-12 writeReviewTextCenter">
                <h2 className="writeReviewHeadings">Write a review</h2>
                <h3 className="secRatingHeadings">My rating</h3>
                {/* <Rating
                                    className={`mx-2 ${classes.WriteReviewStarIcons}`}
                                    value={GetProductReview.value}
                                    onChange={(e) => SetGetProductReview({ ...GetProductReview, 'value': e.target.value })}
                                    precision={1}
                                /> */}
                <Controller
                  name="rating"
                  control={control}
                  defaultValue={3}
                  rules={{ required: true }}
                  render={(props) => (
                    <Rating name="rating" onChange={props.onChange} />
                  )}
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-12 px-4 py-4">
                  <div className="col-12"></div>
                  <div className="col-12">
                    <label className="writeReviewLabel" htmlFor="title">
                      Title
                    </label>
                    <TextField
                      className={`${classes.FilledTextFieldStyle}`}
                      size="small"
                      id="title"
                      value={GetProductReview.Title}
                      onChange={(e) => {
                        SetGetProductReview({
                          ...GetProductReview,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      name="Title"
                      placeholder="Title"
                      variant="filled"
                      fullWidth
                      inputRef={register({
                        required:
                          getValues("comment") !== "" && "title is required*.",
                        minLength: {
                          value: 5,
                          message: "Please enter valid title",
                        },
                        maxLength: {
                          value: 150,
                          message: "Please enter shot valid title",
                        },
                      })}
                      helperText={errors.Title?.message}
                      error={Boolean(errors?.Title)}
                    />
                  </div>
                  <div className="col-12 writReviewMarginTop">
                    <label className="writeReviewLabel" htmlFor="review">
                      Review
                    </label>
                    <TextField
                      name="comment"
                      value={GetProductReview.comment}
                      onChange={(e) => {
                        SetGetProductReview({
                          ...GetProductReview,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      id="review"
                      className="textinput"
                      placeholder="Comment"
                      inputRef={register({
                        minLength: {
                          value: 5,
                          message: "Please enter valid title",
                        },
                        maxLength: {
                          value: 150,
                          message: "Please enter shot valid title",
                        },
                      })}
                    ></TextField>
                  </div>
                  <div className="col-12">
                    <Box
                      className={`edit_UserPopUp_btn_container mt-4
                                              ${classes.editEmail_loadingBtn}`}
                    >
                      <LoadingButton type="submit" variant="outlined">
                        Submit
                      </LoadingButton>
                    </Box>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default WriteReviewPopup;
