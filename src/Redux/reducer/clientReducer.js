const initialState = {
  clients: [
    {
      firstName: "Kadi",
      lastName: "Kramen",
      email: "kadikra@gmail.com",
      phone: "484-588-4848",
      balance: 849,
    },
    {
      firstName: "Sarah",
      lastName: "Drasner",
      email: "sarahdra@sarah.com",
      phone: "454-233-4354",
      balance: 984,
    },
  ],
};

const clientReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return action.payload;

    default:
      return state;
  }
};

export default clientReducers;
