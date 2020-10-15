function displayNav(list, items) {
    list.classList.toggle('open');
    items.forEach(item => {
        item.classList.toggle('fade');
    })
}

export default displayNav;