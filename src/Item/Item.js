import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const BASE_URL = "http://localhost:3000/";

export default function ItemListing() {
  const classes = useStyles();
  const [itemList, setItemList] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allItems = await axios.get(BASE_URL + "api/items");
        setItemList(allItems.data);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = () => {
    window.location.href = "/create-item";
  };

  const handleEditButtonClick = (id) => {
    window.location.href = `/edit-item/${id}`;
  };

  const handleDeleteButton = (id) => {
    setId(id);
    setOpen(true);
  };

  const deleteItemList = async () => {
    await axios.delete(BASE_URL + `api/items/${id}`);
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <p className={classes.title}>Item List</p>
        <div style={{ paddingLeft: "10px" }}>
          {" "}
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              color: "#ffffff",
            }}
            className={classes.mediaButtonApply}
            onClick={handleButtonClick}
          >
            Add Item
          </Button>
        </div>
      </div>
      <br></br>
      {itemList.length > 0 ? (
        <Table className={classes.textAlign}>
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Name
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Description
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Price
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Created Date
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Updated Date
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Edit Item
              </TableCell>
              <TableCell
                style={{
                  fontFamily: "CenturyGothicBold",
                  fontWeight: "bold",
                  color: "#2962a5",
                  background: "#fafafa",
                }}
                className={classes.headingStyle}
              >
                Delete Item
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemList.map((data) => {
              return (
                <TableRow
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #cdeeef 0%, #cdeeef 100%)",
                    color: "#348",
                  }}
                >
                  <TableCell
                    style={{ fontFamily: "CenturyGothicBold" }}
                    className={classes.tablecell_text}
                  >
                    {data.name}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "CenturyGothicBold" }}
                    className={classes.tablecell_text}
                  >
                    {data.description}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "CenturyGothicBold" }}
                    className={classes.tablecell_text}
                  >
                    {data.price}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "CenturyGothicBold" }}
                    className={classes.tablecell_text}
                  >
                    {moment(data.created_at).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell
                    style={{ fontFamily: "CenturyGothicBold" }}
                    className={classes.tablecell_text}
                  >
                    {moment(data.updated_at).format("YYYY-MM-DD")}
                  </TableCell>
                  <TableCell className={classes.tablecell_text}>
                    <Button
                      style={{ color: "#ffffff" }}
                      className={classes.mediaButtonApply2}
                      onClick={() => handleEditButtonClick(data.id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell className={classes.tablecell_text}>
                    <Button
                      style={{ color: "#ffffff" }}
                      className={classes.mediaButtonApply2}
                      onClick={() => handleDeleteButton(data.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <Typography>No data found</Typography>
      )}
      <Dialog open={open}>
        <DialogContent>
          Are you sure you want to delete this item?
          <IconButton
            onClick={() => setOpen(false)}
            className={classes.closeicon}
          >
            <CloseIcon />
          </IconButton>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ color: "#ffffff" }}
            className={classes.mediaButtonApply}
            onClick={() => deleteItemList()}
          >
            Delete Item
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
