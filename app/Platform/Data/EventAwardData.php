<?php

declare(strict_types=1);

namespace App\Platform\Data;

use App\Models\EventAward;
use Carbon\Carbon;
use Log;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Lazy;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript('EventAward')]
class EventAwardData extends Data
{
    public function __construct(
        public int $id,
        public int $eventId,
        public int $tierIndex,
        public string $label,
        public int $pointsRequired,
        public string $badgeUrl,
        public ?Carbon $earnedAt,
        public Lazy|int $badgeCount,
    ) {
    }

    public static function fromEventAward(EventAward $award): self
    {
        Log::info('Creating EventAwardData', [
            'award_id' => $award->id,
            'tier_index' => $award->tier_index,
            'has_relation' => $award->relationLoaded('awardedUsers'),
            'users' => $award->relationLoaded('awardedUsers') ? $award->awardedUsers->toArray() : null,
        ]);

        return new self(
            id: $award->id,
            eventId: $award->event_id,
            tierIndex: $award->tier_index,
            label: $award->label,
            pointsRequired: $award->points_required,
            badgeUrl: $award->badge_url,
            badgeCount: $award->badge_count,
            earnedAt: $award->relationLoaded('playerBadges')
                ? $award->playerBadges->first()?->AwardDate
                : null,
        );
    }
}
