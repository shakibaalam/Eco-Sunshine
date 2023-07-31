import { apiSlice } from "../EndPoints/fetchbasequery";

export const ecoSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ......................................... Product ...............................................//

    // get all products
    getProduct: builder.query({
      query: () => ({
        url: `/api/v1/products/get-product`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // product get by id
    getProductById: builder.query({
      query: (id) => ({
        url: `/api/v1/products/get-product/${id}`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // post a product by admin
    postProduct: builder.mutation({
      query: (data) => ({
        url: `/api/v1/products/create-product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eco"],
    }),

    // edit a product by admin
    editProduct: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/products/update-product/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["eco"],
    }),

    // Delete a product by admin
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/products/delete-product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["eco"],
    }),

    // ......................................... Blog ...............................................//

    // get all blogs
    getBlog: builder.query({
      query: () => ({
        url: `/api/v1/blog/get-blog`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // blog get by id
    getBlogById: builder.query({
      query: (id) => ({
        url: `/api/v1/blog/get-blog/${id}`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // post a blog by admin
    postBlog: builder.mutation({
      query: (data) => ({
        url: `/api/v1/blog/create-blog`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eco"],
    }),

    // edit a blog by admin
    editBlog: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/blog/update-blog/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["eco"],
    }),

    // Delete a blog by admin
    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/blog/delete-blog/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["eco"],
    }),

    // ......................................... Event ...............................................//

    // get all events
    getEvent: builder.query({
      query: () => ({
        url: `/api/v1/event/get-event`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // event get by id
    getEventById: builder.query({
      query: (id) => ({
        url: `/api/v1/event/get-event/${id}`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // post an event by admin
    postEvent: builder.mutation({
      query: (data) => ({
        url: `/api/v1/event/create-event`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eco"],
    }),

    // edit an Event by admin
    editEvent: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/event/update-event/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["eco"],
    }),

    // delete an event by admin
    deleteEvent: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/event/delete-event/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["eco"],
    }),

    // ......................................... Campaign ...............................................//

    // get all Campaign
    getCampaign: builder.query({
      query: () => ({
        url: `/api/v1/campaign/get-campaign`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // Campaign get by id
    getCampaignById: builder.query({
      query: (id) => ({
        url: `/api/v1/campaign/get-campaign/${id}`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // post an event by admin
    postCampaign: builder.mutation({
      query: (data) => ({
        url: `/api/v1/campaign/create-campaign`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["eco"],
    }),

    // edit an Campaign by admin
    editCampaign: builder.mutation({
      query: (body) => {
        const id = body?.id;
        const data = body?.data;
        return {
          url: `/api/v1/campaign/update-campaign/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["eco"],
    }),

    // delete a Campaign by admin
    deleteCampaign: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/campaign/delete-campaign/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["eco"],
    }),

    // ......................................... All User ...............................................//

    // get all user for admin
    getAllUser: builder.query({
      query: () => ({
        url: `/api/v1/auth/get-user`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // change user role
    userRole: builder.mutation({
      query: (data) => {
        const id = data.id;
        const body = { role: data.role };
        return {
          url: `/api/v1/auth/update-user-role/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["eco"],
    }),

    // ......................................... Add to cart ...............................................//

    // get all Cart
    getCart: builder.query({
      query: () => ({
        url: `/api/v1/products/get-to-cart`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // Campaign get by id
    getCartById: builder.query({
      query: (id) => ({
        url: `/api/v1/campaign/get-campaign/${id}`,
        method: "GET",
      }),
      providesTags: ["eco"],
    }),

    // post add to cart
    postCart: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/products/add-to-cart/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["eco"],
    }),

    // delete a product cart by admin
    deleteCart: builder.mutation({
      query: (id) => {
        return {
          url: `/api/v1/products/delete-to-cart/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["eco"],
    }),

    // ......................................... customer payment id create ...............................................//

    // post add to cart
    createCustomerId: builder.mutation({
      query: () => {
        return {
          url: `/api/v1/products/create-customer`,
          method: "POST",
        };
      },
      invalidatesTags: ["eco"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetProductByIdQuery,
  usePostProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
  useGetBlogQuery,
  useGetBlogByIdQuery,
  useDeleteBlogMutation,
  useEditBlogMutation,
  usePostBlogMutation,
  useGetEventQuery,
  usePostEventMutation,
  useDeleteEventMutation,
  useEditEventMutation,
  useGetEventByIdQuery,
  useDeleteCampaignMutation,
  useEditCampaignMutation,
  useGetCampaignQuery,
  useGetCampaignByIdQuery,
  usePostCampaignMutation,
  useGetAllUserQuery,
  useUserRoleMutation,
  useGetCartQuery,
  useGetCartByIdQuery,
  useDeleteCartMutation,
  usePostCartMutation,
  useCreateCustomerIdMutation,
} = ecoSlice;
