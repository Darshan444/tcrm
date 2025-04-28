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
import { useDispatch } from 'react-redux';

export function useInquiryCreateForm() {
  const dispatch = useDispatch();

  const addInquiryCreateData = (payload) => {
    dispatch({
      type: ADD_INQUIRY_DETAIL_DATA,
      payload,
    });
  };

  const addInquiryCreateCorporateData = (payload) => {
    dispatch({
      type: ADD_CORPORATE_INQUIRY_DATA,
      payload,
    });
  };

  const addInquiryCreateCorporateDataSameAsCustomer = (payload) => {
    dispatch({
      type: ADD_CORPORATE_DATA_SAME_AS_CUSTOMER,
      payload,
    });
  };

  const addInquiryCreateCustomerData = (payload) => {
    dispatch({
      type: ADD_CUSTOMER_INQUIRY_DATA,
      payload,
    });
  };

  const addInquiryCreateCustomerChildData = (payload) => {
    dispatch({
      type: ADD_REMOVE_CUSTOMER_CHILD_COUNT_DATA,
      payload,
    });
  };

  const addInquiryCreateChildData = (payload) => {
    dispatch({
      type: ADD_REMOVE_CHILD_DATA,
      payload,
    });
  };
  const addInquiryCreateCustomerInfantData = (payload) => {
    dispatch({
      type: ADD_REMOVE_CUSTOMER_INFANT_COUNT_DATA,
      payload,
    });
  };

  const addInquiryCreateInfantData = (payload) => {
    dispatch({
      type: ADD_REMOVE_INFANT_DATA,
      payload,
    });
  };

  const addInquiryCreateHotelData = (payload) => {
    dispatch({
      type: ADD_REMOVE_HOTEL_DATA,
      payload,
    });
  };

  const addInquiryCreateHotelDestinationData = (payload) => {
    dispatch({
      type: ADD_REMOVE_HOTEL_DESTINATION_DATA,
      payload,
    });
  };

  const addInquiryCreateHotelDestinationCountData = (payload) => {
    dispatch({
      type: ADD_REMOVE_HOTEL_DESTINATION_COUNT,
      payload,
    });
  };

  const addInquiryCreateTicketData = (payload) => {
    dispatch({
      type: ADD_REMOVE_TICKET_DATA,
      payload,
    });
  };
  const addInquiryCreateTicketDetailData = (payload) => {
    dispatch({
      type: ADD_REMOVE_TICKET_DETAIL_DATA,
      payload,
    });
  };
  const addInquiryCreateTicketDetailCount = (payload) => {
    dispatch({
      type: ADD_REMOVE_TICKET_DETAIL_COUNT,
      payload,
    });
  };

  const addInquiryCreateTransportData = (payload) => {
    dispatch({
      type: ADD_REMOVE_TRANSPORT_DATA,
      payload,
    });
  };

  return {
    addInquiryCreateData,
    addInquiryCreateCorporateData,
    addInquiryCreateCustomerData,
    addInquiryCreateCustomerChildData,
    addInquiryCreateChildData,
    addInquiryCreateCustomerInfantData,
    addInquiryCreateInfantData,
    addInquiryCreateCorporateDataSameAsCustomer,
    addInquiryCreateHotelData,
    addInquiryCreateHotelDestinationData,
    addInquiryCreateHotelDestinationCountData,
    addInquiryCreateTicketData,
    addInquiryCreateTicketDetailData,
    addInquiryCreateTicketDetailCount,
    addInquiryCreateTransportData,
  };
}
