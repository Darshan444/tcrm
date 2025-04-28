import React, { useState } from 'react';
import TextEditor from '@/Components/FormElement/TextEditor';
import { useInquiryCreateForm } from '../../../redux/inquiryCreateForm/inquiryCreateUseForm';
import('../../../../public/assets/vendor/select/select2.min');

const TransportBookingDetails = ({ transportData, customerDetail }) => {
  const { addInquiryCreateTransportData } = useInquiryCreateForm();
  return (
    <>
      <div className="main-title d-flex align-items-center">
        <h6>Transport Booking</h6>
        <span className="text-secondary p-2 f-s-14 ms-2">
          (No. of Person: {customerDetail.noOfPersons}, Adult:{' '}
          {customerDetail.adultCount}, Child: {customerDetail.childCount},
          Infant: {customerDetail.infantCount})
        </span>
      </div>
      <div>
        <form className="app-form">
          <div className="row">
            <div className="mb-3">
              {/* <label className="form-label">Transport Booking Detail</label> */}
              <TextEditor
                id="transportDetails"
                placeholder="Add Other Transport Booking Detail"
                onChange={(data) =>
                  addInquiryCreateTransportData({
                    transportDetails: data.target.value,
                  })
                }
                value={transportData?.transportDetails}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TransportBookingDetails;
