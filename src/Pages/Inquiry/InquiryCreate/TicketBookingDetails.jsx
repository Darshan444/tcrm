import React, { useState, useMemo } from 'react';
import TextEditor from '@/Components/FormElement/TextEditor';
import('../../../../public/assets/vendor/select/select2.min');
import CustomSelect from '@/Components/FormElement/CustomSelect';
import { FLIGHT_TYPE_OPTION } from '../constant';
import { useInquiryCreateForm } from '../../../redux/inquiryCreateForm/inquiryCreateUseForm';

const TicketBookingDetails = ({ ticketData, customerDetail }) => {
  const {
    addInquiryCreateTicketData,
    addInquiryCreateTicketDetailData,
    addInquiryCreateTicketDetailCount,
  } = useInquiryCreateForm();
  const TicketBookingData = useMemo(() => {
    return (
      <>
        {ticketData.ticketDetailArr.map((section, index) => (
          <div className="row" key={index}>
            <div className="col-md-3 mb-3 ">
              <label className="form-label">From</label>
              <input
                type="text"
                id="fromLocation"
                className="form-control"
                onChange={(data) =>
                  addInquiryCreateTicketDetailData({
                    fromLocation: data.target.value,
                    index: index,
                  })
                }
                value={section?.fromLocation}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">To</label>
              <input
                type="text"
                id="toLocation"
                className="form-control"
                onChange={(data) =>
                  addInquiryCreateTicketDetailData({
                    toLocation: data.target.value,
                    index: index,
                  })
                }
                value={section?.toLocation}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Type</label>
              <CustomSelect
                dropDownData={FLIGHT_TYPE_OPTION}
                id="flightType"
                onChange={(data) => {
                  addInquiryCreateTicketDetailData({
                    flightType: data.value,
                    index: index,
                  });
                }}
                value={section?.flightType}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">No Of Person</label>
              <input
                type="number"
                id="noOfPerson"
                className="form-control"
                onChange={(data) =>
                  addInquiryCreateTicketDetailData({
                    noOfPerson: data.target.value,
                    index: index,
                  })
                }
                value={section?.noOfPerson}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Departure Date</label>
              <input
                type="date"
                id="departureDate"
                className="form-control"
                onChange={(data) =>
                  addInquiryCreateTicketDetailData({
                    departureDate: data.target.value,
                    index: index,
                  })
                }
                value={section?.departureDate}
              />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label">Return Date</label>
              <input
                type="date"
                id="returnDate"
                className="form-control"
                onChange={(data) =>
                  addInquiryCreateTicketDetailData({
                    returnDate: data.target.value,
                    index: index,
                  })
                }
                value={section?.returnDate}
              />
            </div>
            <div className="col-md-2 d-flex align-items-end">
              <div className="mb-3 d-flex gap-2 w-100">
                {index !== 0 && (
                  <button
                    type="button"
                    className="btn btn-danger icon-btn w-50"
                    onClick={() =>
                      addInquiryCreateTicketDetailCount({
                        type: 'REMOVE',
                        index: index,
                      })
                    }
                  >
                    <i className="ti ti-minus"></i>
                  </button>
                )}
                {index === ticketData.ticketDetailArr.length - 1 && (
                  <button
                    type="button"
                    className="btn btn-primary icon-btn w-50"
                    onClick={() =>
                      addInquiryCreateTicketDetailCount({
                        type: 'ADD',
                      })
                    }
                  >
                    <i className="ti ti-plus"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }, [ticketData.ticketDetailArr]);

  return (
    <>
      <div className="main-title d-flex align-items-center">
        <h6>Ticket Booking</h6>
        <span className="text-secondary p-2 f-s-14 ms-2">
          (No. of Person: {customerDetail.noOfPersons}, Adult:{' '}
          {customerDetail.adultCount}, Child: {customerDetail.childCount},
          Infant: {customerDetail.infantCount})
        </span>
      </div>

      {TicketBookingData}
      <div className="row">
        <div className="mb-3">
          <label className="form-label">Ticket Booking Extra Detail</label>
          <TextEditor
            id="ticketDetail"
            placeholder="Add Ticket Booking info like by flight, by train, No of persons"
            onChange={(data) =>
              addInquiryCreateTicketData({
                ticketDetail: data.target.value,
              })
            }
            value={ticketData?.ticketDetail}
          />
        </div>
      </div>
    </>
  );
};

export default TicketBookingDetails;
