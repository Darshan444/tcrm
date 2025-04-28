import React, { useMemo } from 'react';
import { Input, InputGroupText } from 'reactstrap';
import { useInquiryCreateForm } from '../../../redux/inquiryCreateForm/inquiryCreateUseForm';
import('../../../../public/assets/vendor/select/select2.min');
import CustomSelect from '@/Components/FormElement/CustomSelect';
import { CHILD_INFANT_OPTION } from '../constant';

const CustomerDetail = ({ customerDetail }) => {
  const {
    addInquiryCreateCustomerData,
    addInquiryCreateCustomerChildData,
    addInquiryCreateChildData,
    addInquiryCreateCustomerInfantData,
    addInquiryCreateInfantData,
  } = useInquiryCreateForm();

  const childData = useMemo(() => {
    if (
      !customerDetail?.childDetails ||
      customerDetail.childDetails.length === 0
    )
      return null;
    return customerDetail?.childDetails.map((data, index) => (
      <div className="input-group input-group-sm mt-3">
        <InputGroupText
          className="text-light-secondary b-r-left"
          id="inputGroup-sizing-sm"
        >
          {data?.name}
        </InputGroupText>
        <Input
          type="text"
          className="form-control b-r-right"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={data?.age ?? ''}
          onChange={(data) =>
            addInquiryCreateChildData({
              age: data.target.value,
              index: index,
            })
          }
        />
      </div>
    ));
  }, [customerDetail?.childDetails]);

  const infantData = useMemo(() => {
    if (
      !customerDetail?.infantDetails ||
      customerDetail.infantDetails.length === 0
    )
      return null;
    return customerDetail?.infantDetails.map((data, index) => (
      <div className="input-group input-group-sm mt-3">
        <InputGroupText
          className="text-light-secondary b-r-left"
          id="inputGroup-sizing-sm"
        >
          {data?.name}
        </InputGroupText>
        <Input
          type="text"
          className="form-control b-r-right"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={data?.age ?? ''}
          onChange={(data) =>
            addInquiryCreateInfantData({
              age: data.target.value,
              index: index,
            })
          }
        />
      </div>
    ));
  }, [customerDetail?.infantDetails]);

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            onChange={(data) =>
              addInquiryCreateCustomerData({
                customerName: data.target.value,
              })
            }
            value={customerDetail?.customerName}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Customer No</label>
          <input
            type="number"
            className="form-control"
            id="customerNumber"
            onChange={(data) =>
              addInquiryCreateCustomerData({
                customerNumber: data.target.value,
              })
            }
            value={customerDetail?.customerNumber}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">Customer Email</label>
          <input
            type="email"
            className="form-control"
            id="customerEmail"
            onChange={(data) =>
              addInquiryCreateCustomerData({
                customerEmail: data.target.value,
              })
            }
            value={customerDetail?.customerEmail}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 mb-3">
          <label className="form-label">No Of Person</label>
          <input
            type="number"
            className="form-control"
            id="noOfPersons"
            onChange={(data) =>
              addInquiryCreateCustomerData({
                noOfPersons: data.target.value,
              })
            }
            value={customerDetail?.noOfPersons}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Adult (18+)</label>
          <input
            type="number"
            className="form-control"
            id="adultCount"
            onChange={(data) =>
              addInquiryCreateCustomerData({
                adultCount: data.target.value,
              })
            }
            value={customerDetail?.adultCount}
          />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Child (below 18)</label>
          <CustomSelect
            dropDownData={CHILD_INFANT_OPTION}
            id="childCount"
            onChange={(data) => {
              addInquiryCreateCustomerChildData({
                childCount: data.value,
              });
            }}
            value={customerDetail?.childCount}
          />
          {childData}
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Infant</label>
          <CustomSelect
            dropDownData={CHILD_INFANT_OPTION}
            id="infantCount"
            onChange={(data) => {
              addInquiryCreateCustomerInfantData({
                infantCount: data.value,
              });
            }}
            value={customerDetail?.infantCount}
          />
          {infantData}
        </div>
      </div>
    </>
  );
};

export default CustomerDetail;
