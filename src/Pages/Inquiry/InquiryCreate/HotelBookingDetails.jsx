import React, { useMemo, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import TextEditor from '@/Components/FormElement/TextEditor';
import { useInquiryCreateForm } from '../../../redux/inquiryCreateForm/inquiryCreateUseForm';
import('../../../../public/assets/vendor/select/select2.min');
import CustomSelect from '@/Components/FormElement/CustomSelect';
import { HOTEL_CATEGORY_OPTION } from '../constant';

const HotelDetailBooking = ({ hotelData, customerDetail }) => {
  const {
    addInquiryCreateHotelDestinationData,
    addInquiryCreateHotelDestinationCountData,
    addInquiryCreateHotelData,
  } = useInquiryCreateForm();

  const hotelDestinationData = useMemo(() => {
    return (
      <>
        {hotelData.destinationData.map((section, index) => (
          <div className="row" key={index}>
            <div className="col-md-3">
              <div className="mb-3">
                <label className="form-label">Check In & Out Date</label>
                <Flatpickr
                  className="form-control picker-range"
                  value={section.dateRange}
                  onChange={(dates) =>
                    addInquiryCreateHotelDestinationData({
                      dateRange: dates,
                      index: index,
                    })
                  }
                  options={{
                    mode: 'range',
                    dateFormat: 'Y-m-d',
                  }}
                  placeholder="YYYY-MM-DD to YYYY-MM-DD"
                />
              </div>
            </div>

            <div className="col-md-5">
              <div className="mb-3">
                <label className="form-label">Destinations</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ex: Manali, Ladakh"
                  value={section.destinations}
                  onChange={(data) =>
                    addInquiryCreateHotelDestinationData({
                      destinations: data.target.value,
                      index: index,
                    })
                  }
                />
              </div>
            </div>

            <div className="col-md-2 d-flex align-items-end">
              <div className="mb-3 d-flex gap-2 w-100">
                {index !== 0 && (
                  <button
                    type="button"
                    className="btn btn-danger icon-btn w-50"
                    onClick={() =>
                      addInquiryCreateHotelDestinationCountData({
                        type: 'REMOVE',
                        index: index,
                      })
                    }
                  >
                    <i className="ti ti-minus"></i>
                  </button>
                )}
                {index === hotelData.destinationData.length - 1 && (
                  <button
                    type="button"
                    className="btn btn-primary icon-btn w-50"
                    onClick={() =>
                      addInquiryCreateHotelDestinationCountData({
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
  }, [hotelData.destinationData]);

  return (
    <>
      <div className="main-title d-flex align-items-center">
        <h6>Hotel Booking</h6>
        <span className="text-secondary p-2 f-s-14 ms-2">
          (No. of Person: {customerDetail.noOfPersons}, Adult:{' '}
          {customerDetail.adultCount}, Child: {customerDetail.childCount},
          Infant: {customerDetail.infantCount})
        </span>
      </div>
      <div>
        <div className="row">{hotelDestinationData}</div>

        <div className="row">
          <div className="col-md-3 mb-3 ">
            <label className="form-label">Number of Room</label>
            <input
              type="number"
              id="numberOfRoom"
              className="form-control"
              onChange={(data) =>
                addInquiryCreateHotelData({
                  numberOfRoom: data.target.value,
                })
              }
              value={hotelData?.numberOfRoom}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Hotel Category</label>
            <CustomSelect
              dropDownData={HOTEL_CATEGORY_OPTION}
              id="hotelCategory"
              onChange={(data) => {
                addInquiryCreateHotelData({
                  hotelCategory: data.value,
                });
              }}
              value={hotelData?.hotelCategory}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Meal Plan</label>
            <input
              type="text"
              id="mealPlan"
              className="form-control"
              onChange={(data) =>
                addInquiryCreateHotelData({
                  mealPlan: data.target.value,
                })
              }
              value={hotelData?.mealPlan}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label">Approx Budget</label>
            <input
              type="number"
              id="approxBudget"
              className="form-control"
              onChange={(data) =>
                addInquiryCreateHotelData({
                  approxBudget: data.target.value,
                })
              }
              value={hotelData?.approxBudget}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Hotel Extra Detail</label>
          <TextEditor
            id="hotelDetail"
            placeholder="Add All Other Hotel Detail Here. like no of rooms, hotel category, etc..."
            onChange={(data) =>
              addInquiryCreateHotelData({
                hotelDetail: data.target.value,
              })
            }
            value={hotelData?.hotelDetail}
          />
        </div>
      </div>
    </>
  );
};

export default HotelDetailBooking;
