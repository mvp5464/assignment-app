import { ComponentProps } from "react";

import dynamic from "next/dynamic";

interface LazySvgProps extends ComponentProps<"svg"> {
  name: string;
}

export const LazySvg = async ({ name, ...props }: LazySvgProps) => {
  const Svg = dynamic(() => import(`@/components/icons/${name}.tsx`));

  return <Svg {...props} />;
};
