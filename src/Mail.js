import React from "react";
import "./Mail.css";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import EmailIcon from "@material-ui/icons/Email";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "./features/mailSlice";
import { db } from "./firebase";


function Mail() {
    const history = useHistory();
    const selectMail = useSelector(selectOpenMail);

    const deleteMail = () => {
        db.collection("emails").doc(selectMail?.id).delete()
        history.push("/")
    }
    return (
      <div className="mail">
        <div className="mail__tools">
          <div className="mail__toolsLeft">
            <IconButton onClick={() => history.push("/")}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            <IconButton>
              <EmailIcon />
            </IconButton>
            <IconButton>
              <ErrorIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon onClick={deleteMail} />
            </IconButton>
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            <IconButton>
              <CheckCircleIcon />
            </IconButton>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <div className="mail__toolsRight">
            <IconButton>
              <UnfoldMoreIcon />
            </IconButton>
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>{selectMail?.subject}</h2>
            <LabelImportantIcon className="mail__important" />
            <p>{selectMail?.title}</p>
            <p className="mail__time">{selectMail?.time}</p>
          </div>
          <div className="mail__message">
            <p>{selectMail?.description}</p>
          </div>
        </div>
      </div>
    );
    }

export default Mail;
