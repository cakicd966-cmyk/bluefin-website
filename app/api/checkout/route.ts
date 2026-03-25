import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  try {
    const { productName, priceInCents, quantity = 1, imageUrl } = await req.json();

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: productName,
              description: "Bluefin Air-Con & Electrical Official Merch",
              ...(imageUrl ? { images: [imageUrl] } : {}),
            },
            unit_amount: priceInCents,
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/store`,
      shipping_address_collection: {
        allowed_countries: ["AU"],
      },
      metadata: {
        source: "fin-apparel-store",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
