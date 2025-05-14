export const CallToAction = () => {
  return (
      <section className="bg-gradient-to-b from-[#EAEEFE] to-[#010D3E] py-24">
        <div className="container">
            <div className="">
                <h2 className="section-title text-center leading-tight">Sign up for free</h2>
                <p className="section-description text-center mt-5 text-white">
                    Join the community and start discovering spontaneous hangouts near you. DropIn is free to use, with premium features available for those who want more.
                </p>
            </div>
            <div className="flex flex gap-5 mt-10 justify-center">
                <button className="btn-secondary mt-10">
                    Get started for free
                </button>
                <button className="btn mt-10 text-white">
                    Learn more
                </button>
            </div>
        </div>
      </section>
  );
};
