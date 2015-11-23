export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';

export function receiveEntry(payload) {
  return { type: RECEIVE_ENTRY, payload };
}
