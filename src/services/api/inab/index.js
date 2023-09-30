// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../../../store/';
import setToken from '../../../features/tokenSlice';

// Define a service using a base URL and expected endpoints
export const inabApi = createApi({
  reducerPath: 'inabApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('X-POWERED-BY', process.env.API_HEADER_X_POWERED_BY ?? '');
      headers.set('CLIENT-SERVICE', process.env.API_HEADER_CLIENT_SERVICE ?? '');
      headers.set('Accept', process.env.API_HEADER_ACCEPT ?? '');
      headers.set('X-Language-Setting', process.env.API_HEADER_X_LANGUAGE_SETTING ?? '');
      headers.set('X-Timezone', process.env.API_HEADER_X_TIMEZONE ?? '');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createToken: builder.mutation({
      query: (body) => ({
        url: `token`,
        method: 'POST',
        body,
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.data));
        } catch (error) {
          // TODO
        }
      },
    }),
    // getWalkthrough: builder.query({
    //   query: (params) => ({
    //     url: '/intro/walkthrought',
    //     params,
    //   }),
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateTokenMutation } = inabApi;

// Create sign wallet page for campaign
