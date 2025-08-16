import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";

const CookiePolicy = () => {
    return (
        <>
            <HomeHeader />

            <main>
                <section class="section">
                    <div class="container">
                        <h2 class="h4 mb-4">Cookie Policy</h2>
                        <p>
                            At <strong>Your Company Name</strong>, we use cookies and similar technologies to enhance your
                            browsing experience, improve website performance, and provide personalized services.
                            This Cookie Policy explains how and why we use cookies on our website.
                        </p>

                        <h6 class="py-2">1. What Are Cookies?</h6>
                        <p>
                            Cookies are small text files that are stored on your device (computer, tablet, or mobile)
                            when you visit a website. They help us remember your preferences, understand website
                            usage, and deliver a more customized experience.
                        </p>

                        <h6 class="py-2">2. Types of Cookies We Use</h6>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for basic website functionality, such as security and navigation.</li>
                            <li><strong>Performance Cookies:</strong> Help us analyze website traffic and improve functionality.</li>
                            <li><strong>Functional Cookies:</strong> Remember your preferences, such as language or login details.</li>
                            <li><strong>Advertising Cookies:</strong> Used to show you relevant ads and measure campaign effectiveness.</li>
                        </ul>

                        <h6 class="py-2">3. How We Use Cookies</h6>
                        <p>
                            We use cookies to:
                        </p>
                        <ul>
                            <li>Improve website performance and user experience.</li>
                            <li>Analyze user behavior and traffic trends.</li>
                            <li>Remember login sessions and preferences.</li>
                            <li>Show personalized offers and promotions.</li>
                        </ul>

                        <h6 class="py-2">4. Managing Cookies</h6>
                        <p>
                            You can choose to accept or decline cookies through your browser settings. Most web
                            browsers automatically accept cookies, but you can modify your settings to decline
                            them if you prefer. Please note that disabling cookies may affect the functionality
                            of certain features on our website.
                        </p>

                        <h6 class="py-2">5. Third-Party Cookies</h6>
                        <p>
                            We may use third-party services (such as Google Analytics, Facebook Pixel, etc.) that
                            place cookies on your device to help us analyze performance and deliver relevant content.
                        </p>

                        <h6 class="py-2">6. Updates to This Policy</h6>
                        <p>
                            We may update this Cookie Policy from time to time to reflect changes in our practices
                            or for legal reasons. Please review this page periodically for the latest updates.
                        </p>

                        <h6 class="py-2">7. Contact Us</h6>
                        <p class="m-0px">
                            If you have any questions about our Cookie Policy, please contact us:<br />
                            <strong>Email:</strong> support@example.com <br />
                            <strong>Phone:</strong> +91-XXXXXXXXXX <br />
                            <strong>Company:</strong> Your Company Name
                        </p>
                    </div>
                </section>
            </main>





            <HomeFooter />
        </>
    )
}


export default CookiePolicy;

