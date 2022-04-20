import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

import "./BookingFee.css";
function BookingFee({ formData, setFormData }) {
  const appId = "sq0idp-bC3mePAkYv5USetQTwogpw";
  const locationId = "LTD2PHTN0YB4V";

  useEffect(async () => {
    const appendSquareScript = () => {
      const script = document.createElement("script");

      script.src = "https://web.squarecdn.com/v1/square.js";
      script.async = true;

      document.body.appendChild(script);
      console.log("Square Script Appended");
    };
    appendSquareScript();
    const initializeCard = async (payments) => {
      const card = await payments.card();
      await card.attach("#card-container");
      return card;
    };

    const createPayment = async (token) => {
      const body = JSON.stringify({
        locationId,
        sourceId: token,
      });

      const paymentResponse = await fetch("http://akjanitorial.ca/payment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      console.log(paymentResponse);
      if ((paymentResponse.status = 200)) {
        console.log(formData);
        axios
          .post("http://akjanitorial.ca/api/", {
            formData: formData,
          })
          .then((res) => alert("Booking Success"))
          .catch((errors) => console.log(errors));
        alert(
          "Payment Success!!. Your appointment has been booked succesfully. You will soon recieve a confirmation and our team will reach out to you as the booking date approaches."
        );
        return paymentResponse.json();
      } else {
        alert(
          "Error, Payment Failed. Please Check Your Card Details and try again."
        );
      }

      const errorBody = await paymentResponse.text();
      throw new Error(errorBody);
    };

    const tokenize = async (paymentMethod) => {
      const tokenResult = await paymentMethod.tokenize();
      //console.log(paymentMethod);
      //await console.log(tokenResult);
      if (tokenResult.status === "OK") {
        return tokenResult.token;
      } else {
        let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
        if (tokenResult.errors) {
          errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
        }

        throw new Error(errorMessage);
      }
    };

    const displayPaymentResults = (status) => {
      const statusContainer = document.getElementById(
        "payment-status-container"
      );
      if (status === "SUCCESS") {
        statusContainer.classList.remove("is-failure");
        statusContainer.classList.add("is-success");
      } else {
        statusContainer.classList.remove("is-success");
        statusContainer.classList.add("is-failure");
      }

      statusContainer.style.visibility = "visible";
    };

    const loadPayments = async () => {
      let payments;
      try {
        payments = window.Square.payments(appId, locationId);
        console.log(payments);
      } catch (e) {
        console.log(e);
        const statusContainer = document.getElementById(
          "payment-status-container"
        );
        statusContainer.className = "missing-credentials";
        statusContainer.style.visibility = "visible";
        return;
      }

      let card;
      try {
        card = await initializeCard(payments);
      } catch (e) {
        console.error("Initializing Card failed", e);
        return;
      }

      // Checkpoint 2.
      async function handlePaymentMethodSubmission(event, paymentMethod) {
        event.preventDefault();

        try {
          // disable the submit button as we await tokenization and make a payment request.
          cardButton.disabled = true;
          const token = await tokenize(paymentMethod);
          const paymentResults = await createPayment(token);
          displayPaymentResults("SUCCESS");

          //console.debug("Payment Success", paymentResults);
        } catch (e) {
          cardButton.disabled = false;
          displayPaymentResults("FAILURE");
          console.error(e.message);
        }
      }

      const cardButton = document.getElementById("card-button");
      cardButton.addEventListener("click", async function (event) {
        await handlePaymentMethodSubmission(event, card);
      });
    };
    loadPayments();
  });
  return (
    <div className="booking-fee-container">
      <div id="payment-form">
        <div class="alert alert-primary" role="alert">
          The booking fee is non-refundable and will be adjusted in the final
          invoice. The final price will be determined during the visit for your
          selected date and time.
        </div>
        <div id="card-container"></div>

        <button
          className="btn btn-primary pay-button1"
          id="card-button"
          type="button"
        >
          Pay $30.00
        </button>
        <div id="payment-status-container"></div>
      </div>
    </div>
  );
}

export default BookingFee;
