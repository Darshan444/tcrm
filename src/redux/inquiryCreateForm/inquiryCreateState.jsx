export const destinationDataArr = [
  {
    dateRange: [],
    destinations: '',
  },
];

export const ticketDataArr = [
  {
    departureDate: '',
    returnDate: '',
    fromLocation: '',
    toLocation: '',
    flightType: '',
    noOfPerson: '',
  },
];

export const inquiryCreateInitialStateForm = {
  inquiryTitle: '',
  inquiryPriority: '',
  inquiryType: '',
  followupDate: '',
  inquiryDetail: '',
  hotelBookingFlag: false,
  ticketBookingFlag: false,
  transportBookingFlag: false,
  customerInfo: {
    customerName: '',
    customerNumber: '',
    customerEmail: '',
    noOfPersons: null,
    adultCount: null,
    childCount: null,
    childDetails: [],
    infantCount: null,
    infantDetails: [],
  },
  corporateData: {
    isCorporateInquiry: false,
    sameAsCustomer: false,
    contactPersonName: '',
    contactPersonNumber: '',
    contactPersonEmail: '',
  },
  inquiryType: {
    hotel: false,
    ticket: false,
    transport: false,
  },
  hotelBooking: {
    destinationData: destinationDataArr,
    hotelDetail: '',
    approxBudget: '',
    mealPlan: '',
    hotelCategory: '',
    numberOfRoom: '',
  },
  ticketBooking: {
    ticketDetail: '',
    ticketDetailArr: ticketDataArr,
  },
  transportBooking: {
    transportDetails: '',
  },
};
