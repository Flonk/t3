import { PropsWithChildren, forwardRef } from "react";
import { useColors } from "../../ui/ColorsProvider";
import { Card } from "./Card";

type CardWithGraphProps = PropsWithChildren & {
  header: string;
  belowHeader?: JSX.Element;
};

export const CardWithGraph = forwardRef<HTMLCanvasElement, CardWithGraphProps>(
  ({ header, children, belowHeader }, ref) => {
    const { colors } = useColors();
    return (
      <Card className="max-w-[522px]">
        <h3
          className="font-bold mb-2 mt-[-0.25rem]"
          style={{ color: colors.themed600 }}
        >
          {header}
        </h3>
        {belowHeader}
        <div className="flex flex-col sm:flex-row justify-center">
          <div>
            <div
              className="rounded-md overflow-hidden w-fit"
              style={{
                border: `1px solid ${colors.themed600}`,
              }}
            >
              <canvas width={200} height={150} ref={ref} />
            </div>
          </div>
          <div className="pt-2 sm:pt-0 sm:ml-2">{children}</div>
        </div>
      </Card>
    );
  }
);
