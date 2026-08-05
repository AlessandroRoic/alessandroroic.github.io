import icons from "../assets/icons/icons.svg";
import camoNotification from "../assets/images/camo-notifications.webp";
import eQuality from "../assets/images/e-quality.png";
import airborneAssault from "../assets/images/airborne-assault.png";

export const projects = [
  {
    name: "Personal Website",
    description: "Check this site source code on github for more details",
    site: "github.com/AlessandroRoic/alessandroroic.github.io",
    logo: `${icons}#site-logo`,
  },
  {
    name: "CamoNotifications",
    description:
      "React notifications library that disguises itself in your application 🥷😶‍🌫️",
    site: "github.com/AlessandroRoic/CamoNotifications",
    logo: camoNotification,
  },
  {
    name: "E-Quality",
    description: "Children video game on gender equality awareness",
    site: "github.com/AlessandroRoic/E-Quality",
    logo: eQuality,
  },
  {
    name: "Airborne Assault",
    description: "Video game build with libGDX for the university Java course",
    site: "github.com/AlessandroRoic/AirborneAssault",
    logo: airborneAssault,
  },
];
