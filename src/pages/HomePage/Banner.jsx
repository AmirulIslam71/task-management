const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/5WBt6Jm/time-management-project-efficiency-strategy-goals-business-technology-internet-concept-time-manageme.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome there</h1>
          <p className="mb-5">
            Effective task management is essential for maximizing productivity
            and ensuring timely completion of projects.By utilizing efficient
            task management techniques, individuals and teams can prioritize,
            track, and delegate tasks effectively, leading to improved
            efficiency and overall success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
