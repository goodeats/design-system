// app/components/select-field.tsx

import React, { useId } from 'react';
import { FieldErrorList, type ListOfErrors } from './forms';
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectLabel,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './ui';

type SelectFieldItemType = {
  label: string;
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
};

type SelectFieldItemGroupType = {
  label: string;
  items: SelectFieldItemType[];
};

// select field items can be grouped or not
type SelectFieldProps = {
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  selectProps: React.SelectHTMLAttributes<HTMLSelectElement>;
  placeholder?: string;
  itemGroups?: SelectFieldItemGroupType[];
  items?: SelectFieldItemType[];
  errors?: ListOfErrors;
  className?: string;
  onChange?: (value: string | null) => void;
};

const SelectField = ({
  labelProps,
  selectProps,
  placeholder = 'Select an option',
  itemGroups,
  items,
  errors,
  className,
  onChange,
}: SelectFieldProps) => {
  const fallbackId = useId();

  const id = labelProps.htmlFor ?? fallbackId;
  const errorId = errors?.length ? `${id}-error` : undefined;

  let contentToRender;
  if (itemGroups && itemGroups.length > 0) {
    contentToRender = renderSelectItemGroups({ itemGroups });
  } else if (items && items.length > 0) {
    contentToRender = renderSelectItems({ items });
  } else {
    placeholder = 'There are no items';
    contentToRender = renderNoItems();
  }

  const handleValueChange = (value: string | null) => {
    if (value) {
      onChange?.(value);
    }
  };

  // a quick and dirty hack to get defaultChecked removed if it's null
  // this way the placeholder will be shown instead
  const { defaultValue, ...otherSelectProps } = selectProps;

  return (
    <div>
      <p>yoyoyyooyoyooy</p>
      <Label htmlFor={id} {...labelProps} />
      <Select
        onValueChange={handleValueChange}
        {...(defaultValue !== null ? { defaultValue } : {})}
        {...(otherSelectProps as any)}
        // {...(selectProps as any)}
      >
        {/* TODO: fix to be dynamic */}
        <SelectTrigger aria-label="Dimension">
          <SelectValue placeholder={placeholder} />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectContent>
            <SelectScrollUpButton />
            {contentToRender}
            <SelectScrollDownButton />
          </SelectContent>
        </SelectPortal>
      </Select>
      <FieldErrorList errorId={errorId} errors={errors} />
    </div>
  );
};

const renderSelectItemGroups = ({
  itemGroups,
}: {
  itemGroups: SelectFieldItemGroupType[];
}) => {
  return (
    <SelectViewport>
      {itemGroups.flatMap(
        (itemGroup: SelectFieldItemGroupType, index: number) => {
          // Render items for current group
          const itemsGroup = renderSelectItemGroup({
            itemGroup,
            index,
          });

          // If it's not the last group, add a separator
          if (index < itemGroups.length - 1) {
            return [itemsGroup, <SelectSeparator key={`separator-${index}`} />];
          }

          // If it's the last group, don't add a separator
          return [itemsGroup];
        }
      )}
    </SelectViewport>
  );
};

const renderSelectItemGroup = ({
  itemGroup,
  index,
}: {
  itemGroup: SelectFieldItemGroupType;
  index: number;
}) => {
  return (
    <SelectGroup key={`select-group-${index}`}>
      <SelectLabel>{itemGroup.label}</SelectLabel>
      {itemGroup.items.map((item: SelectFieldItemType, idx: number) => {
        const key = `select-group-${index}-item-${idx}`;
        return (
          <SelectItem
            key={key}
            value={item.value}
            disabled={item.disabled}
            className={item.className}
          >
            {item.label}
          </SelectItem>
        );
      })}
    </SelectGroup>
  );
};

const renderSelectItems = ({ items }: { items: SelectFieldItemType[] }) => {
  return (
    <SelectViewport>
      {items.map((item: SelectFieldItemType, index: number) => {
        const key = `select-item-${index}`;
        return (
          <SelectItem
            key={key}
            value={item.value}
            disabled={item.disabled}
            className={item.className}
          >
            {item.label}
          </SelectItem>
        );
      })}
    </SelectViewport>
  );
};

const renderNoItems = () => {
  return (
    <SelectViewport>
      <div>There are no items</div>
    </SelectViewport>
  );
};

export default SelectField;
