import type { Column, SortDirection, Table } from '@tanstack/react-table';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { IconType } from 'react-icons/lib';
import { RxArrowDown, RxArrowUp, RxCaretSort, RxEyeNone } from 'react-icons/rx';
import type { RouteName } from 'ziggy-js';

import { BaseButton } from '@/common/components/+vendor/BaseButton';
import {
  BaseDropdownMenu,
  BaseDropdownMenuContent,
  BaseDropdownMenuItem,
  BaseDropdownMenuSeparator,
  BaseDropdownMenuTrigger,
} from '@/common/components/+vendor/BaseDropdownMenu';
import { cn } from '@/common/utils/cn';

import { useDataTablePrefetchSort } from '../../hooks/useDataTablePrefetchSort';
import { useSortConfigs } from '../../hooks/useSortConfigs';
import type { SortConfigKind } from '../../models';

const defaultIcons = { asc: RxArrowUp, desc: RxArrowDown };

interface DataTableColumnHeaderProps<TData, TValue> extends HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  table: Table<TData>;

  /** The controller route name where client-side calls for this datatable are made. */
  tableApiRouteName?: RouteName;
  tableApiRouteParams?: Record<string, unknown>;
}

export function DataTableColumnHeader<TData, TValue>({
  className,
  column,
  table,
  tableApiRouteParams,
  tableApiRouteName = 'api.game.index',
}: DataTableColumnHeaderProps<TData, TValue>): ReactNode {
  const { t } = useTranslation();

  /**
   * On hovering over a sort menu item, prefetch the result.
   */
  const { prefetchSort } = useDataTablePrefetchSort(table, tableApiRouteName, tableApiRouteParams);

  /**
   * Used to determine what labels and icons should be shown in the header's sort menu.
   */
  const { sortConfigs } = useSortConfigs();

  if (!column.getCanSort()) {
    return (
      <div
        className={cn(
          'flex text-[13px]',
          column.columnDef.meta?.align === 'right' ? 'mr-4 justify-end' : '',
          className,
        )}
      >
        {column.columnDef.meta?.t_label}
      </div>
    );
  }

  const sortType = (column.columnDef.meta?.sortType ?? 'default') as SortConfigKind;
  const sortConfig = sortConfigs[sortType];

  const getIcon = (direction: 'asc' | 'desc'): IconType =>
    sortConfig[direction].icon || defaultIcons[direction];

  const getCurrentSortIcon = (): IconType => {
    const sortDirection = column.getIsSorted();

    if (sortDirection === false) {
      return RxCaretSort;
    }

    return getIcon(sortDirection);
  };

  const SortIcon = getCurrentSortIcon();

  const handleSortMenuItemClick = (desc?: boolean) => {
    column.toggleSorting(desc);

    // Track the most common sorts.
    if (plausible) {
      const order = desc ? `-${column.columnDef.id}` : column.columnDef.id;
      if (order) {
        plausible('Game List Sort', { props: { order } });
      }
    }
  };

  return (
    <div
      className={cn(
        'flex items-center space-x-2',
        column.columnDef.meta?.align === 'right' ? 'justify-end' : '',
        className,
      )}
    >
      <BaseDropdownMenu>
        <BaseDropdownMenuTrigger asChild>
          <BaseButton
            variant="ghost"
            size="sm"
            className="data-[state=open]:bg-accent -ml-3 h-8 !transform-none focus-visible:!ring-0 focus-visible:!ring-offset-0"
            data-testid={`column-header-${column.columnDef.meta?.t_label}`}
          >
            <span>{column.columnDef.meta?.t_label}</span>
            <SortIcon className="ml-1 h-4 w-4" />
          </BaseButton>
        </BaseDropdownMenuTrigger>

        <BaseDropdownMenuContent align="start">
          {(Object.keys(sortConfig) as SortDirection[]).map((direction) => (
            <SortMenuItem
              key={direction}
              direction={direction}
              icon={getIcon(direction)}
              label={sortConfig[direction].t_label}
              onClick={() => handleSortMenuItemClick(direction === 'desc')}
              onMouseEnter={() => prefetchSort(column.columnDef.id, direction)}
            />
          ))}

          {column.getCanHide() ? (
            <>
              <BaseDropdownMenuSeparator />

              <BaseDropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                <RxEyeNone className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
                {t('Hide')}
              </BaseDropdownMenuItem>
            </>
          ) : null}
        </BaseDropdownMenuContent>
      </BaseDropdownMenu>
    </div>
  );
}

interface SortMenuItemProps {
  direction: 'asc' | 'desc';
  icon: IconType;
  label: string;
  onClick: () => void;

  onMouseEnter?: () => void;
}

const SortMenuItem: FC<SortMenuItemProps> = ({ icon: Icon, label, onClick, onMouseEnter }) => {
  return (
    <BaseDropdownMenuItem onClick={onClick} onMouseEnter={onMouseEnter}>
      <Icon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
      {label}
    </BaseDropdownMenuItem>
  );
};
