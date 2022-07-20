export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";
export const RESET_CHECKBOXES = "RESET_CHECKBOXES";
export const TOGGLE_LIKE = "TOGGLE_LIKE"; 
export const TOGGLE_BOOKMARK = "TOGGLE_BOOKMARK";
export const GET_STORAGE_DATA = "GET_STORAGE_DATA";
export const TOGGLE_AUTH = "IS_AUTH";

export function toggleLike (cardId) {
    return {type: TOGGLE_LIKE, cardId}
}
export function toggleBookmark (cardId) {
    return {type: TOGGLE_BOOKMARK, cardId}
}
export function toggleCheckbox (genreId) {
    return {type: TOGGLE_CHECKBOX, genreId}
}
export function resetCheckboxes() {
    return {type: RESET_CHECKBOXES}
}
export function getStorageData() {
    return {type: GET_STORAGE_DATA}
}
export function toggleAuth() {
    return {type: TOGGLE_AUTH}
}