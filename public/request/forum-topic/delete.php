<?php

use App\Enums\Permissions;
use App\Models\ForumTopic;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;

if (!authenticateFromCookie($username, $permissions, $userDetails, Permissions::Registered)) {
    return back()->withErrors(__('legacy.error.permissions'));
}

$input = Validator::validate(Arr::wrap(request()->post()), [
    'topic' => 'required|integer|exists:ForumTopic,ID',
]);

/** @var ForumTopic $topic */
$topic = ForumTopic::find($input['topic']);
$topic->delete();

return back()->with('success', __('legacy.success.delete'));
