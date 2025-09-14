import { Greetings } from '@common/index';
import { addCommand, cache } from "@communityox/ox_lib/server";

Greetings();

addCommand("openNui", async (playerId) => {
  if (!playerId) return;

  emitNet(`${cache.resource}:openNui`, playerId);
});
