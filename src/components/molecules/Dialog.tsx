import { X } from "@phosphor-icons/react/dist/ssr";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Dialog = {
  Root: ({
    children,
    ...props
  }: ComponentProps<typeof DialogPrimitive.Root>) => (
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  ),

  Portal: ({
    children,
    ...props
  }: ComponentProps<typeof DialogPrimitive.Portal>) => (
    <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>
  ),

  Overlay: ({
    children,
    ...props
  }: ComponentProps<typeof DialogPrimitive.Overlay>) => (
    <DialogPrimitive.Overlay
      {...props}
      className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[999]"
    >
      {children}
    </DialogPrimitive.Overlay>
  ),

  Content: ({
    children,
    className,
    ...props
  }: ComponentProps<typeof DialogPrimitive.Content>) => (
    <DialogPrimitive.Content
      {...props}
      className={twMerge(
        "bg-white fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-2xl p-6 z-[9999]",
        className
      )}
    >
      {children}
    </DialogPrimitive.Content>
  ),

  Title: ({
    children,
    ...props
  }: ComponentProps<typeof DialogPrimitive.Title>) => (
    <DialogPrimitive.Title {...props}>{children}</DialogPrimitive.Title>
  ),

  Description: ({
    children,
    ...props
  }: ComponentProps<typeof DialogPrimitive.Description>) => (
    <DialogPrimitive.Description {...props}>
      {children}
    </DialogPrimitive.Description>
  ),

  Close: ({ ...props }: ComponentProps<typeof DialogPrimitive.Close>) => (
    <DialogPrimitive.Close {...props}>
      <X size={24} />
    </DialogPrimitive.Close>
  ),
};
