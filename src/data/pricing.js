import thumbsUpImage from "@/../public/assets/images/icons/thumbs-up.svg";
import crownImage from "@/../public/assets/images/icons/crown.svg";

const pricing = {
  title: "Select Your Plan",
  description:
    "No hidden fees, equipment rentals, or installation appointments. Switch plans or cancel anytime.",
  items: [
    {
      image: thumbsUpImage,
      title: "Standard Plan",
      price: "$19.00",
      type: "Per month",
      features: [
        "Latest tv & drama shows",
        "All live sports & Tv channels",
        "03 Diviced connected",
        "HD Streaming quality",
      ],
      btnText: "Get this deal",
      promotionText: "*No credit card requirement",
    },
    {
      image: crownImage,
      title: "Premium plan",
      price: "$29.00",
      type: "Per month",
      features: [
        "Latest tv & drama shows",
        "All live sports & Tv channels",
        "03 Diviced connected",
        "HD Streaming quality",
      ],
      btnText: "Get this deal",
      promotionText: "*No credit card requirement",
    },
  ],
};

export default pricing;
