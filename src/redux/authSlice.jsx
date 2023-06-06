import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: "false",
  error: "",
};
// user regiteration

export const signUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("your Register Api enter hear Add ", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});
//user login
export const signInUser = createAsyncThunk("signinuser", async (body) => {
  const res = await fetch("http://103.204.189.43:3001/api/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addtoken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    adduser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    // signin user
    [signInUser.panding]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fullfill]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;
        localStorage.setItem("msg", msg);
        localStorage.setItem("token", token);
        localStorage.setItem("user", json.stringify(user));
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },

    //signup user
    [signUpUser.panding]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fullfill]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addtoken, adduser, logout } = authSlice.actions;
export default authSlice.reducer;
