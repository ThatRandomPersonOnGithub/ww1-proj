// script.js
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');

    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        content.style.paddingRight = '220px';
    } else {
        sidebar.style.display = 'none';
        content.style.paddingRight = '20px'; // Adjust padding-right value if needed
    }
}

function showSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');

    sidebar.style.display = 'block';
    content.style.paddingRight = '220px';
}
