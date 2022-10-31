import React from "react";
import Contact from "./contact";

type Props = {};

function ContactWrapper({}: Props) {
    return (
        <div>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    );
}

export default ContactWrapper;
