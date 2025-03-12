import { cn } from "@/lib/utils";
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";


export enum AvatarSize {
  Xs = 6,
  Small = 8,
  S9 = 9,
  Normal = 10,
  Xl = 12,
}

type AvatarProps = {
  name: string;
  className?: string;
  size?: AvatarSize;
  title?: string;
};

const avatarColorMap = [
  `bg-red-100 text-red-900`,
  `bg-amber-100 text-amber-900`,
  `bg-lime-100 text-lime-900`,
  `bg-green-100 text-green-900`,
  `bg-teal-100 text-teal-900`,
  `bg-sky-100 text-sky-900`,
  `bg-blue-100 text-blue-900`,
  `bg-indigo-100 text-indigo-900`,
  `bg-violet-100 text-violet-900`,
  `bg-pink-100 text-pink-900`,
];

const sizeMap = {
  [AvatarSize.Xl]: `w-12 h-12`,
  [AvatarSize.Normal]: `w-10 h-10`,
  [AvatarSize.S9]: `w-9 h-9`,
  [AvatarSize.Small]: `w-8 h-8`,
  [AvatarSize.Xs]: `w-6 h-6`,
};

const BaseAvatar: React.FC<
  React.PropsWithChildren<{
    index: number;
    size?: AvatarSize;
    className: string | undefined;
    title: string | undefined,
  }>
> = ({ index, size = AvatarSize.Normal, children, className,title, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-full flex justify-center items-center",
        sizeMap[size],
        avatarColorMap[index],
        className
      )}

      title={title}

      {...props}
    >
      {children}
    </div>
  );
};

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size,
  className,
  title,
}) => {
  const randomIndex = useMemo(() => {
    if (!name) {
      return 0;
    }

    let hash = 0;

    for (var i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    const index = Math.abs(h % 10);
    return index;
  }, [name]);

  const getNameInitials = useCallback((name: string) => {
    var names = (name || "").split(" "),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }, []);

  return (
    <>
      <BaseAvatar
        index={randomIndex}
        className={className}
        size={size}
        title={title}
      >
        <span
          className={classNames(
            "font-medium",
            size === AvatarSize.Xs
              ? "text-[10px]"
              : size === AvatarSize.Small || size === AvatarSize.S9
              ? "text-sm"
              : "text-base"
          )}
        >
          {getNameInitials(name)}
        </span>
      </BaseAvatar>
    </>
  );
};
