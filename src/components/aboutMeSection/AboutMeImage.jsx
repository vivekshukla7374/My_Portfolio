const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[500px] relative">
      <div className="h-[500px] w-[500px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/me.png" alt="About Me Image" className="h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
