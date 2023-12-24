export default function Hero() {
  return (
    <div
      className="hero min-h-[70vh] bg-base-600"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-display font-bold">ZOTBotics</h1>
          <p className="py-6 font-body">
            The premier club network for all things robotics at the University
            of California, Irvine
          </p>
        </div>
      </div>
    </div>
  );
}
