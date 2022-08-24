let currentPageId = 'home-page';

function makeMenuLinkChangePage(linkId, pageToShow) {
    const pageLinkElement = document
        .getElementById(linkId);

    pageLinkElement.addEventListener('click', function () {

        document.getElementById(pageToShow).classList.remove('d-none');

        document.getElementById(currentPageId).classList.add('d-none');

        currentPageId = pageToShow;
    });
}

makeMenuLinkChangePage('home-page-link', 'home-page');
makeMenuLinkChangePage('about-page-link', 'about-page');
makeMenuLinkChangePage('news-page-link', 'news-page');

