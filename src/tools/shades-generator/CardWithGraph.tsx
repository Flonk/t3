import { PropsWithChildren, forwardRef } from "react";
import { Card } from "../../ui/Card";
import { useColors } from "../../ui/ColorsProvider";

type CardWithGraphProps = PropsWithChildren & {
  header: string;
  belowHeader?: JSX.Element;
};

export const CardWithGraph = forwardRef<HTMLCanvasElement, CardWithGraphProps>(
  ({ header, children, belowHeader }, ref) => {
    const { colors } = useColors();
    return (
      <Card>
        <h3
          className="font-bold mb-2 mt-[-0.25rem]"
          style={{ color: colors.themed600 }}
        >
          {header}
        </h3>
        {belowHeader}
        <div className="flex">
          <div>
            <div
              className="rounded-md overflow-hidden"
              style={{
                border: `1px solid ${colors.themed600}`,
              }}
            >
              <canvas width={200} height={150} ref={ref} />
            </div>
          </div>
          <div className="ml-2">{children}</div>
        </div>
      </Card>
    );
  }
);
