import { FC, ReactNode } from "react";

interface Props {
  title: number;
  subTitle: string;
  icon: ReactNode;
}

export const ItemSummaryTile: FC<Props> = ({ title, subTitle, icon }) => {
  return (
    <div>
      {icon}
      {title}
      {subTitle}
    </div>
  )
}
