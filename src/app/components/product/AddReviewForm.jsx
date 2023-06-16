"use client";
import { isAuthenticated } from "@/utils/helpers";
import { StarIcon } from "@heroicons/react/24/solid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useMutation } from "react-query";
import { addReview } from "@/services/reviews";
import { toast } from "react-hot-toast";

const AddReviewForm = ({ setIsOpen }) => {
  const [rating, setRating] = useState(5);

  const rate = [1, 2, 3, 4, 5];

  const params = useParams();
  const productId = params.productId;

  const { isLoading, mutate } = useMutation(data => addReview(data), {
    onSuccess: () => {
      toast.success("You've added a new review");
      setIsOpen(false);
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  const submit = values => {
    const data = {
      ...values,
      userId: isAuthenticated().user._id,
      username: isAuthenticated().user.name,
      productId: productId,
      rating,
    };

    mutate(data);
  };

  return (
    <div>
      <label className="block mt-4">
        <div className="text-sm text-gray-700 mb-2">Rate the product:</div>
        <div className="flex items-center gap-1 my-2">
          {rate.map(el => (
            <StarIcon
              key={el}
              onClick={() => setRating(el)}
              width={20}
              height={20}
              className={`${
                el <= rating ? "text-amber-400" : "text-gray-300"
              } cursor-pointer`}
            />
          ))}
          <span className="text-sm">({rating})</span>
        </div>
      </label>

      <Formik
        initialValues={{ review: "" }}
        validate={values => {
          const errors = {};
          if (!values.review) {
            errors.review = "Review content is required";
          }
          return errors;
        }}
        onSubmit={submit}
      >
        {({ isValid }) => (
          <Form>
            <label htmlFor="review" className="block mt-4">
              <div className="text-sm text-gray-700 mb-2">
                How did you see the product:
              </div>
              <Field
                as="textarea"
                id="review"
                name="review"
                className="w-full border-2 border-zinc-200 outline-none p-2 rounded-lg focus:ring-2 ring-offset-1 ring-violet-400"
                rows={4}
              />
            </label>
            <ErrorMessage
              className="text-red-500 text-sm mt-1"
              component="div"
              name="review"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="transition mt-4 rounded-lg text-gray-900 p-3 hover:bg-gray-100 active:bg-gray-50 focus:ring-2 ring-offset-1 ring-gray-300 text-sm "
              >
                Cancel
              </button>
              <button
                disabled={!isValid}
                className="flex items-center gap-2 mt-4 rounded-lg bg-gray-800 text-white p-3 hover:bg-gray-700 active:bg-gray-800 focus:ring-2 ring-offset-1 ring-gray-800 text-sm "
                type="submit"
              >
                Rate
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddReviewForm;
