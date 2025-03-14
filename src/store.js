import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import tokenReducer from './features/tokenSlice';
import { inabApi } from './services/api/inab';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [inabApi.reducerPath]: inabApi.reducer,
    // token: tokenReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(inabApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export const RootState = store.getState;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const AppDispatch = store.dispatch;
