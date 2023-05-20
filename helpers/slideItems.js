import Image from "next/image";

export const slideItems = [
  {
    id: 0,
    title: "Inkjet",
    info: "Printers",
    image: (
      <Image
        src={"/slides/inkjet_w.png"}
        alt="Inkjet"
        width={1400}
        height={550}
      />
    ),
  },
  {
    id: 1,
    title: "Laser",
    info: "Machine",
    // image: "/slides/laser_w.png",
    image: (
      <Image
        src={"/slides/laser_w.png"}
        alt="Inkjet"
        width={1400}
        height={550}
      />
    ),
  },
  {
    id: 2,
    title: "Thermal",
    info: "Printers",
    // image: "/slides/thermal_w.png",
    image: (
      <Image
        src={"/slides/thermal_w.png"}
        alt="Inkjet"
        width={1400}
        height={550}
      />
    ),
  },
];
