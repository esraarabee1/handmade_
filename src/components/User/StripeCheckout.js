import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RZuM9B2Wnz1Ak3IatBnbWAIJ3oXrlugd2OAIlbh85LT5lQUkDkHIrJNI8qpf9H55cFpU0BgtkjuWNLuiaHUhNZT00KmZTvC78"
);

const user = JSON.parse(localStorage.getItem("user"));
const id = user?.id || 0;
const totalAmount = JSON.parse(localStorage.getItem("totalAmount"));
const shortCart = JSON.parse(localStorage.getItem("shortCart"));

function CheckoutForm({ amount, userId, cartItems }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [cardholderName, setCardholderName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://harfty.runasp.net/api/Orders/Payment?amount=${amount}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: cardholderName,
          },
        },
      });

      if (result.error) {
        alert("Payment failed: " + result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert(" Payment successful!");

        const orderBody = {
          companyDeliveryId: 1,
          userId,
          currencyName: 0,
          paymentMethod: 0,
          orderAddress: "Aswan,Egypt",
          subTotal: amount,
          orderStatus: 0,
          productsOrder: cartItems,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        const orderRes = await fetch("https://harfty.runasp.net/api/Orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderBody),
        });

        if (orderRes.ok) {
          alert(" Order created successfully!");
        } else {
          alert(" Payment succeeded, but order creation failed.");
        }
      }
    } catch (err) {
      console.error(" Error:", err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 border rounded shadow space-y-4"
    >
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      <div>
        <label className="block mb-1">Cardholder Name</label>
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Card Number</label>
        <CardNumberElement className="stripe-input" />
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1">Expiration</label>
          <CardExpiryElement className="stripe-input" />
        </div>
        <div className="w-1/2">
          <label className="block mb-1">CVC</label>
          <CardCvcElement className="stripe-input" />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
}

export default function StripeCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={totalAmount} userId={id} cartItems={shortCart} />
    </Elements>
  );
}
