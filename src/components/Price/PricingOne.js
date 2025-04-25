import PricingList from "./PricingList";

export default function PriceOne() {
  return (
    <div
      className="pricing py-80 bg-cover"
      style={{
        backgroundImage: "url('assets/images/background/pricing-bg.webp')",
      }}
    >
      <PricingList />
    </div>
  );
}
