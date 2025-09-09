import { cache } from "@communityox/ox_lib/client";

onNet(`${cache.resource}:openNui`, () => {
  SetNuiFocus(true, true);

  SendNUIMessage({
    action: "setVisible",
    data: {
      visible: true,
    },
  });
});

RegisterNuiCallback("exit", (data: null, cb: (data: unknown) => void) => {
  SetNuiFocus(false, false);
  cb({});
});
