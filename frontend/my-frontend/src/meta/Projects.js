// logos
import cyRateLogo from "../static/pics/cyrate2-1.png";
import goSportsLogo from "../static/pics/blue_go_sports.png";
import sjdSvg from "../static/pics/sjd.png";
import crossoverclipsLogo from "../static/pics/crossoverclips.png";
import skillMagnetLogo from "../static/pics/sm.webp";

// language/framework icons
import pythonSVG from "../static/pics/python-5.svg";
import djangoJPG from "../static/pics/django.jpg";
import htmlSVG from "../static/pics/html5-2.svg";
import bootStrapSVG from "../static/pics/bootstrap.svg";
import javaSvg from "../static/pics/javaSvg.svg";
import springbootSvg from "../static/pics/springboot.svg";
import fastSVG from "../static/pics/fastapi.svg";
import chatJPG from "../static/pics/chatGPT.jpg";
import reactSvg from "../static/pics/react.png";
import muiLogo from "../static/pics/mui.png";
import mongoLogo from "../static/pics/mongodb-svgrepo-com.svg";
import postgresLogo from "../static/pics/postgres.png";

// Badge Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloudIcon from "@mui/icons-material/Cloud";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const PYTHON_URL = "https://www.python.org/";
const JAVA_URL = "https://www.java.com/en/";
const SPRING_URL = "https://spring.io/projects/spring-boot";
const DJANGO_URL = "https://www.djangoproject.com/";
const HTML_URL =
  "https://html5-tutorial.net/introduction-to-html/your-first-webpage/";
const BOOTSTRAP_URL =
  "https://getbootstrap.com/docs/5.2/getting-started/introduction/";
const REACT_URL = "https://reactjs.org/";
const MUI_URL = "https://mui.com/";
const FAST_URL = "https://fastapi.tiangolo.com/";
const CHATGPT_URL = "https://openai.com/blog/chatgpt/";
const POSTGRES_URL = "https://www.postgresql.org/";
const MONGO_URL = "https://www.mongodb.com/";

