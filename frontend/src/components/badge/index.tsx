import { cn } from "@/lib/utils";

export enum BadgeTypes {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Normal = "normal",
  Yellow = "yellow",
  Info = "info",
  Violet = "violet",
}

export enum BadgeSizes {
  Small = "small",
  Normal = "normal",
}

type BadgeParams = {
  type?: BadgeTypes;
  size?: BadgeSizes;
};

const badgeTypeMap = {
  [BadgeTypes.Success]: `bg-green-100 text-green-800`,
  [BadgeTypes.Error]: `bg-red-100 text-red-800`,
  [BadgeTypes.Warning]: `bg-orange-100 text-orange-800`,
  [BadgeTypes.Normal]: `bg-gray-100 text-gray-800`,
  [BadgeTypes.Yellow]: `bg-yellow-100 text-yellow-800`,
  [BadgeTypes.Info]: `bg-blue-100 text-blue-800`,
  [BadgeTypes.Violet]: `bg-purple-100 text-purple-700`,
};

const badgeSizeMap = {
  [BadgeSizes.Small]: `px-2 py-0.5 text-xs`,
  [BadgeSizes.Normal]: `px-2.5 py-0.5 text-sm`,
};

type BadgeProps = {
  type?: BadgeTypes;
  size?: BadgeSizes;
  className?: string;
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({
  type = BadgeTypes.Normal,
  size = BadgeSizes.Normal,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        badgeTypeMap[type],
        badgeSizeMap[size],
        className
      )}
    >
      {children}
    </div>
  );
};
