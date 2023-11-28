import { loadStripe } from "@stripe/stripe-js";

const stripePromise = await loadStripe(
  "pk_test_51OGKhJSB2LulhY8SxJlAYhqwUjv9peXdYsfcFZ7eAAwn1QcKb1zU0LLIDi3wJP8SVkmjJJ1rp1rjwf6RehqCYxZS00j9Sq1U8Q"
);

export default stripePromise;
