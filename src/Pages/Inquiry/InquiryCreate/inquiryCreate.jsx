import React from 'react';
import TextEditor from '@/Components/FormElement/TextEditor';
import CustomSelect from '@/Components/FormElement/CustomSelect';
import { INQUIRY_PRIORITY_OPTION, INQUIRY_TYPE_OPTION } from '../constant';
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import CustomerDetail from './CustomerDetail';
import ContactPersonDetail from './ContactPersonDetail';
import HotelDetailBooking from './HotelBookingDetails';
import TicketBookingDetails from './TicketBookingDetails';
import TransportBookingDetails from './TransportBookingDetails';
import { useInquiryCreateForm } from '../../../redux/inquiryCreateForm/inquiryCreateUseForm';
import { useSelector } from 'react-redux';
import('../../../../public/assets/vendor/select/select2.min');

const InquiryCreate = () => {
  const inquiryData = useSelector(
    (state) => state.addInquiryCreateFormReducers
  );
  const { addInquiryCreateData } = useInquiryCreateForm();

  return (
    <div className="container-fluid">
      <div className="row m-1">
        <div className="col-12 ">
          <h4 className="main-title">Inquiry Create</h4>
          <ul className="app-line-breadcrumbs mb-3">
            <li className="">
              <a href="#" className="f-s-14 f-w-500">
                <span>
                  <i className="ph-duotone  ph-stack f-s-16"></i> Inquiry
                </span>
              </a>
            </li>
            <li className="active">
              <a href="#" className="f-s-14 f-w-500">
                Inquiry Create
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="main-title">
              <h6>General Information</h6>
            </div>

            <div className="mb-3">
              <label className="form-label">Inquiry Title</label>
              <input
                type="text"
                id="inquiryTitle"
                className="form-control"
                onChange={(data) =>
                  addInquiryCreateData({ inquiryTitle: data.target.value })
                }
                value={inquiryData?.inquiryTitle}
              />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3 app-form">
                <label className="form-label">Inquiry Type</label>
                <CustomSelect
                  dropDownData={INQUIRY_TYPE_OPTION}
                  id="inquiryType"
                  onChange={(data) => {
                    addInquiryCreateData({ inquiryType: data.value });
                  }}
                  value={inquiryData?.inquiryType}
                />
              </div>
              <div className="col-md-4 mb-3 app-form">
                <label className="form-label">Inquiry Priority</label>
                <CustomSelect
                  dropDownData={INQUIRY_PRIORITY_OPTION}
                  id="inquiryPriority"
                  onChange={(data) => {
                    addInquiryCreateData({ inquiryPriority: data.value });
                  }}
                  value={inquiryData?.inquiryPriority}
                />
              </div>
              <div className="col-md-4 mb-3">
                <Label for="followupDate" className="form-label">
                  Followup Date
                </Label>
                <Input
                  type="date"
                  id="followupDate"
                  className="form-control"
                  onChange={(data) =>
                    addInquiryCreateData({ inquiryTitle: data.target.value })
                  }
                  value={inquiryData?.followupDate}
                />
              </div>
            </div>

            <CustomerDetail customerDetail={inquiryData.customerInfo} />

            <ContactPersonDetail corporateData={inquiryData.corporateData} />

            <Col xs={12}>
              <Row>
                <Col md={12}>
                  <h6 className="tab-heading">Inquiry Type</h6>
                </Col>

                {/* Option 1 */}
                <Col md={6} xl={4} className="mt-2">
                  <Card
                    className="shadow-none"
                    onClick={() =>
                      addInquiryCreateData({
                        hotelBookingFlag: !inquiryData?.hotelBookingFlag,
                      })
                    }
                  >
                    <CardBody className="address-content">
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="hotelBookingFlag"
                            id="hotelBookingFlag"
                            onClick={(e) => e.stopPropagation()}
                            checked={inquiryData?.hotelBookingFlag}
                          />
                          <span className="fs-6 tab-heading ms-2">
                            Hotel Booking
                          </span>
                        </Label>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>

                {/* Option 2 */}
                <Col md={6} xl={4} className="mt-2">
                  <Card
                    className="shadow-none equal-card"
                    onClick={() =>
                      addInquiryCreateData({
                        ticketBookingFlag: !inquiryData?.ticketBookingFlag,
                      })
                    }
                  >
                    <CardBody className="address-content">
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="ticketBookingFlag"
                            id="ticketBookingFlag"
                            onClick={(e) => e.stopPropagation()}
                            checked={inquiryData?.ticketBookingFlag}
                          />
                          <span className="fs-6 tab-heading ms-2">
                            Ticket Booking
                          </span>
                        </Label>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>

                {/* Option 3 */}
                <Col md={6} xl={4} className="mt-2">
                  <Card
                    className="shadow-none equal-card"
                    onClick={() =>
                      addInquiryCreateData({
                        transportBookingFlag:
                          !inquiryData?.transportBookingFlag,
                      })
                    }
                  >
                    <CardBody className="address-content">
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="transportBookingFlag"
                            id="transportBookingFlag"
                            onClick={(e) => e.stopPropagation()}
                            checked={inquiryData?.transportBookingFlag}
                          />
                          <span className="fs-6 tab-heading ms-2">
                            Transport Booking{' '}
                          </span>
                        </Label>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>

            <div className="mb-3">
              <label className="form-label">Inquiry Detail</label>
              <TextEditor
                id="inquiryDetail"
                placeholder="Add All Other Inquiry Detail Here"
                onChange={(data) =>
                  addInquiryCreateData({ inquiryDetail: data })
                }
                value={inquiryData?.inquiryDetail}
              />
            </div>
            {inquiryData?.hotelBookingFlag && (
              <>
                <div className="app-divider-v dashed" />
                <HotelDetailBooking
                  hotelData={inquiryData.hotelBooking}
                  customerDetail={inquiryData.customerInfo}
                />
              </>
            )}

            {inquiryData?.ticketBookingFlag && (
              <>
                <div className="app-divider-v dashed" />
                <TicketBookingDetails
                  ticketData={inquiryData.ticketBooking}
                  customerDetail={inquiryData.customerInfo}
                />
              </>
            )}
            {inquiryData?.transportBookingFlag && (
              <>
                <div className="app-divider-v dashed" />
                <TransportBookingDetails
                  transportData={inquiryData.transportBooking}
                  customerDetail={inquiryData.customerInfo}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryCreate;
