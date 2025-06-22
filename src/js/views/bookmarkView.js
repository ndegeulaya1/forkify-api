import View from "./view.js";
import icons from 'url:../../img/icons.svg';

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _mobileBookmarksElement = document.querySelector('.sidebar .bookmarks__list');

  // Initialize bookmark functionality
  init() {
    this._addHandlerBookmarks();
  }

  // Render bookmarks in both desktop and mobile views
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    
    this._clear();
    
    if (this._parentElement) {
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    if (this._mobileBookmarksElement) {
      this._mobileBookmarksElement.insertAdjacentHTML('afterbegin', markup);
    }
  }

  _clear() {
    if (this._parentElement) this._parentElement.innerHTML = '';
    if (this._mobileBookmarksElement) this._mobileBookmarksElement.innerHTML = '';
  }

  // Improved event handling
  _addHandlerBookmarks() {
    document.addEventListener('click', (e) => {
      const bookmarkBtn = e.target.closest('.nav__btn--bookmarks');
      if (!bookmarkBtn) return;
      
      e.preventDefault();
      e.stopPropagation(); // Prevent other handlers from interfering
      
      const bookmarksPanel = bookmarkBtn.closest('.nav__item').querySelector('.bookmarks');
      if (bookmarksPanel) {
        // Toggle visibility
        const isHidden = bookmarksPanel.classList.contains('hidden');
        
        // Hide all other bookmark panels first
        document.querySelectorAll('.bookmarks').forEach(panel => {
          panel.classList.add('hidden');
        });
        
        // Toggle current panel
        if (isHidden) {
          bookmarksPanel.classList.remove('hidden');
        } else {
          bookmarksPanel.classList.add('hidden');
        }
      }
    });
  }

  _generateMarkup() {
    return this._data.map(bookmark => this._returnHtmlPreview(bookmark)).join('');
  }

  _returnHtmlPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--bookmark" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated ${result.key ? '' : 'hidden'}">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>


            </div>
          </div>
        </a>
      </li>
    `;
  }
}

export default new BookmarkView();