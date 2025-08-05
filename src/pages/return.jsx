import React, { useState } from 'react';
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const Return = () => {
    const [selectedReason, setSelectedReason] = useState('product-quality');
    const [comment, setComment] = useState('');

    const cancellationReasons = [
        { id: 'price-decreased', label: 'Price for the product has decreased' },
        { id: 'not-available', label: 'I will not be available at home on delivery day' },
        { id: 'changed-mind', label: 'I have changed my mind' },
        { id: 'product-quality', label: 'Product quality issue' },
        { id: 'delivery-time', label: 'Delivery time is very long' },
        { id: 'purchased-elsewhere', label: 'I have purchased the product elsewhere' },
        { id: 'change-address', label: 'I want to change my address' },
        { id: 'change-phone', label: 'I want to change my phone number' },
        { id: 'others', label: 'Others' }
    ];

    const handleReasonChange = (reasonId) => {
        setSelectedReason(reasonId);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Return request submitted:', { selectedReason, comment });
    };

    return (
        <>
            <HomeHeader />

            {/* Main Content */}
            <div className="container-fluid" style={{
                backgroundColor: '#F5F0FA',
                minHeight: '100vh',
                paddingTop: '120px',
                paddingBottom: '50px'
            }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">

                            {/* Page Title */}
                            <div className="text-center mb-5">
                                <h1 className="fw-bold" style={{ color: '#002147' }}>
                                    Return Request
                                </h1>
                                <p className="text-muted">
                                    Please provide details about your return request
                                </p>
                            </div>

                            <form onSubmit={handleSubmit}>

                                {/* Product Details Section */}
                                <div className="card shadow-sm border-0 mb-4" style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '12px'
                                }}>
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-4" style={{ color: '#002147' }}>
                                            Product Details
                                        </h5>

                                        <div className="d-flex align-items-center flex-row w-100 pb-3 border-bottom">
                                            <div className="d-flex align-items-start flex-row w-100">
                                                <div className="d-flex flex-column">
                                                        <div
                                                            className={`pe-sm-2 d-flex flex-column flex-sm-row`}
                                                        >
                                                            <a className="d-inline-block flex-shrink-0 me-3" href="#">
                                                                <img
                                                                    src="assets/images/product-1.jpg"
                                                                    width={120}
                                                                    alt="Product"
                                                                />
                                                            </a>
                                                            <div>
                                                                <h3 className="product-title fs-5 mb-1">
                                                                    <a className="text-reset" href="#">
                                                                        Fine-knit sweater
                                                                    </a>
                                                                </h3>
                                                                <div className="small">
                                                                    <span className="text-muted me-2">Order id:</span>4545454
                                                                </div>
                                                                <div className="small">
                                                                    <span className="text-muted me-2">Color:</span>White & Blue
                                                                </div>
                                                                <div className="lead pt-1">$154.00</div>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reason for Cancellation Section */}
                                <div className="card shadow-sm border-0 mb-4" style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '12px'
                                }}>
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold mb-4" style={{ color: '#002147' }}>
                                            Reason for Cancellation
                                        </h5>

                                        <div className="mb-4">
                                            {cancellationReasons.map((reason) => (
                                                <div key={reason.id} className="form-check mb-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="cancellationReason"
                                                        id={reason.id}
                                                        value={reason.id}
                                                        checked={selectedReason === reason.id}
                                                        onChange={() => handleReasonChange(reason.id)}
                                                        style={{
                                                            borderColor: '#b96f4a',
                                                            accentColor: '#b96f4a'
                                                        }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor={reason.id}
                                                        style={{ color: '#333333' }}
                                                    >
                                                        {reason.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Comment Box */}
                                        <div className="">
                                            <label
                                                htmlFor="comment"
                                                className="form-label fw-semibold"
                                                style={{ color: '#002147' }}
                                            >
                                                Comment
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="comment"
                                                rows="4"
                                                placeholder="Please provide additional details about your return request..."
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                style={{
                                                    borderColor: '#e0e0e0',
                                                    borderRadius: '8px',
                                                    resize: 'vertical'
                                                }}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                {/* Submit Button */}
                                <div className="text-center">
                                <button class="btn btn-primary flex-shrink-0" type="submit" fdprocessedid="3o2dqc">Submit Return Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <HomeFooter />
        </>
    );
};

export default Return;