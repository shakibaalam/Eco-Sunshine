import { apiSlice } from "./fetchbasequery";

export const premiseSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get premise details
    getPremiseDetails: builder.query({
      query: () => ({
        url: `ideamall2/api/v2/premise-detail/`,
        method: "GET",
      }),
      providesTags: ["premise"],
    }),
  }),
});

export const {} = apiSlice;
