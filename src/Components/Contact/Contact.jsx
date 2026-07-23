import React, { useState } from "react";
import { Component } from "react";
import DiscordService from "../../services/DiscordService";
import { Await } from "react-router-dom";


function Contact() {

    const [formData, setFormData] = useState({
        data: {
            Name: "",
            Contact: "",
            Message: ""
        },
        error: {}
    })

    const [alert, setAlert] = useState({
        show: false,
        type: "",
        message: ""
    });

    const Send = DiscordService();

    const setData = (name, value) => {
        setFormData({
            data:
            {
                ...formData.data,
                [name]: value
            }
            , error: {}
        });
    }


    const discordPost = async () => {
        const { Name, Contact, Message } = formData.data

        if (
            !Name.trim() || !Contact.trim() || !Message.trim()
        ) {
            setAlert({
                show: true,
                type: "danger",
                message: "Looks like you forgot to fill a field or two."
            });

            return;
        }

        try {
            const toSend = Object.entries(formData.data)
                .map((d) => `${d[0]}: ${d[1]}`)
                .join("\n");

            await Send(toSend)

            setAlert({
                show: true,
                type: "success",
                message: "Your message has been sent successfully, I'll get back to you soon!"
            });

            setFormData({
                data: {
                    Name: "",
                    Contact: "",
                    Message: ""
                },
                error: {}
            });
        }
        catch {
            setAlert({
                show: true,
                type: "danger",
                message: "Something went wrong while sending your message."
            });
        }
    }

    return (
        <div className="container py-4">
            <h3 style={{ textAlign: 'left' }}>Contact me</h3>
            <p style={{ textAlign: 'justify' }}>
                Feel free to send me an Email at <a href="mailto:adityachanan@gmail.com">adityachanan@gmail.com</a>.
            </p>
            <p style={{ textAlign: 'justify' }}>In case you wanna reach out by other means (Although, it's better to include an Email address just in case reaching out
                by other means becomes an issue).</p>
            <div className="col d-flex">
                <div className="card border-primary">
                    {
                        alert.show && (
                            <div className={`alert alert-dismissible alert-${alert.type}`} role="alert">
                                <button type="button" className="btn-close" onClick={() => setAlert({ ...alert, show: false })}></button>
                                <strong>
                                    {
                                        alert.type === "success" ? "Nice!" : "Oof!"
                                    }
                                </strong>
                                {alert.message}
                            </div>

                        )
                    }
                    <div className="card-body">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            discordPost();
                        }}>
                            <fieldset>
                                <div style={{ textAlign: 'left' }}>
                                    <label for="Name" className="form-label mt-4">Name</label>
                                    <input type="text" className="form-control" name="Name" aria-describedby="PosHelp" placeholder="Name" value={formData.data.Name}
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <label for="Contact" className="form-label mt-4">Preferred method of communication</label>
                                    <input type="text" className="form-control" name="Contact" aria-describedby="ReasonHelp" placeholder="Whatever method of communication you prefer" value={formData.data.Contact}
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <label for="Message" className="form-label mt-4">Message</label>
                                    <textarea type="text" className="form-control" rows={5} cols={50} style={{ resize: 'none', overflowY: 'auto' }} name="Message" aria-describedby="ReasonHelp"
                                        placeholder="To make it easier for me to reach back, include an alternate mode of communication as well please." value={formData.data.Message}
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setData(name, value);
                                        }} />
                                </div>
                            </fieldset>
                            <br />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <h4>I'll get back to you as soon as I can (Usually this means in under 24 hours).</h4>
        </div>
    );
}

export default Contact;