import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const LOG = (title: string, obj: Object) => {
  console.log(`${title} : ${JSON.stringify(obj, null, 4)}`);
};
