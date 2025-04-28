import {
  ADD_CORPORATE_INQUIRY_DATA,
  ADD_REMOVE_CUSTOMER_CHILD_COUNT_DATA,
  ADD_CUSTOMER_INQUIRY_DATA,
  ADD_INQUIRY_DETAIL_DATA,
  ADD_REMOVE_CHILD_DATA,
  ADD_REMOVE_CUSTOMER_INFANT_COUNT_DATA,
  ADD_REMOVE_INFANT_DATA,
  ADD_CORPORATE_DATA_SAME_AS_CUSTOMER,
  ADD_REMOVE_HOTEL_DATA,
  ADD_REMOVE_HOTEL_DESTINATION_DATA,
  ADD_REMOVE_HOTEL_DESTINATION_COUNT,
  ADD_REMOVE_TICKET_DATA,
  ADD_REMOVE_TICKET_DETAIL_DATA,
  ADD_REMOVE_TICKET_DETAIL_COUNT,
  ADD_REMOVE_TRANSPORT_DATA,
} from './inquiryCreateActionType';
import {
  destinationDataArr,
  inquiryCreateInitialStateForm,
  ticketDataArr,
} from './inquiryCreateState';

export const addInquiryCreateFormReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_INQUIRY_DETAIL_DATA:
      const inquiryData = {
        ...state,
        ...action.payload,
      };
      return inquiryData;

    case ADD_CORPORATE_INQUIRY_DATA:
      let corporateData = { ...state.corporateData, ...action.payload };
      const inquiryCorporateData = {
        ...state,
        corporateData: corporateData,
      };
      return inquiryCorporateData;

    case ADD_CORPORATE_DATA_SAME_AS_CUSTOMER:
      let corporateDataSameAsCustomer = {
        ...state.corporateData,
        ...action.payload,
        contactPersonName: state.customerInfo.customerName,
        contactPersonNumber: state.customerInfo.customerNumber,
        contactPersonEmail: state.customerInfo.customerEmail,
      };
      const inquiryCorporateDataSameAsCustomer = {
        ...state,
        corporateData: corporateDataSameAsCustomer,
      };
      return inquiryCorporateDataSameAsCustomer;

    case ADD_CUSTOMER_INQUIRY_DATA:
      let customerData = { ...state.customerInfo, ...action.payload };
      const inquiryCustomerData = {
        ...state,
        customerInfo: customerData,
      };
      return inquiryCustomerData;

    case ADD_REMOVE_CUSTOMER_CHILD_COUNT_DATA:
      let childCountData = { ...state.customerInfo, ...action.payload };
      let getSavedChildData = [...state.customerInfo.childDetails];

      const [key, value] = Object.entries(action.payload)[0];
      const currentLength = getSavedChildData.length;

      if (Number(value) < currentLength) {
        // Remove extra items
        getSavedChildData = getSavedChildData.slice(0, Number(value));
      } else if (Number(value) > currentLength) {
        // Add missing items
        const toAdd = Number(value) - currentLength;
        const newChildren = Array.from({ length: toAdd }, (_, i) => ({
          name: 'child-' + (i + currentLength + 1),
          age: '',
        }));
        getSavedChildData = [...getSavedChildData, ...newChildren];
      }

      const inquiryCustomerChildData = {
        ...state,
        customerInfo: {
          ...childCountData,
          childDetails: getSavedChildData,
        },
      };

      return inquiryCustomerChildData;

    case ADD_REMOVE_CHILD_DATA:
      let getChildData = [...state.customerInfo.childDetails];

      getChildData[action.payload.index] = {
        ...getChildData[action.payload.index],
        age: action.payload.age,
      };

      const childData = {
        ...state,
        customerInfo: {
          ...state.customerInfo,
          childDetails: getChildData,
        },
      };
      return childData;

    case ADD_REMOVE_CUSTOMER_INFANT_COUNT_DATA:
      let infantCountData = { ...state.customerInfo, ...action.payload };
      let getSavedInfantData = [...state.customerInfo.childDetails];

      const [infantKey, infantValue] = Object.entries(action.payload)[0];
      const currentInfantLength = getSavedInfantData.length;

      if (Number(infantValue) < currentInfantLength) {
        // Remove extra items
        getSavedInfantData = getSavedInfantData.slice(0, Number(infantValue));
      } else if (Number(infantValue) > currentInfantLength) {
        // Add missing items
        const toAdd = Number(infantValue) - currentInfantLength;
        const newChildren = Array.from({ length: toAdd }, (_, i) => ({
          name: 'infant-' + (i + currentInfantLength + 1),
          age: '',
        }));
        getSavedInfantData = [...getSavedInfantData, ...newChildren];
      }

      const inquiryCustomerInfantData = {
        ...state,
        customerInfo: {
          ...infantCountData,
          infantDetails: getSavedInfantData,
        },
      };

      return inquiryCustomerInfantData;

    case ADD_REMOVE_INFANT_DATA:
      let getInfantData = [...state.customerInfo.infantDetails];

      getInfantData[action.payload.index] = {
        ...getInfantData[action.payload.index],
        age: action.payload.age,
      };

      const infantData = {
        ...state,
        customerInfo: {
          ...state.customerInfo,
          infantDetails: getInfantData,
        },
      };
      return infantData;

    case ADD_REMOVE_HOTEL_DATA:
      let hotelData = { ...state.hotelBooking, ...action.payload };
      const inquiryHotelData = {
        ...state,
        hotelBooking: hotelData,
      };
      return inquiryHotelData;

    case ADD_REMOVE_HOTEL_DESTINATION_DATA:
      let hotelDestinationData = [...state.hotelBooking.destinationData];
      hotelDestinationData[action.payload.index] = {
        ...hotelDestinationData[action.payload.index],
        ...action.payload,
      };
      const inquiryHotelDestinationData = {
        ...state,
        hotelBooking: {
          ...state.hotelBooking,
          destinationData: hotelDestinationData,
        },
      };
      return inquiryHotelDestinationData;

    case ADD_REMOVE_HOTEL_DESTINATION_COUNT:
      let hotelCountData = [...state.hotelBooking.destinationData];
      if (action.payload.type === 'ADD') {
        hotelCountData = [...hotelCountData, ...destinationDataArr];
      } else {
        hotelCountData = hotelCountData.filter(
          (_, i) => i !== Number(action.payload.index)
        );
      }
      const inquiryHotelCountData = {
        ...state,
        hotelBooking: {
          ...state.hotelBooking,
          destinationData: hotelCountData,
        },
      };
      return inquiryHotelCountData;

    case ADD_REMOVE_TICKET_DATA:
      let ticketData = { ...state.ticketBooking, ...action.payload };
      const inquiryTicketData = {
        ...state,
        ticketBooking: ticketData,
      };
      return inquiryTicketData;

    case ADD_REMOVE_TICKET_DETAIL_DATA:
      let ticketDetail = [...state.ticketBooking.ticketDetailArr];
      ticketDetail[action.payload.index] = {
        ...ticketDetail[action.payload.index],
        ...action.payload,
      };
      const inquiryTicketDetail = {
        ...state,
        ticketBooking: {
          ...state.ticketBooking,
          ticketDetailArr: ticketDetail,
        },
      };
      return inquiryTicketDetail;

    case ADD_REMOVE_TICKET_DETAIL_COUNT:
      debugger;
      let ticketCountData = [...state.ticketBooking.ticketDetailArr];
      if (action.payload.type === 'ADD') {
        ticketCountData = [...ticketCountData, ...ticketDataArr];
      } else {
        ticketCountData = ticketCountData.filter(
          (_, i) => i !== Number(action.payload.index)
        );
      }
      const inquiryTicketCountData = {
        ...state,
        ticketBooking: {
          ...state.ticketBooking,
          ticketDetailArr: ticketCountData,
        },
      };
      return inquiryTicketCountData;

    case ADD_REMOVE_TRANSPORT_DATA:
      let transportData = { ...state.transportBooking, ...action.payload };
      const inquiryTransportData = {
        ...state,
        transportBooking: transportData,
      };
      return inquiryTransportData;

    default:
      return inquiryCreateInitialStateForm;
  }
};
