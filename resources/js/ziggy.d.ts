/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "demo": [],
    "tickets.index": [],
    "ranking.beaten-games": [],
    "message.create": [],
    "achievement.tickets": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        }
    ],
    "redirect": [],
    "developer.tickets": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "reporter.tickets": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "developer.tickets.resolved": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.tickets.created": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "developer.claims": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "developer.sets": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.compare-unlocks": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.completion-progress": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.tickets": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.claims": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "ticket.show": [
        {
            "name": "ticket",
            "required": true,
            "binding": "ID"
        }
    ],
    "message-thread.show": [
        {
            "name": "messageThread",
            "required": true,
            "binding": "id"
        }
    ],
    "claims.completed": [],
    "claims.active": [],
    "pulse": [],
    "api.hub.game.index": [
        {
            "name": "gameSet",
            "required": true,
            "binding": "id"
        }
    ],
    "api.hub.game.random": [
        {
            "name": "gameSet",
            "required": true,
            "binding": "id"
        }
    ],
    "api.game.index": [],
    "api.game.random": [],
    "api.system.game.index": [
        {
            "name": "systemId",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.system.game.random": [
        {
            "name": "systemId",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.dev-interest": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.hashes.index": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.top-achievers.index": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.suggestions.similar": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.index": [],
    "game.suggestions.personalized": [],
    "hub.show": [
        {
            "name": "gameSet",
            "required": true,
            "binding": "id"
        }
    ],
    "hub.index": [],
    "system.game.index": [
        {
            "name": "system",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.game.activity.show": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.random": [],
    "api.user.game.destroy": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.user.achievement.destroy": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.user.game-achievement-set.preference.update": [
        {
            "name": "gameAchievementSet",
            "required": true,
            "binding": "id"
        }
    ],
    "api.ticket.store": [],
    "player.games.resettable": [],
    "player.game.achievements.resettable": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "achievement.report-issue.index": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        }
    ],
    "achievement.tickets.create": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.achievement.comment.store": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.shortcode-body.preview": [],
    "api.forum-topic.store": [
        {
            "name": "category",
            "required": true,
            "binding": "id"
        },
        {
            "name": "forum",
            "required": true,
            "binding": "id"
        }
    ],
    "api.forum-topic-comment.update": [
        {
            "name": "comment",
            "required": true,
            "binding": "id"
        }
    ],
    "api.game.claims.comment.store": [
        {
            "name": "game",
            "required": true
        }
    ],
    "api.game.comment.store": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.game.hashes.comment.store": [
        {
            "name": "game",
            "required": true
        }
    ],
    "api.game.modification-comment.store": [
        {
            "name": "game",
            "required": true
        }
    ],
    "api.leaderboard.comment.store": [
        {
            "name": "leaderboard",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.user.comment.store": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.user.moderation-comment.store": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.achievement.comment.destroy": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.game.claims.comment.destroy": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.game.comment.destroy": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.game.hashes.comment.destroy": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.game.modification-comment.destroy": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.leaderboard.comment.destroy": [
        {
            "name": "leaderboard",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.user.comment.destroy": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.user.moderation-comment.destroy": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        },
        {
            "name": "comment",
            "required": true,
            "binding": "ID"
        }
    ],
    "api.message.store": [],
    "api.message-thread.destroy": [
        {
            "name": "messageThread",
            "required": true,
            "binding": "id"
        }
    ],
    "api.subscription.store": [
        {
            "name": "subjectType",
            "required": true
        },
        {
            "name": "subjectId",
            "required": true
        }
    ],
    "api.subscription.destroy": [
        {
            "name": "subjectType",
            "required": true
        },
        {
            "name": "subjectId",
            "required": true
        }
    ],
    "api.user-game-list.index": [],
    "api.user-game-list.random": [],
    "api.user-game-list.store": [
        {
            "name": "game",
            "required": true
        }
    ],
    "api.user-game-list.destroy": [
        {
            "name": "game",
            "required": true
        }
    ],
    "forum-topic.create": [
        {
            "name": "category",
            "required": true,
            "binding": "id"
        },
        {
            "name": "forum",
            "required": true,
            "binding": "id"
        }
    ],
    "forum-topic-comment.edit": [
        {
            "name": "comment",
            "required": true,
            "binding": "id"
        }
    ],
    "message-thread.index": [],
    "message-thread.show2": [
        {
            "name": "messageThread",
            "required": true,
            "binding": "id"
        }
    ],
    "settings.show": [],
    "achievement.comment.index": [
        {
            "name": "achievement",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.comment.index": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.modification-comment.index": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.claims.comment.index": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "game.hashes.comment.index": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "leaderboard.comment.index": [
        {
            "name": "leaderboard",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.comment.index": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.achievement-author.feed": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.moderation-comment.index": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "forum.recent-posts": [],
    "user.posts.index": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.achievement-checklist": [
        {
            "name": "user",
            "required": true,
            "binding": "ID"
        }
    ],
    "user.comment.destroyAll": [
        {
            "name": "user",
            "required": true
        }
    ],
    "game-list.play.index": [],
    "achievement-set-claim.create": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "achievement-set-claim.delete": [
        {
            "name": "game",
            "required": true,
            "binding": "ID"
        }
    ],
    "achievement-set-claim.update": [
        {
            "name": "claim",
            "required": true,
            "binding": "ID"
        }
    ],
    "message.store": [],
    "message-thread.destroy": [
        {
            "name": "messageThread",
            "required": true,
            "binding": "id"
        }
    ],
    "api.settings.preferences.suppress-mature-content-warning": [],
    "api.settings.profile.update": [],
    "api.settings.locale.update": [],
    "api.settings.preferences.update": [],
    "api.settings.password.update": [],
    "api.settings.email.update": [],
    "api.settings.name-change-request.store": [],
    "api.settings.keys.web.destroy": [],
    "api.settings.keys.connect.destroy": [],
    "api.active-player.index": [],
    "login": [],
    "logout": [],
    "password.confirmation": [],
    "password.confirm": [],
    "download.index": [],
    "user.show": [
        {
            "name": "user",
            "required": true
        }
    ],
    "achievement.show": [
        {
            "name": "achievement",
            "required": true
        },
        {
            "name": "slug",
            "required": false
        }
    ],
    "game.show": [
        {
            "name": "game",
            "required": true
        },
        {
            "name": "slug",
            "required": false
        }
    ],
    "leaderboard.show": [
        {
            "name": "leaderboard",
            "required": true
        },
        {
            "name": "slug",
            "required": false
        }
    ],
    "home": [],
    "contact": [],
    "rss.index": [],
    "terms": [],
    "user.permalink": [
        {
            "name": "hashId",
            "required": true
        }
    ],
    "api.user.delete-request.store": [],
    "api.user.delete-request.destroy": [],
    "api.user.avatar.store": [],
    "api.user.avatar.destroy": []
}
}
export {};
