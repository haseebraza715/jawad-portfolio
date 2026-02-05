import { SectionTitle } from "@/components/SectionTitle";

type Props = {
  leftId: string;
  leftTitle: string;
  leftChildren: React.ReactNode;
  rightId: string;
  rightTitle: string;
  rightChildren: React.ReactNode;
};

export function TwoColumnSection({
  leftId,
  leftTitle,
  leftChildren,
  rightId,
  rightTitle,
  rightChildren,
}: Props) {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <section id={leftId} className="scroll-mt-24" aria-labelledby={`${leftId}-heading`}>
            <SectionTitle id={`${leftId}-heading`}>{leftTitle}</SectionTitle>
            {leftChildren}
          </section>
          <section id={rightId} className="scroll-mt-24" aria-labelledby={`${rightId}-heading`}>
            <SectionTitle id={`${rightId}-heading`}>{rightTitle}</SectionTitle>
            {rightChildren}
          </section>
        </div>
      </div>
    </section>
  );
}
