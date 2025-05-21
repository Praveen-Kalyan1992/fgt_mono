import { Box, Typography } from "@mui/material";
import discussionImage from "../../../assets/images/11.jpg";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { animate, stagger } from "framer-motion";

function WavyText({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = Array.from(container.querySelectorAll(".split-char"));
    const staggerDelay = 0.15;

    animate(
      chars,
      { y: [-20, 20] },
      {
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        duration: 2,
        delay: stagger(staggerDelay, {
          startDelay: -staggerDelay * chars.length,
        }),
      }
    );
  }, []);

  return (
    <span className="wavy-text" ref={containerRef}>
      {text.split("").map((char, idx) => (
        <span key={idx} className="split-char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
      <style>{`
        .wavy-text {
          display: inline-block;
        }

        .split-char {
          display: inline-block;
          will-change: transform;
        }
      `}</style>
    </span>
  );
}


const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const Details = () => {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];

  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src={discussionImage}
        className="bg-image absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Box
          sx={{
            marginTop: "30px",
          }}
        >
          {/* <Typography
            className="cal-sans-regular"
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: "block",
              letterSpacing: ".1rem",
              color: "#006cbb",
            }}
          >
            We Build
          </Typography>

          <Typography
            className="cal-sans-regular"
            variant="h2"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: "block",
              letterSpacing: ".1rem",
              // color: "#3548dd",
              color: "#006cbb",
            }}
          >
            Your Dream With Skill !!!
          </Typography>
          <Box sx={{ marginTop: "30px" }}></Box> */}
          {
          <MotionBox
  sx={{ marginTop: "30px" }}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <MotionTypography
    className="cal-sans-regular"
    variant="h2"
    component="div"
    sx={{
      display: "block",
      letterSpacing: ".1rem",
      color: "#006cbb",
    }}
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
  >
    <WavyText text="We Build Your Dream With Skill !!!" />
  </MotionTypography>

  <Box sx={{ marginTop: "30px" }} />
</MotionBox>/* {<MotionBox
            sx={{ marginTop: "30px" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MotionTypography
              className="cal-sans-regular"
              variant="h2"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: "block",
                letterSpacing: ".1rem",
                color: "#006cbb",
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            //   initial={{  x: 0 }}
            //   animate={{  x: -100 }}
            //  transition={{ type: "spring", stiffness: 100 }}
            >
              We Build
            </MotionTypography>

            <MotionTypography
              className="cal-sans-regular"
              variant="h2"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: "block",
                letterSpacing: ".1rem",
                color: "#006cbb",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              Your Dream With Skill !!!
            </MotionTypography>

            <Box sx={{ marginTop: "30px" }} />

          </MotionBox>} */}

        </Box>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                className="cal-sans-regular fgt-color-stat"
                key={link.name}
                href={link.href}
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="fgt-color-stat-white flex flex-col-reverse gap-1 cal-sans-regular"
              >
                <dt
                  className="text-base/7 fgt-color-stat-white"
                >
                  {stat.name}
                </dt>
                <dd className="text-4xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Details;
