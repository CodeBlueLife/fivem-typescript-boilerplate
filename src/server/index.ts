import { addCommand, cache } from "@communityox/ox_lib/server";

addCommand("openNui", async (playerId) => {
  if (!playerId) return;

  emitNet(`${cache.resource}:openNui`, playerId);
});
