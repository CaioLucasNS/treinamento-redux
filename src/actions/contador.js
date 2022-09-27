import { INCREMENTAR, DECREMENTAR } from "../types/contador";

export const incrementarContador = () => ({
    type: INCREMENTAR,
});

export const decrementarContador = () => ({
    type: DECREMENTAR,
});
