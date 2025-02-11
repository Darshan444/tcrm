import React, { useEffect, useRef } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row, Label } from "reactstrap";
import "../../../public/assets/vendor/select/select2.min";
import "../../../public/assets/vendor/select/select2.min.css";

const CustomSelectWithAddValue = () => {
    const selectRefs = useRef([]);

    useEffect(() => {
        setTimeout(() => {
            console.log(window.$.fn)
            // eslint-disable-next-line no-undef
            $('.select-basic-multiple-four').select2({
                placeholder: 'Select an option',
                allowClear: true,
            });

            return () => {
                // eslint-disable-next-line no-undef
                $('.select-basic-multiple-four').select2('destroy');
            };
        }, 1000)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            selectRefs.current.forEach((select) => {
                // eslint-disable-next-line no-undef
                $(select).select2();
            });

            // Cleanup Select2 on component unmount
            return () => {
                selectRefs.current.forEach((select) => {
                    // eslint-disable-next-line no-undef
                    $(select).select2('');
                });
            };
        }, 1000)
    }, []);


    return (
        <Container fluid>
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <h5 className="m-0">Select2 With Color Tags</h5>
                        </CardHeader>
                        <CardBody>
                            <Row className="app-form">
                                <Col xl="6">
                                    <div className="select_dark mt-4">
                                        <Label className="form-label">Select Dark</Label>
                                        <select className="select-basic-multiple-four w-100" name="states[]"
                                            multiple="multiple" defaultValue={["AL", "WY"]}>
                                            <option value="AL">Alabama</option>
                                            <option value="WY">Wyoming</option>
                                            <option value="WD">Coming</option>
                                            <option value="AF">Hanry Die</option>
                                            <option value="TU">John Doe</option>
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CustomSelectWithAddValue;
