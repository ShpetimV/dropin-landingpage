import CheckIcon from "@/assets/check.svg"
import Image from "next/image"
import Pyramid from "@/assets/pyramid.png"
import Noodle from "@/assets/noodle.png"
import Blob from "@/assets/blob.png"
import Wave from "@/assets/wave.png"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0.00,
    buttonText: "Join for free",
    features: [
      "Create unlimited DropIn events",
      "Join events near you",
      "Group chat access",
      "Send up to 3 photos per event chat",
      "Schedule events up to 1 day in advance",
      "Basic support",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 4.99,
    buttonText: "Upgrade to Premium",
    features: [
      "All Free features",
      "Send up to 20 photos per event chat",
      "Schedule events up to 1 week in advance",
      "Priority support",
      "Early access to new features",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 9.99,
    buttonText: "Get Business Plan",
    features: [
      "All Premium features",
      "Host featured events",
      "Promote events via in-app ads",
      "Schedule DropIns up to 1 week in advance",
      "Advanced analytics for events",
      "Dedicated account manager",
    ],
  },
];

export const Pricing = () => {
  return (
      <section id="pricing" className="py-24">
        <div className="container">
          <h2 className="section-title text-center leading-tight">Pricing</h2>
            <p className="section-description text-center mt-2">
                Choose the plan that fits your needs.
            </p>
          <div className="relative mt-10">
            <div className="absolute -top-20 -left-20 z-[-1]">
              <Image
                src={Pyramid}
                alt="Pyramid"
                width={300}
                height={300}
                className="opacity-50"
              />
            </div>
            <div className="absolute -bottom-20 -right-20 z-[-1]">
              <Image
                src={Noodle}
                alt="Noodle"
                width={300}
                height={300}
                className="opacity-50"
              />
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {pricingTiers.map(({title, monthlyPrice, buttonText, features}) => (
                  <div key={title} className="pricing-card p-10">
                    <h3 className="text-lg font-bold text-black/50">{title}</h3>
                    <div className="flex items-baseline gap-1 mt-[30px]">
                      <span className="text-4xl font-bold tracking-tighter leading-none">
                        CHF {monthlyPrice}
                      </span>
                      <span className="tracking-tight font-bold text-black/50">/month</span>
                    </div>
                    <button className="btn-secondary w-full mt-[30px]">{buttonText}</button>
                    <ul className="flex flex-col gap-5 mt-[32px]">
                      {features.map((feature, index) => (
                          <li key={index} className="text-sm flex items-center gap-4">
                            <CheckIcon className="h-6 w-6 shrink-0" />
                            <span>{feature}</span>
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
};
