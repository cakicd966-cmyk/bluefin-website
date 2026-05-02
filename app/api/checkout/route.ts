import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// Server-side product catalog — prices are never trusted from the client
const PRODUCTS: Record<string, { name: string; priceInCents: number; description: string }> = {
  tee:        { name: "Bluefin Classic Tee",      priceInCents: 3500, description: "Premium cotton tee with the Bluefin logo." },
  hoodie:     { name: "Bluefin Hoodie",            priceInCents: 6500, description: "Heavyweight fleece hoodie. Bluefin logo on chest." },
  cap:        { name: "Bluefin Snapback Cap",      priceInCents: 3000, description: "Structured snapback cap with embroidered Bluefin logo." },
  workshirt:  { name: "Bluefin Work Shirt",        priceInCents: 5500, description: "Hard-wearing work shirt with Bluefin branding." },
  mug:        { name: "Bluefin Ceramic Mug",       priceInCents: 2200, description: "Large 400ml ceramic mug with Bluefin branding. Dishwasher safe." },
  stickers:   { name: "Bluefin Sticker Pack",      priceInCents: 1200, description: "Pack of 5 premium vinyl stickers. Waterproof and UV-resistant." },
};

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity = 1 } = await req.json();

    const product = PRODUCTS[productId as string];
    if (!product) {
      return NextResponse.json({ error: "Invalid product" }, { status: 400 });
    }

    const qty = Math.max(1, Math.min(10, parseInt(String(quantity), 10) || 1));
    const { name: productName, priceInCents, description } = product;
    const imageUrl: string | undefined = undefined;

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
              description: description,
              ...(imageUrl ? { images: [imageUrl] } : {}),
            },
            unit_amount: priceInCents,
          },
          quantity: qty,
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
