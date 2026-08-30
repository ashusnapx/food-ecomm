import { useSyncExternalStore } from "react";

// No external store to watch: the value only ever changes at hydration.
const subscribe = () => () => {};
const onClient = () => true;
const onServer = () => false;

/**
 * False during server render and the first client render, true afterwards.
 *
 * Reveal animations use this to stay switched off until hydration. Framer
 * Motion serialises `initial` into the server HTML, so an unguarded reveal
 * ships a heading already translated out of view and leaves it there if the
 * observer never fires or scripting is off. Gating on hydration means the
 * server HTML is the finished state.
 *
 * useSyncExternalStore rather than a mount effect: it is the supported way to
 * read "are we hydrated" without calling setState from an effect.
 */
export function useArmed() {
  return useSyncExternalStore(subscribe, onClient, onServer);
}
