import React from "react";
import { Link } from "react-router-dom";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight, Loader2, type LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export type MarketingButtonVariant =
  | "primary"
  | "cta"
  | "secondary"
  | "outline"
  | "glow"
  | "glass"
  | "ghost";

export type MarketingButtonSize = "sm" | "md" | "lg" | "xl";

export type MarketingIconEffect =
  | "slide"
  | "bounce"
  | "scale"
  | "pulse"
  | "none";

type IconType =
  | LucideIcon
  | React.ComponentType<{ className?: string }>
  | React.ReactNode;

export interface MarketingButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onClick" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
  > {
  variant?: MarketingButtonVariant;
  size?: MarketingButtonSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  showArrow?: boolean;
  iconBadge?: boolean;
  iconEffect?: MarketingIconEffect;
  to?: string;
  href?: string;
  external?: boolean;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  animated?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children?: React.ReactNode;
}

const variantStyles: Record<MarketingButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30 border border-primary/20",
  cta:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 border border-primary/30 relative overflow-hidden",
  secondary:
    "bg-muted/90 text-foreground hover:bg-muted dark:bg-muted/70 hover:dark:bg-muted border border-border/80 shadow-xs",
  outline:
    "bg-background/80 hover:bg-muted/60 text-foreground border border-border/90 hover:border-foreground/30 shadow-xs backdrop-blur-xs",
  glow:
    "bg-primary text-primary-foreground hover:bg-primary/95 ring-2 ring-primary/40 hover:ring-4 hover:ring-primary/60 shadow-lg shadow-primary/35 transition-all duration-300",
  glass:
    "bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/25 dark:border-white/10 text-foreground hover:bg-white/20 dark:hover:bg-white/10 shadow-sm",
  ghost:
    "bg-transparent hover:bg-muted/60 text-foreground border border-transparent",
};

const sizeStyles: Record<
  MarketingButtonSize,
  { container: string; iconSize: string; badgeSize: string }
> = {
  sm: {
    container: "h-9 px-4 text-xs gap-2 rounded-full",
    iconSize: "size-3.5",
    badgeSize: "p-1 size-5",
  },
  md: {
    container: "h-11 px-5 text-sm gap-2.5 rounded-full font-medium",
    iconSize: "size-4",
    badgeSize: "p-1 size-6",
  },
  lg: {
    container: "h-12 px-7 text-sm md:text-base gap-3 rounded-full font-semibold",
    iconSize: "size-4.5",
    badgeSize: "p-1.5 size-7",
  },
  xl: {
    container: "h-14 px-9 text-base md:text-lg gap-3.5 rounded-full font-bold",
    iconSize: "size-5",
    badgeSize: "p-1.5 size-8",
  },
};

const renderIconNode = (
  icon: IconType | undefined,
  position: "left" | "right",
  effect: MarketingIconEffect,
  badge: boolean,
  sizeConfig: { iconSize: string; badgeSize: string }
) => {
  if (!icon) return null;

  let effectClass = "";
  if (effect === "slide") {
    effectClass =
      position === "right"
        ? "group-hover:translate-x-1 transition-transform duration-200"
        : "group-hover:-translate-x-1 transition-transform duration-200";
  } else if (effect === "bounce") {
    effectClass =
      "group-hover:-translate-y-0.5 group-hover:scale-105 transition-transform duration-200";
  } else if (effect === "scale") {
    effectClass = "group-hover:scale-120 transition-transform duration-200";
  } else if (effect === "pulse") {
    effectClass = "animate-pulse";
  }

  const isComponent =
    typeof icon === "function" ||
    (typeof icon === "object" && icon !== null && !React.isValidElement(icon));

  const content = isComponent ? (
    React.createElement(icon as React.ComponentType<{ className?: string }>, {
      className: cn(sizeConfig.iconSize, "shrink-0"),
    })
  ) : React.isValidElement(icon) ? (
    React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
      className: cn(
        sizeConfig.iconSize,
        (icon as React.ReactElement<{ className?: string }>).props.className
      ),
    })
  ) : (
    <span
      className={cn(sizeConfig.iconSize, "inline-flex items-center justify-center")}
    >
      {icon}
    </span>
  );

  if (badge) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-white/20 dark:bg-white/10 shrink-0",
          sizeConfig.badgeSize,
          effectClass
        )}
      >
        {content}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        effectClass
      )}
    >
      {content}
    </span>
  );
};

export const MarketingButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  MarketingButtonProps
>(
  (
    {
      variant = "cta",
      size = "lg",
      leftIcon,
      rightIcon: customRightIcon,
      showArrow = false,
      iconBadge = false,
      iconEffect = "slide",
      to,
      href,
      external = true,
      loading = false,
      loadingText,
      fullWidth = false,
      animated = true,
      className,
      disabled = false,
      onClick,
      children,
      type = "button",
      ...restProps
    },
    ref
  ) => {
    const rightIcon = customRightIcon || (showArrow ? ArrowRight : undefined);
    const sizeConfig = sizeStyles[size];

    const baseClassName = cn(
      "group inline-flex items-center justify-center select-none cursor-pointer tracking-tight transition-colors duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeConfig.container,
      fullWidth && "w-full",
      className
    );

    const content = (
      <>
        {(variant === "cta" || variant === "glow") && (
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}

        {loading ? (
          <>
            <Loader2 className={cn(sizeConfig.iconSize, "animate-spin shrink-0")} />
            <span>{loadingText || children}</span>
          </>
        ) : (
          <>
            {renderIconNode(leftIcon, "left", iconEffect, iconBadge, sizeConfig)}
            {children && <span>{children}</span>}
            {renderIconNode(rightIcon, "right", iconEffect, iconBadge, sizeConfig)}
          </>
        )}
      </>
    );

    const motionProps: HTMLMotionProps<"button"> = animated
      ? {
          whileHover: disabled || loading ? undefined : { scale: 1.025 },
          whileTap: disabled || loading ? undefined : { scale: 0.98 },
          transition: { type: "spring", stiffness: 400, damping: 25 },
        }
      : {};

    if (to && !disabled && !loading) {
      return (
        <motion.div
          {...(animated
            ? { whileHover: { scale: 1.025 }, whileTap: { scale: 0.98 } }
            : {})}
          className={cn(fullWidth ? "w-full" : "inline-block")}
        >
          <Link
            to={to}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={baseClassName}
            onClick={onClick}
            {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </Link>
        </motion.div>
      );
    }

    if (href && !disabled && !loading) {
      return (
        <motion.div
          {...(animated
            ? { whileHover: { scale: 1.025 }, whileTap: { scale: 0.98 } }
            : {})}
          className={cn(fullWidth ? "w-full" : "inline-block")}
        >
          <a
            href={href}
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={baseClassName}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            onClick={onClick}
            {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          >
            {content}
          </a>
        </motion.div>
      );
    }

    return (
      <motion.button
        type={type}
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClassName}
        disabled={disabled || loading}
        onClick={onClick}
        {...motionProps}
        {...(restProps as HTMLMotionProps<"button">)}
      >
        {content}
      </motion.button>
    );
  }
);

MarketingButton.displayName = "MarketingButton";

export default MarketingButton;

