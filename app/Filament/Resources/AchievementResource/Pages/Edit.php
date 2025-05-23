<?php

declare(strict_types=1);

namespace App\Filament\Resources\AchievementResource\Pages;

use App\Filament\Actions\ProcessUploadedImageAction;
use App\Filament\Concerns\HasFieldLevelAuthorization;
use App\Filament\Enums\ImageUploadType;
use App\Filament\Resources\AchievementResource;
use App\Models\Achievement;
use App\Platform\Actions\SyncEventAchievementMetadataAction;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;

class Edit extends EditRecord
{
    use HasFieldLevelAuthorization;

    protected static string $resource = AchievementResource::class;

    public function getBreadcrumbs(): array
    {
        /** @var Achievement $achievement */
        $achievement = $this->record;
        $game = $achievement->game;

        return [
            route('filament.admin.resources.achievements.index') => 'Achievements',
            route('filament.admin.resources.games.view', $game) => $game->title,
            route('filament.admin.resources.achievements.view', $achievement) => $achievement->title,
            'Edit',
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $this->authorizeFields($this->record, $data);

        if (isset($data['BadgeName'])) {
            $data['BadgeName'] = (new ProcessUploadedImageAction())->execute(
                $data['BadgeName'],
                ImageUploadType::AchievementBadge,
            );
        } else {
            // If no new image was uploaded, retain the existing image.
            unset($data['BadgeName']);
        }

        return $data;
    }

    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        $record->fill($data);

        /** @var Achievement $achievement */
        $achievement = $record;
        (new SyncEventAchievementMetadataAction())->execute($achievement);

        $record->save();

        return $record;
    }
}
