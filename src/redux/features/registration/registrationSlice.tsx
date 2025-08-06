import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterUser {
  userName: string;
  emailId: string;
  mobNumber: string | number;
  password: string;
}

interface RegisterUserState {
  registeredData: RegisterUser[];
}

const initialState: RegisterUserState = {
  registeredData: [],
};

// export const registrationFormData = createAsyncThunk('dataForm/fetch', async (_, { rejectWithValue }) => {
//   try {
//     const response = await getFormEntriesApi('/carbon-footprint/referencedata');
//     let entity = [];
//     const entityToCountry = {};
//     for(const { entity, country, identifier } of response) {
//       entityToCountry[entity] = entityToCountry[entity] ? [...entityToCountry[entity], {label: country, value: country, identifier}] : [{label: country, value: country, identifier}];
//     }
//     entity = Object.keys(entityToCountry).map(data => ({ label: data, value: data }));
//     return { response, entity, entityToCountry };
//   } catch(err) {
//     const error = createErrorFromResponse(err);
//     return rejectWithValue(error);
//   }
// })

const registrationSlice = createSlice({
  name: "registration-form",
  initialState,
  reducers: {
    setRegistrationData: (state, action: PayloadAction<RegisterUser>) => {
      state.registeredData.push(action.payload);
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //     .addCase(registrationFormData.pending, (state) => {
  //       state.loading = true
  //     })
  //     .addCase(registrationFormData.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data.referenceData = action.payload.response
  //       state.data.fieldData.entity = action.payload.entity
  //       state.data.fieldData.entityToCountry = action.payload.entityToCountry
  //       state.error = ''
  //     })
  //     .addCase(registrationFormData.rejected, (state, action) => {
  //       state.loading = false
  //       state.data = initialState.data
  //       state.error = action.payload.errorMessage
  //     })
  //   },
});

export default registrationSlice.reducer;
export const { setRegistrationData } = registrationSlice.actions;
