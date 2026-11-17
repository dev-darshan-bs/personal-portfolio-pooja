import { ComponentPropsWithoutRef, forwardRef, useId } from "react";

import { classes } from "@/lib/style";
import styles from "./monogram.module.css";

type MonogramProps = {
  highlight?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<"svg">;

/**
 * "PH" monogram for Pooja H S. Geometric letterforms with clean lines so it
 * sits with the angular button/divider language of the rest of the site.
 */
export const Monogram = forwardRef<SVGSVGElement, MonogramProps>(
  ({ highlight, className, ...props }, ref) => {
    const id = useId();
    const clipId = `${id}monogram-clip`;

    return (
      <svg
        aria-hidden
        className={classes(styles.monogram, className)}
        width="48"
        height="29"
        viewBox="0 0 48 29"
        ref={ref}
        {...props}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              clipRule="evenodd"
              d="M0 0h11c5.5 0 9 3.5 9 8.5s-3.5 8.5-9 8.5H6v12H0V0Zm6 5.5v6h5c2 0 3.5-1.2 3.5-3s-1.5-3-3.5-3H6Zm20-5.5h6v11h8V0h6v29h-6V17h-8v12h-6V0Z"
            />
          </clipPath>
        </defs>
        <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
        {highlight && (
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.highlight} width="100%" height="100%" />
          </g>
        )}
      </svg>
    );
  }
);

Monogram.displayName = "Monogram";
