import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const ShippingPolicy = () => {
    return (
        <>
            <HomeHeader />

            <main>
                <section className="section">
                    <div className="container">
                        <h2 className="h4 mb-4">Shipping Policy</h2>
                        <p>
                            At <strong>Your Company Name</strong>, we aim to provide a seamless and reliable shipping experience for all orders placed through our website. This Shipping Policy explains how and when your orders are processed, shipped, and delivered.
                        </p>

                        <h6 className="py-2">1. Order Processing</h6>
                        <p>
                            All orders are typically processed within a few business days after receiving payment confirmation. In some cases, order processing may take longer due to product availability, high order volume, or other unforeseen issues.
                        </p>

                        <h6 className="py-2">2. Shipping Methods</h6>
                        <p>
                            We use standard courier and postal services for shipping. The available shipping options, including estimated delivery times and charges, will be displayed at checkout. We reserve the right to update shipping methods based on operational feasibility.
                        </p>

                        <h6 className="py-2">3. Delivery Timeline</h6>
                        <p>
                            Delivery times vary depending on the destination and shipping method selected. Delays may occur due to holidays, natural events, carrier issues, or other external factors. We appreciate your patience and understanding in such cases.
                        </p>

                        <h6 className="py-2">4. Tracking Orders</h6>
                        <p>
                            Once your order is shipped, you will receive a confirmation email with tracking details, if available. You can use the tracking number to monitor the delivery status of your package through the carrier's website.
                        </p>

                        <h6 className="py-2">5. Shipping Restrictions</h6>
                        <p>
                            Some areas may be out of our delivery range or may require additional delivery time. We may also be unable to ship to certain regions due to regulatory restrictions or carrier limitations.
                        </p>

                        <h6 className="py-2">6. Address Accuracy</h6>
                        <p>
                            Customers are responsible for providing accurate and complete shipping information at the time of purchase. We are not liable for any delays or failed deliveries resulting from incorrect or incomplete address details.
                        </p>

                        <h6 className="py-2">7. Undeliverable Packages</h6>
                        <p>
                            In cases where a package is returned to us due to failed delivery attempts, incorrect address, or customer unavailability, we will notify you and attempt re-shipment. Additional shipping charges may apply.
                        </p>

                        <h6 className="py-2">8. Changes to This Policy</h6>
                        <p>
                            We reserve the right to modify this Shipping Policy at any time. Any updates will be posted on this page with the revised effective date. Continued use of our website constitutes acceptance of any such changes.
                        </p>

                        <h6 className="py-2">9. Contact Us</h6>
                        <p className="m-0px">
                            For any questions or concerns regarding shipping, please contact us at:
                            <br />
                            <strong>Email:</strong> your-email@example.com
                            <br />
                            <strong>Company:</strong> Your Company Name
                        </p>
                    </div>
                </section>



            </main>

            <HomeFooter />
        </>
    )
}


export default ShippingPolicy;

