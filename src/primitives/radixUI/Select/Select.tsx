// app/components/ui/select.tsx

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '~/utils/epic-misc';
import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';

const Select = SelectPrimitive.Root;
Select.displayName = SelectPrimitive.Root.displayName;

const SelectTriggerClassNames = `
  inline-flex items-center justify-center rounded px-4 py-1.5 text-sm leading-none h-9 gap-1.5 bg-white text-red-900 shadow-lg hover:bg-red-300 focus:ring-2 ring-black w-full
`;
const SelectTriggerPlaceholderClassNames = `text-red-500`;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
    placeholder?: string;
  }
>(({ className, placeholder, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(SelectTriggerClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectValueClassNames = `text-red-900`;

const SelectValue = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Value
      className={cn(SelectValueClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectValue.displayName = SelectPrimitive.Value.displayName;

const SelectIconClassNames = `text-red-900`;

const SelectIcon = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Icon>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Icon>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Icon
      className={cn(SelectIconClassNames, className)}
      {...props}
      ref={forwardedRef}
    >
      <ChevronDownIcon />
    </SelectPrimitive.Icon>
  );
});
SelectIcon.displayName = SelectPrimitive.Icon.displayName;

const SelectPortal = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Portal>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Portal>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Portal
      className={cn(className)}
      {...props}
      // ref={forwardedRef}
    />
  );
});
SelectPortal.displayName = SelectPrimitive.Portal.displayName;

const SelectContentClassNames = `
  overflow-hidden bg-white rounded-lg shadow-custom
`;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Content
      className={cn(SelectContentClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectScrollButtonClassNames = `
  flex items-center justify-center h-6 bg-white text-red-700 cursor-default
`;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(SelectScrollButtonClassNames, className)}
      {...props}
      ref={forwardedRef}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(SelectScrollButtonClassNames, className)}
      {...props}
      ref={forwardedRef}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectViewportClassNames = `p-1.5`;

const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Viewport
      className={cn(SelectViewportClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectViewport.displayName = SelectPrimitive.Viewport.displayName;

const SelectGroupClassNames = ``;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Group
      className={cn(SelectGroupClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectGroup.displayName = SelectPrimitive.Group.displayName;

const SelectLabelClassNames = `
  px-6 text-xs leading-6 text-red-300
`;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Label
      className={cn(SelectLabelClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItemDisabledClassNames = `text-gray-300 pointer-events-none`;
const SelectItemHighlightedClassNames = `data-[highlighted]:bg-green-300  data-[highlighted]:text-blue-100`;
const SelectItemClassNames =
  `
  text-sm leading-none text-red-900 rounded flex items-center h-6 px-9 relative select-none
` + SelectItemHighlightedClassNames;

const SelectItemIndicatorClassNames = `
  absolute left-0 w-6 inline-flex items-center justify-center
`;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    value: string;
  }
>(({ children, className, value, disabled, ...props }, forwardedRef) => {
  const computedClassName = cn(
    SelectItemClassNames,
    disabled && SelectItemDisabledClassNames,
    className
  );

  return (
    <SelectPrimitive.Item
      className={computedClassName}
      {...props}
      ref={forwardedRef}
      value={value}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={SelectItemIndicatorClassNames}>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
});
// old way
// type SelectItemProps = {
//   children?: React.ReactNode;
//   className?: string;
//   value: string;
//   disabled?: boolean;
// };

// const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
//   ({ children, className, value, ...props }, forwardedRef) => {
//     return (
//       <SelectPrimitive.Item
//         className={cn(SelectItemClassNames, className)}
//         {...props}
//         ref={forwardedRef}
//         value={value}
//       >
//         <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
//         <SelectPrimitive.ItemIndicator
//           className={SelectItemIndicatorClassNames}
//         >
//           <CheckIcon />
//         </SelectPrimitive.ItemIndicator>
//       </SelectPrimitive.Item>
//     );
//   }
// );

// why the change according to ChatGPT:
// The shift from the old way of defining props to the new way represents a transition from a custom-defined prop type to leveraging TypeScript's built-in utility types. Let's break down the differences and benefits:

// Flexibility and Accuracy:

// In the new approach, React.ElementRef<typeof SelectPrimitive.Item> dynamically determines the type of the element the ref points to. This can be particularly helpful when the underlying component might change or if you aren't immediately certain of its type.
// React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> provides the props type of the component without its ref. This ensures that you're using the exact props expected by SelectPrimitive.Item, which can help in catching prop mismatches or errors.
// Extending Built-in Props:

// The new approach allows you to easily extend the built-in props of the SelectPrimitive.Item component. This means if the underlying Radix UI component updates its prop types in the future, your component will automatically receive those updates without needing manual adjustments. In the new approach, you've added a value: string; prop to the already existing prop type.
// Reduced Redundancy:

// The old approach required you to manually define each prop that the component accepts. While this offers clarity, it can also lead to redundancy and potential errors. If the underlying primitive component was to be updated, you would need to update your SelectItemProps manually. The new approach mitigates this issue.
// Improved Maintenance:

// The new approach reduces maintenance effort. If Radix updates its component prop types, the newer approach will automatically adapt because it sources the prop types directly from the Radix component. The old way would require manual updates each time there's a change.
// Code Readability:

// One could argue that the old method offers better readability, especially for those unfamiliar with TypeScript's utility types. Having a separate SelectItemProps type is explicit, making it easy to quickly see what props are expected. However, the new approach is more concise and leverages TypeScript's power more effectively.
// In summary, while both methods have their merits, the new approach offers more dynamic and flexible type definitions, reduces redundancy, and eases maintenance, especially when working with third-party libraries.
SelectItem.displayName = 'SelectItem';

const SelectSeparatorClassNames = `
  h-px bg-black my-1.5
`;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Separator
      className={cn(SelectSeparatorClassNames, className)}
      {...props}
      ref={forwardedRef}
    />
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectScrollUpButton,
  SelectViewport,
  SelectGroup,
  SelectLabel,
  SelectItem,
  // SelectItemText,
  // SelectItemIndicator,
  SelectScrollDownButton,
  SelectSeparator,
};
