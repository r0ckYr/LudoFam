import { atom } from 'recoil';

export const codeState = atom<string>({
    key: 'codeState',
    default: '',
});

export const socketState = atom<WebSocket | null>({
    key: 'socketState',
    default: null,
});