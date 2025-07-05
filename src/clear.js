export function clearDOM() {
    let content = document.querySelector('.content')
    content.innerHTML = "";
    content.id = "";
}