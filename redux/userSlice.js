import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from './../util/axios';
export const fetchUsers = createAsyncThunk('users/getAllUsers', async () => {
  const { data } = await axios.get('user');
  // console.log(data);
  return data;
});

export const createUser = createAsyncThunk(
  'users/CreateUser',
  async (redata) => {
    const { data } = await axios.post('user', redata);
    // console.log(data);
    return data;
  }
);

export const editUser = createAsyncThunk(
  'users/EditUser',
  async ({ data: reqdata, id }) => {
    // console.log(data);
    // console.log(id);
    // console.log(redata);
    const { data } = await axios.put(`user?id=${id}`, reqdata);
    // console.log(data);
    return data;
  }
);

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  const { data } = await axios.delete(`user?id=${id}`);
  // console.log(data);
  return data;
});

const initialState = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getuserByid: (state) => {
      state.value++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });

    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          console.log('action.payload.id');
          console.log(action.payload.id);
          user = action.payload;
        }
        return user;
      });
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
