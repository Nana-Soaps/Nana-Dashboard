import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { setCategories } from "../../../actions";
import { connect } from "react-redux";
import Swal from "sweetalert2";

// const useStyles = makeStyles((theme) => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

function SaveButton(props) {
  const { closeMenu1, prodId } = props;
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
    closeMenu1();
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
    closeMenu1();
    axios
      .delete(`https://nana-be.up.railway.app/api/products/${prodId}`)
      .then((res) => {
        props.setCategories(res.data);
        Swal.fire({
          icon: "success",
          title: "Product Successfully Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.dir(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<p>${err.response.data.message}</p>`,
        });
      });
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Button
      aria-describedby={"#popover"}
      variant="contained"
      // color="secondary"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        fontSize: "1rem",
        color: "black",
      }}
      onClick={handleClick}
    >
      <Popover
        id={"popover"}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography
          sx={{
            padding: "5px",
          }}
        >
          <Typography style={{ textAlign: "center" }}>
            Are you sure ?
          </Typography>
          <Button
            onClick={handleDelete}
            style={{
              backgroundColor: "#198754",
              color: "white",
              marginRight: "0.5rem",
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
            }}
          >
            No
          </Button>
        </Typography>
      </Popover>
      Delete
    </Button>
  );
}

export default connect(null, { setCategories })(SaveButton);
