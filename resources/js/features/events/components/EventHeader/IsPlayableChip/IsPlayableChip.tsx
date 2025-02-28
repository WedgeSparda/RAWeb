import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { LuCheck, LuCircleCheck } from 'react-icons/lu';

import { BaseChip } from '@/common/components/+vendor/BaseChip';
import {
  BaseTooltip,
  BaseTooltipContent,
  BaseTooltipTrigger,
} from '@/common/components/+vendor/BaseTooltip';

dayjs.extend(utc);

interface IsPlayableChipProps {
  event: App.Platform.Data.Event;
}

export const IsPlayableChip: FC<IsPlayableChipProps> = ({ event }) => {
  const { t } = useTranslation();

  if (!event.eventAchievements) {
    return null;
  }

  if (event.state === 'active') {
    return (
      <BaseTooltip>
        <BaseTooltipTrigger>
          <BaseChip
            className="text-green-400 light:border light:border-neutral-300 light:text-green-700"
            data-testid="playable"
          >
            <LuCheck className="size-4" />
            {t('Active')}
          </BaseChip>
        </BaseTooltipTrigger>

        <BaseTooltipContent className="max-w-72 text-center">
          {t(
            'This event is currently running and has a set end date. Join now to participate and earn an award before it ends.',
          )}
        </BaseTooltipContent>
      </BaseTooltip>
    );
  }

  if (event.state === 'evergreen') {
    return (
      <BaseTooltip>
        <BaseTooltipTrigger>
          <BaseChip className="text-green-400" data-testid="playable">
            <LuCheck className="size-4" />
            {t('No Time Limit')}
          </BaseChip>
        </BaseTooltipTrigger>

        <BaseTooltipContent className="max-w-72 text-center">
          {t(
            'This event has no end date. You can start participating at any time and progress at your own pace.',
          )}
        </BaseTooltipContent>
      </BaseTooltip>
    );
  }

  return (
    <BaseTooltip>
      <BaseTooltipTrigger>
        <BaseChip data-testid="playable">
          <LuCircleCheck className="size-4" />
          {t('Concluded')}
        </BaseChip>
      </BaseTooltipTrigger>

      <BaseTooltipContent className="max-w-72 text-center">
        {t('This event has ended and is no longer accepting new participants.')}
      </BaseTooltipContent>
    </BaseTooltip>
  );
};
