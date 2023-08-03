import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={132} height={58} {...props}>
    <title>{"dots"}</title>
    <g fill="#A3A3A3" fillRule="evenodd">
      <circle cx={25} cy={30} r={13} />
      <circle cx={65} cy={30} r={13} />
      <circle cx={105} cy={30} r={13} />
    </g>
  </svg>
);
export default SvgComponent;
