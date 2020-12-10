import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

function Donate() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <div>
      <div className="banner">
        <img src={process.env.PUBLIC_URL + "chbc.jpg"} alt=""></img>
      </div>
      <div className="body-text">
      <h2>Donate</h2>
      <div id="stripe-form">
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      </div>
      </div>
    </div>
  );
}



export default Donate;