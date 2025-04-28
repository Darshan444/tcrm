import React from 'react';
import { useInquiryCreateForm } from '../../../redux/inquiryCreateForm/inquiryCreateUseForm';
import('../../../../public/assets/vendor/select/select2.min');

const ContactPersonDetail = ({ corporateData }) => {
  const {
    addInquiryCreateCorporateData,
    addInquiryCreateCorporateDataSameAsCustomer,
  } = useInquiryCreateForm();
  return (
    <>
      <div className="row">
        <div className="col-md-3 mb-3 mt-3 center checkbox-wrapper">
          <label className="check-box">
            <input
              type="checkbox"
              id="isCorporateInquiry"
              checked={corporateData.isCorporateInquiry}
              onChange={(data) =>
                addInquiryCreateCorporateData({
                  isCorporateInquiry: data.target.checked,
                })
              }
            />
            <span className="checkmark outline-secondary"></span>
            <div className="mt-8">
              <span className="form-label me-1">Is Corporate Inquiry</span>
            </div>
          </label>
          <label className="check-box">
            <input
              type="checkbox"
              id="sameAsCustomer"
              checked={corporateData.sameAsCustomer}
              onChange={(data) =>
                addInquiryCreateCorporateDataSameAsCustomer({
                  sameAsCustomer: data.target.checked,
                })
              }
            />
            <span className="checkmark outline-secondary"></span>
            <div className="mt-8">
              <span className="form-label me-1">Same As Customer</span>
            </div>
          </label>
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Contact Person Name</label>
          <input
            type="text"
            className="form-control"
            id="contactPersonName"
            onChange={(data) =>
              addInquiryCreateCorporateData({
                contactPersonName: data.target.value,
              })
            }
            value={corporateData?.contactPersonName}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Contact Person No</label>
          <input
            type="number"
            className="form-control"
            id="contactPersonNumber"
            onChange={(data) =>
              addInquiryCreateCorporateData({
                contactPersonNumber: data.target.value,
              })
            }
            value={corporateData?.contactPersonNumber}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Contact Person Email</label>
          <input
            type="text"
            className="form-control"
            id="contactPersonEmail"
            onChange={(data) =>
              addInquiryCreateCorporateData({
                contactPersonEmail: data.target.value,
              })
            }
            value={corporateData?.contactPersonEmail}
          />
        </div>
      </div>
    </>
  );
};

export default ContactPersonDetail;
