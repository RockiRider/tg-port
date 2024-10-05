import { motion, Variants } from "framer-motion";
import { useTheme } from "next-themes";
import { useMemo } from "react";

interface MyLogoProps {
  width?: number;
  height?: number;
}
const MyLogo = ({ width = 400, height = 400 }: MyLogoProps) => {
  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0, fillOpacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    fill: {
      fillOpacity: 1,
      transition: { duration: 1, ease: "easeInOut", delay: 2 },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      version="1.1"
      viewBox="0 0 52.916666 52.916668"
      height={height}
      width={width}
    >
      <g transform="translate(0,-244.08332)" id="layer1">
        <g
          transform="matrix(0.32388356,0,0,0.30714423,-1.2835194,240.13377)"
          id="g4633"
        >
          <motion.path
            className="fill-black stroke-black dark:fill-white dark:stroke-white"
            strokeWidth="2"
            d="m 75.21461,149.77526 c 9.46045,-2.73815 18.80681,-4.66776 27.63543,-7.97815 3.61117,-1.35407 6.10244,-5.69487 9.43577,-9.00745 -7.3856,-0.7502 -13.819,-0.19771 -19.33707,-2.18578 -17.99172,-6.4821 -26.931871,-20.71732 -21.1284,-39.990344 5.86521,-19.47799 17.71469,-35.098927 33.44821,-47.97044 6.84662,-5.601189 14.02439,-10.11958 22.56356,-12.705542 15.19137,-4.600489 28.94084,6.801252 30.36609,19.926451 0.86068,7.926071 -4.03107,15.05632 -8.6276,21.542309 -1.98013,2.794098 -4.42662,5.268699 -6.75664,7.800666 -2.26086,2.456818 -5.00058,3.703019 -8.02319,1.519387 -3.20259,-2.313683 -5.95778,-5.302307 -3.78848,-9.567398 2.2509,-4.425568 4.90758,-8.685948 7.77965,-12.740288 1.99942,-2.822479 4.78848,-4.537491 8.47996,-1.247185 0.64717,-3.231556 1.7502,-6.092865 1.67372,-8.922291 -0.14766,-5.463333 -5.40774,-8.773899 -11.48112,-7.084129 -9.39531,2.614017 -16.6427,8.46492 -23.32808,15.511574 -7.72437,8.141804 -13.5486,17.355495 -18.13533,27.439106 -4.2721,9.391891 -7.63001,19.088454 -4.43158,29.541314 2.90053,9.4793 8.72674,11.67468 17.57431,7.18478 7.91275,-4.01548 12.20747,-11.41077 17.16276,-18.19485 0.27392,-0.37498 0.27527,-0.94401 0.53563,-1.33463 5.64551,-8.469418 8.32479,-8.872937 15.5661,-1.555509 1.24448,1.257549 1.74265,4.711799 0.92684,6.298479 -3.59696,6.9959 -7.80455,13.6776 -11.78224,20.47819 -0.76667,1.31076 -1.49428,2.64436 -2.58071,4.57214 9.70641,-4.17244 22.63234,-16.36034 30.09436,-27.93532 4.90895,2.93493 5.68946,6.42675 2.81548,11.09753 -6.90178,11.21682 -17.50409,18.53576 -28.69765,24.07567 -9.50633,4.7049 -15.56929,11.74978 -21.82509,19.61248 -7.60205,9.55475 -16.01233,18.53033 -28.76638,21.63191 -8.94502,2.17531 -20.478695,-2.37059 -25.04446,-10.3607 -2.269448,-3.97155 -1.424317,-9.67397 2.693886,-12.19689 4.592796,-2.81369 9.748874,-4.70791 14.982264,-7.25509 m 14.78447,11.29638 c 2.27268,-2.38421 4.54535,-4.76843 6.81803,-7.15266 -0.30329,-0.42642 -0.60655,-0.85286 -0.90984,-1.2793 -7.76075,3.14049 -15.56547,6.17845 -23.25774,9.47856 -2.59782,1.11452 -5.585054,3.41985 -3.72232,6.2414 1.10781,1.67808 5.59334,2.84099 7.48272,1.95013 4.6913,-2.21199 8.76435,-5.73523 13.58915,-9.23813 z"
            id="path4620"
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "fill"]}
          />
          <motion.path
            className="fill-black stroke-black dark:fill-white dark:stroke-white"
            strokeWidth="2"
            d="m 130.9781,37.863853 c -2.39135,0.795723 -4.82777,1.71391 -7.12478,1.444321 -7.38543,-0.866768 -14.68525,-2.633781 -22.08265,-3.180939 C 94.060745,35.556961 86.275864,36 78.338341,36 86.017822,46.596687 84.11969,46.441219 77.232819,59.107845 66.339554,79.143227 55.139839,99.005974 47.064663,120.39919 c -2.710301,7.18027 -4.902412,14.57232 -6.995354,21.96273 -1.074642,3.79471 -3.67762,2.96451 -5.860832,2.26654 -7.188391,-2.29812 -10.409578,-7.9006 -8.030251,-14.95318 3.322079,-9.84696 6.731865,-19.73586 11.104962,-29.14147 C 45.824181,82.163933 55.041115,64.107811 64.026222,45.945545 65.274284,43.422749 66.79509,41.034878 68.581703,37.895649 52.516239,41.591721 38.207333,47.40052 24.289715,54.2742 16.189606,58.274712 12.930687,57.086334 8.959433,49.156452 6.995439,45.234707 8.374969,42.350899 11.416623,40.29147 c 5.981931,-4.050232 12.099752,-7.94772 18.454976,-11.361834 1.424437,-0.765228 4.346533,0.253302 6.047507,1.308023 1.501823,0.931237 2.262306,3.058053 2.930599,4.040337 12.51915,-3.104204 24.466278,-7.18771 36.739307,-8.818533 14.488655,-1.925234 29.253478,-1.95742 43.910698,-2.320026 4.6192,-0.114275 10.97839,8.568557 11.47839,14.724416 z"
            id="path4622"
            variants={pathVariants}
            initial="hidden"
            animate={["visible", "fill"]}
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default MyLogo;
