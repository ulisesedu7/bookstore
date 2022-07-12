// Create Const for the Actions
const CHECKING_STATUS = 'bookstore/books/CHECKING_STATUS';

// Create function to check status
const checkingStatus = () => ({
  type: CHECKING_STATUS,
});

// Reducer for the status
const statusReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKING_STATUS:
      return 'Under Construction';

    default:
      return state;
  }
};

export { checkingStatus };
export default statusReducer;
