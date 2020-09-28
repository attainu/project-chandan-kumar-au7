const initialState = {
  HaveToDisplyNotifier: false,
};

const HaveToDisplyNotifier = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HAVE_TO_DSPLAY_NOTIFIER":
      return {
        HaveToDisplyNotifier: true,
      };

    default:
      return {
        state,
      };
  }
};

export default HaveToDisplyNotifier;
