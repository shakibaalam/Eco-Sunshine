import { apiSlice } from "../EndPoints/fetchbasequery";

export const ecoSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all products
    getProduct: builder.query({
      query: () => ({
        url: `/api/v1/products/get-product`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // get all blogs
    getBlog: builder.query({
      query: () => ({
        url: `/api/v1/blog/get-blog`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),
  }),
});

export const { useGetProductQuery,useGetBlogQuery } = ecoSlice;
