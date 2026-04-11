import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";
import { requestHandler } from "./http";

export const fetchBookReview = async (bookId: string | undefined) => {
  return await requestHandler<BookReviewItem>("get", `/reviews/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (
  bookId: string | undefined,
  data: BookReviewItemWrite,
) => {
  return await requestHandler<AddBookReviewResponse>(
    "post",
    `/reviews/${bookId}`,
  );
};

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>("get", "/reviews");
};
