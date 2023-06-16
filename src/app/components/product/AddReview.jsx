import { AppContext } from "@/app/layout";
import AuthContainer from "@/components/Auth/AuthContainer";
import { isAuthenticated } from "@/utils/helpers";
import React, { useContext } from "react";
import AddReviewDialog from "./AddReviewDialog";

const AddReview = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {isAuthenticated() ? (
        <AddReviewDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <AuthContainer isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default AddReview;
