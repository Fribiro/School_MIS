import React from "react";

import "../assets/subscribe.css";

export default function Nav() {
    return (

        // subscribe 
        <section>
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <div className="content">
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>Get Updates to news & events</p>
                        <hr></hr>
                        <h3>
                            We offer high-quality education.
                        </h3>
                        <form action="#">
                            <input
                                type="email"
                                name="email_address"
                                placeholder="Your Email Address"
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    );
}
