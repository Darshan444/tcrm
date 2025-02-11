import React, { useState } from "react";
// import TextEditor from "@/Components/AddProduct/TextEditor";
// import CustomSelect from "@/Components/AddProduct/CustomSelect";
// import {options, options2} from "@/Components/AddProduct/addProductData";
// import UploadProduct from "@/Components/AddProduct/UploadProduct";
// import { Link } from "react-router-dom";
import TextEditor from "@/Components/FormElement/TextEditor";
import CustomSelect from "@/Components/FormElement/CustomSelect";
// import CustomSelectWithAddValue from "@/Components/FormElement/CustomSelectWithAddValue";
import { INQUIRY_PRIORITY_OPTION } from "./constant";
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import Flatpickr from 'react-flatpickr';
import("../../../public/assets/vendor/select/select2.min");

const InquiryCreate = () => {

  const [range, setRange] = useState([null, null]);

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

            <div>
              <form className="app-form">
                <div className="mb-3">
                  <label className="form-label">Inquiry Title</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Customer Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Customer No</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Customer Email</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">No Of Person</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Adult (18+)</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Child (below 18)</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Inquiry Priority</label>
                    <CustomSelect options={INQUIRY_PRIORITY_OPTION} />
                  </div>
                  <div className="col-md-4 mb-3">
                    <Label for="dateInput" className="form-label">Followup Date</Label>
                    <Input type="date" id="dateInput" className="form-control" />
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-3 mb-3 mt-3 center checkbox-wrapper">
                    <label className="check-box">
                      <input type="checkbox" />
                      <span className="checkmark outline-secondary"></span>
                      <div className="mt-8">
                        <span className="form-label me-1">Is Corporate Inquiry</span>
                      </div>
                    </label>
                    <label className="check-box">
                      <input type="checkbox" />
                      <span className="checkmark outline-secondary"></span>
                      <div className="mt-8">
                        <span className="form-label me-1">Same As Customer</span>
                      </div>
                    </label>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label className="form-label">Contact Person Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Contact Person No</label>
                    <input type="number" className="form-control" />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Contact Person Email</label>
                    <input type="number" className="form-control" />
                  </div>
                </div>

                <Col xs={12}>
                  <Row>
                    <Col md={12}>
                      <h6 className="tab-heading">Inquiry Type</h6>
                    </Col>

                    {/* Option 1 */}
                    <Col md={6} xl={4} className="mt-2">
                      <Card className="shadow-none">
                        <CardBody className="address-content">
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="hotel" />
                              <span
                                className="fs-6 tab-heading ms-2">Hotel Booking</span>
                            </Label>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* Option 2 */}
                    <Col md={6} xl={4} className="mt-2">
                      <Card className="shadow-none equal-card">
                        <CardBody className="address-content">
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="ticket" />
                              <span
                                className="fs-6 tab-heading ms-2">Ticket Booking</span>
                            </Label>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </Col>

                    {/* Option 3 */}
                    <Col md={6} xl={4} className="mt-2">
                      <Card className="shadow-none equal-card">
                        <CardBody className="address-content">
                          <FormGroup check>
                            <Label check>
                              <Input type="radio" name="transport" />
                              <span className="fs-6 tab-heading ms-2">Transport Booking </span>
                            </Label>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>

                <div className="mb-3">
                  <label className="form-label">Inquiry Detail</label>
                  <TextEditor id="inquiryDetail" placeholder="Add All Other Inquiry Detail Here" />
                </div>
              </form>
            </div>

            <div className="app-divider-v dashed" />

            <div className="main-title">
              <h6>Hotel Booking</h6>
            </div>
            <div>
              <form className="app-form">
                <div className="row">
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Check In & Out Date</label>

                      <Flatpickr
                        className="form-control picker-range"
                        value={range}
                        onChange={(dates) => setRange(dates)}
                        options={{
                          mode: "range",
                          dateFormat: "Y-m-d",
                        }}
                        placeholder="YYYY-MM-DD to YYYY-MM-DD"
                      />

                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Duration (number of nights)</label>
                      <input disabled type="number" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Destinations</label>
                      <input type="text" className="form-control" placeholder="ex: Manali, Ladakh" />
                      {/* <CustomSelectWithAddValue /> */}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Hotel Detail</label>
                  <TextEditor id="hotelDetail" placeholder="Add All Other Hotel Detail Here. like no of rooms, hotel category, etc..." />
                </div>
              </form>
            </div>

            <div className="app-divider-v dashed" />
            <div className="main-title">
              <h6>Ticket Booking</h6>
            </div>
            <div>
              <form className="app-form">
                <div className="row">
                  <div className="mb-3">
                    {/* <label className="form-label">Ticket Booking Detail</label> */}
                    <TextEditor id="ticketDetail" placeholder="Add Ticket Booking info like by flight, by train, No of persons" />
                  </div>
                </div>
              </form>
            </div>

            <div className="app-divider-v dashed" />
            <div className="main-title">
              <h6>Transport Booking</h6>
            </div>
            <div>
              <form className="app-form">
                <div className="row">
                  <div className="mb-3">
                    {/* <label className="form-label">Transport Booking Detail</label> */}
                    <TextEditor id="transpoartDetail" placeholder="Add Transport Booking" />
                  </div>
                </div>
              </form>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default InquiryCreate;
