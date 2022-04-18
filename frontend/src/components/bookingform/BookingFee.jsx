import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import "./BookingFee.css";

function BookingFee({ formData, setFormData }) {
  const appId = "sandbox-sq0idb-iijb3slqYThG-HkqsyIofA";
  const locationId = "L6XX49T2E929P";
  useEffect(async () => {
    const appendSquareScript = () => {
      const script = document.createElement("script");

      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
      script.async = true;

      document.body.appendChild(script);
      console.log("Square Script Appended");
    };
    appendSquareScript();
    const initializeCard = async (payments) => {
      console.log("INITCARD");
      const card = await payments.card();

      await card.attach("#card-container");

      return card;
    };

    const createPayment = async (token) => {
      const body = JSON.stringify({
        locationId,
        sourceId: token,
      });

      const paymentResponse = await fetch("http://127.0.0.1:8000/payment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      console.log(paymentResponse);
      if (paymentResponse.ok) {
        console.log("Payment Success");
        return paymentResponse.json();
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
      } catch {
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
        <div id="card-container"></div>
        <button
          className="btn btn-primary pay-button1"
          id="card-button"
          type="button"
        >
          Pay $30.00
        </button>
      </div>
      <div id="payment-status-container"></div>
    </div>
  );
}

export default BookingFee;
