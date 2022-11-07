# Stripe Payment Method Integration

## Backend part

1. ecommerce folder এ terminal এর সাহায্যে **_stripe_** কে install করতে হবে

```http
folderPath: ecommerce
"""""""""""""""""""""""
npm i stripe
```

2. ecommerce\pages\ **_api_** - folder এ api\ **_stripe.js_** file বানাতে হবে এবং এখানে **_Stripe_** কে import করে নিয়ে **_stripe_** website এর মত করে instance,handler etc বানাতে হবে করতে হবে

> > এই ecommerce\pages\ **_api_** - folder ই মূলত next js এর backend হিসেবে কাজ করে যার ফলে আলাদা করে **_MERN_** এর মত করে Express,Node এর ঝামেলা পোহাতে হয় না

3. Get Stripe Publishable & Secret Key from <a href="https://dashboard.stripe.com/test/dashboard">Stripe WEbsite</a> এবং এই **Publishable Key & Secret Key** দ্বয়কে আমাদের **_.env_** file এ যথাক্রমে **\_NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY & STRIPE_SECRET_KEY** variable এ assign করে দিব

4. goto <a href="https://stripe.com/docs/checkout/quickstart">Accept Online Payments docs</a> এখানে আমরা language হিসেবে **_Next.js_** select করব আর dropdown থেকে **_Prebuilt Checkout page_** select করব ।
   > > এগুলো select করলে দেখাযাবে ডান পাশের **dark-mode** এর code গুলো lagnuage এর উপর base করে chabged হবে এটা select করে নিব এবং api\ **_stripe.js_** file এ paste করে দিব

```http
filePath: api\stripe.js
""""""""""""""""""""""""
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
```

5. Now আমরা আমাদের requirement অনুযায়ী কিছু **Shipping Rate** বানাব **[based অন area, urban city, rural area, rural city, distance, weight]** etc
   > > **Shipping Rate** ধার্য্য করার জন্য আমাদের <a href="https://dashboard.stripe.com/test/shipping-rates">Stripe এর Shipping Rate</a> এর Website এ যেতে হবে
   > >
   > > > first এ **_FREE SHIPPING_** বানাব এর জন্য **Create Sipping Rate** button এ click করব
   > >
   > > > এরপর popUp থেকে just description এ ALL capital letter এ "**_FREE SHIPPING_**" লিখব আর save করব [**অন্য কোন যায়গায় কিছুই লিখব না**]
   > >
   > > > save হয়ে গেলে আমরা এইখানেই **FREE SHIPING** এর জন্য একটা id পাব যেটা copy করে রাখব
   >
   > > এভাবেই আরেকটা **Shipping rate** বানাব যার নাম দিব "**_FAST SHIPPING_**" cost দিব "**_20_**" USD আর time duration দিব "**_1 থেকে 3_**" working days এরপর এটার id ও copy করে রাখব
6. এবার আমাদের api\ **_stripe.js_** file এর code কে নিচের মত করে modify করে নিতে হবে,

```http
filePath: api/stripe.js
""""""""""""""""""""
65df4g64d65f4g65d4g56df4g6df
d546f4g654gfd
```

## Frontend Part

1. **ecommerce** folder এ terminal এ **_stripe/stripe-js_** install দিতে হবে

```http
folderPath: ecommerce
"""""""""""""""""""""""
npm i @stripe/stripe-js
```

2. তারপর ecommerce\ **_library_** folder এ ecommerce\library\ **_getStripe.js_** file বানিয়ে নিচের code টা paste করে দিতে হবে
   > > তবে ভাল করে খেয়াল রাখতে হবে যাতে **_env_** variable এর নাম অবশ্যই অবশ্যই same থাকে

```http
filePath: ecommerce\library\getStripe.js
"""""""""""""""""""""""""""""""""""""""
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
}

export default getStripe;
```

3. ecommerce\components\shared\ **_Cart.js_** file এ গিয়ে **_getStripe_** কে import করে নিয়ে তারপর তার সাহায্যে <button>PAY WITH STRIPE</button> button এর একটা **_handleCheckout_** function লাগাতে হবে যেখানে নিচের কাজ গুলো হবে,

- create a instance of stripe
- post the payment intent to the server
- validate the payment intent
- get response from the server
- redirect to the stripe checkout page

> > যেহেতু **Next.js** একটা full-stack react frame work তাই আমাদের fetching করার জন্য **localHost** এর help লাগেনাই just **filePath** বলে দিলেই হয়েছে আর যেটা হচ্ছে, **_"/api/stripe_**"
>
> > আর method হিসেবে **_POST_** আমরা **backend** এর **step 4** এই বলেদিয়েছিলাম

```http
filePath: ecommerce\components\shared\Cart.js
"""""""""""""""""""""""""""""""""""""""""""""""

const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

```

## Backend Part-2

7. ecommerce\pages\api\ **_stripe.js_** file এ আমরা এই **_cartItems_** গুলিকে **_req.body_** এর ভিতরে পাব এবার সেটাকে **_line_items_** এর ভিতরে **.map** method এর সাহায্যে frontend এ যা যা পাঠানো দরকার সব পাঠাব নিচের মত করে

   > > তবে আমরা যদি backend এ **_sanity.io_** use করি তাহলে image link গুলা dycrpted থাকে যা নিচের ্দুলাইন code দিয়ে readable link এ পরিনত করা হয়

   ```http
   filePath: ecommerce\pages\api\ stripe.js
   """""""""""""""""""""""""""""""""""""""

   const img = item.image[0].asset._ref;
   const newImage = img.replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/').replace('-webp', '.webp');
   ```
