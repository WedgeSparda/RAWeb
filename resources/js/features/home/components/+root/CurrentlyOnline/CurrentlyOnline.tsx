import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { type FC, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LuTrophy } from 'react-icons/lu';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  type BaseChartConfig,
  BaseChartContainer,
  BaseChartTooltip,
  BaseChartTooltipContent,
} from '@/common/components/+vendor/BaseChart';
import { usePageProps } from '@/common/hooks/usePageProps';
import { cn } from '@/common/utils/cn';
import { formatDate } from '@/common/utils/l10n/formatDate';

import { HomeHeading } from '../../HomeHeading';
import { useCurrentlyOnlineChart } from './useCurrentlyOnlineChart';

dayjs.extend(utc);

export const CurrentlyOnline: FC = () => {
  const { currentlyOnline, ziggy } = usePageProps<App.Http.Data.HomePageProps>();

  const { t } = useTranslation();

  const { chartData, yAxisTicks, formatTooltipLabel, formatXAxisTick, formatYAxisTick } =
    useCurrentlyOnlineChart(currentlyOnline);

  const chartConfig = {
    playersOnline: {
      label: t('Users Online'),
      color: '#c39d2a',
    },
  } satisfies BaseChartConfig;

  const isNewAllTimeHigh = useMemo(() => {
    if (!currentlyOnline?.allTimeHighPlayers || !currentlyOnline?.logEntries.length) {
      return false;
    }

    return (
      currentlyOnline.logEntries[currentlyOnline.logEntries.length - 1] >=
      currentlyOnline.allTimeHighPlayers
    );
  }, [currentlyOnline]);

  return (
    <div className="flex flex-col gap-2.5">
      <HomeHeading>{t('Currently Online')}</HomeHeading>

      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
          <p>
            <Trans
              i18nKey="userCount"
              count={currentlyOnline?.numCurrentPlayers ?? 1}
              values={{ userCount: currentlyOnline?.numCurrentPlayers ?? 1 }}
              components={{ 1: <span className="font-bold" /> }}
            />
          </p>
        </div>

        {currentlyOnline?.allTimeHighDate && currentlyOnline?.allTimeHighPlayers ? (
          <p
            className={cn(
              isNewAllTimeHigh
                ? 'flex items-center gap-1 text-yellow-500 light:text-yellow-700'
                : 'text-muted cursor-default italic transition hover:text-neutral-300 hover:light:text-neutral-950',
            )}
          >
            {isNewAllTimeHigh ? <LuTrophy className="size-4" /> : null}

            {t('All-time High: {{val, number}} ({{date}})', {
              val: currentlyOnline.allTimeHighPlayers,
              date: formatDate(dayjs.utc(currentlyOnline.allTimeHighDate), 'll'),
            })}
          </p>
        ) : null}
      </div>

      <div className="rounded bg-embed p-4">
        <BaseChartContainer config={chartConfig} className="w-full" style={{ height: 160 }}>
          <AreaChart accessibilityLayer={true} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              interval={ziggy.device === 'mobile' ? 12 : 7}
              tickFormatter={formatXAxisTick}
            />
            <YAxis tickFormatter={formatYAxisTick} tickMargin={8} ticks={yAxisTicks} />

            <BaseChartTooltip
              content={
                <BaseChartTooltipContent
                  className="min-w-[164px]"
                  labelFormatter={formatTooltipLabel}
                />
              }
            />

            <defs>
              <linearGradient id="fillPlayersOnline" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-playersOnline)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-playersOnline)" stopOpacity={0.28} />
              </linearGradient>
            </defs>

            <Area
              dataKey="playersOnline"
              type="natural"
              isAnimationActive={false}
              fill="url(#fillPlayersOnline)"
              fillOpacity={0.4}
              stroke="var(--color-playersOnline)"
              stackId="a"
              dot={{ fill: 'yellow', r: 2 }}
            />
          </AreaChart>
        </BaseChartContainer>
      </div>
    </div>
  );
};