const PROJECTS_LIST = [
  {
    profile_img: cyRateLogo,
    title: "CyRate",
    subheader: "Full Stack Android App",
    // javasvg, springbootsvg
    techstack_list: [
      [javaSvg, JAVA_URL],
      [springbootSvg, SPRING_URL],
    ],
    description:
      "Cyrate provides information on the best restaurants, bars, and \
        activites around the city of Ames. Cyrate utilizes a springboot \
        backend, a MySql Database, and a frontend that was created by \
        teamates using android studio.",
    github: "https://github.com/sjdefran1/cyrate",
    demoLink:
      "https://www.youtube.com/watch?v=w_3M2IuUfWA&list=PL6BdlkdKLEB_pYmF7uwubfK99t4KT4Xoe&index=8&ab_channel=AlexOng",
    badges: [
      [GitHubIcon, "https://github.com/sjdefran1/cyrate"],
      [
        YouTubeIcon,
        "https://www.youtube.com/watch?v=w_3M2IuUfWA&list=PL6BdlkdKLEB_pYmF7uwubfK99t4KT4Xoe&index=8&ab_channel=AlexOng",
      ],
    ],
    bullets: [
      "Multiple account types and privlleges (Owner, Admin, Guest, Normal)",
      "View resturant/bar information (hours, locations w/ google maps API, menus)",
      "Favorite feature for resturants, access your favorites by account",
      "Leave reviews for different places, have access to all reviews you have left",
      "Live comment threads utilizing websockets.",
      "CRUD capabilities for all features",
    ],
    teamates: "Anbu Krishnan, Alex Ong, Megan Eberle",
  },
  {
    profile_img: crossoverclipsLogo,
    title: "CrossoverClips",
    subheader: "Full Stack Web App",
    techstack_list: [
      [pythonSVG, PYTHON_URL],
      [fastSVG, FAST_URL],
      [reactSvg, REACT_URL],
      [postgresLogo, POSTGRES_URL],
      [mongoLogo, MONGO_URL],
      // TODO: add mongo
    ],
    description:
      "A Web application with an intuitive UI to view and download any NBA highlight dating back to the 2014 season.\
      Users can easily search for highlights based on teams, matchups, or specific dates, and further filter the plays by \
      players, quarters, and stat-types",

    badges: [
      [ArrowOutwardIcon, "https://crossoverclips.com"],
      [GitHubIcon, "https://github.com/sjdefran1/CrossoverClips/"],
      [YouTubeIcon, "https://youtube.com"],
      [TwitterIcon, "https://twitter.com/crossover_clips"],
    ],
    bullets: [
      "Reverse engineered multiple NBA API’s, merging diverse data into a central database allowing for over 40,000 \
      highlight views and 9,000 downloads since deployment",
      "Over ten million individual highlights stored, migration to Postgres with added optimization cut average \
      response time to under half a second ",
      "See current NBA standings",
      "Implemented automated data gathering using CRON jobs to seamlessly update client side with newest games \
      and highlights",
      "Search for your favorite player or team",
      "More efficient then NBA’s own League Pass Feature",
    ],
    teamates: "",
  },

  {
    profile_img: sjdSvg,
    title: "sjdefran.com",
    subheader: "Personal Portfolio",
    // javasvg, springbootsvg
    techstack_list: [
      [reactSvg, REACT_URL],
      [muiLogo, MUI_URL],
      [chatJPG, CHATGPT_URL],
    ],
    description:
      "This website was created w/ React on the frontend (Utilizing \
        Material UI), deployed statically using Github Pages. FastAPI on \
        the backend deployed using Deta, and some assistance from OpenAI's \
        ChaptGPT",

    badges: [[GitHubIcon, "https://github.com/sjdefran1/mysite"]],
    bullets: [],
    teamates: "",
  },

  {
    profile_img: skillMagnetLogo,
    title: "Skill Magnet",
    subheader: "Full Stack Web App (Backend Developer)",
    techstack_list: [
      [javaSvg, JAVA_URL],
      [reactSvg, REACT_URL],
      [springbootSvg, SPRING_URL],
    ],
    description:
      "SkillMagnet creates a centralized online platform for students, focusing on enhancing the learning experience \
      by providing quality educational resources and user-driven study tools. The overarching goal \
      is to make learning more efficient and effective by offering a well-structured and interactive educational environment.",
    badges: [
      [GitHubIcon, "https://github.com/nickerick/skill-magnet"],
      [
        YouTubeIcon,
        "https://www.youtube.com/watch?v=Pwo0iB54NLM&ab_channel=BraytonRude",
      ],
    ],
    bullets: [
      "Senior Design Project",
      "Full AWS automated deployment pipeline",
      "User Enrollment in courses",
      "Upload videos, or youtube paths to be lessons",
      "User/Creator quizzes, flashcards, and notes",
    ],
    teamates:
      "Nicholas Erickson, Deepika Vempati, Brayton Rude, Jennifer Robles, Nikhil Kuricheti",
  },
  {
    profile_img: goSportsLogo,
    title: "GoSports",
    subheader: "Full Stack Web App",
    techstack_list: [
      [pythonSVG, PYTHON_URL],
      [djangoJPG, DJANGO_URL],
      [htmlSVG, HTML_URL],
      [bootStrapSVG, BOOTSTRAP_URL],
    ],
    description:
      "Web app that provides you everything NBA. \
        Created with a Django \
        backend and a bootstrap frontend, view real time scores and \
        statistics from around the league",
    badges: [
      [GitHubIcon, "https://github.com/sjdefran1/GoSports"],
      [YouTubeIcon, "https://youtube.com"],
    ],
    bullets: [
      "View live scores of games going on today",
      "Look at your favorite teams roster, as well as each players indivual stats that season",
      "See current NBA standings",
      "View each active nba players career, also see common info about that player",
      "Search for your favorite player or team",
      "Create an account",
    ],
    teamates: "Kaya Zdan, Kyle Rooney, Shannon McCarthy",
  },
];

export default PROJECTS_LIST;
