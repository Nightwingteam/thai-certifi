import { Card } from "../Card";
import { RunningRabbit, ThailandIcon, Woman } from "../icons";
import { useBreakpoint } from "../useBreakpoint";

export const InfoCard = () => {
  const { lg } = useBreakpoint();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-10 lg:mx-60 -mt-[320px] lg:-mt-0 lg:pt-16">
      {!lg && (
        <div className="flex flex-col text-center justify-center text-white font-semibold">
          <span>We are your trusted partner </span>
          <span className="text-secondary">
            <span className="text-white">for</span> NBTC Certification{" "}
            <span className="text-white"> in Thailand</span>
          </span>{" "}
        </div>
      )}

      {infoList.map((info, index) => (
        <Card color={index == 1 ? "secondary" : "default"} key={index}>
          <div className="flex flex-col text-center p-4 sm:p-6 justify-center items-center">
            <div className="p-3">{info.icon}</div>

            <h3 className="text-lg font-medium">{info.title}</h3>

            <p className="mt-2 text-sm/relaxed">{info.caption}</p>
            {info.link && (
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-secondary"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
const infoList = [
  {
    id: 1,
    icon: <RunningRabbit />,
    title: "Speed Without Compromise",
    caption:
      "Leverage our pre-approved testing labs and direct NBTC liaisons to cut processing times by up to 50%.",
    link: "/",
  },
  {
    id: 2,
    icon: <Woman />,
    title: "Thai Representation Solved",
    caption:
      "No local entity? We connect you with trusted Thai partners or guide you through company registration.",
  },
  {
    id: 3,
    icon: <ThailandIcon />,
    title: "Beyond Certification",
    caption:
      "Need marketing or website localization? We offer bundled services to ensure full compliance for your Thai market launch.",
    link: "/",
  },
];
