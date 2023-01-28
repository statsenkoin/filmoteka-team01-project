// https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript

let maxPages = 9; //maximum number of page navigation links to display
let output;
let currentPage = 1;
let totalPages;
let paginationElem;

let targetPage;

/**
 * to export - marking up pagination line
 * @param {Number} page - the current active page
 * @param {Number} pages - the total number of pages
 * @param {DOM element} paginationRef - where to put pagination line
 */
export function updatePagination(page, pages, paginationRef) {
  paginationElem = paginationRef;
  currentPage = page;
  totalPages = pages;
  output = paginate(currentPage, totalPages);
  markupPagination(output, paginationElem);
}

/**
 *
 * @param {event} event click on button element
 * @returns currentPage
 */
export function getCurrentPage(event) {
  const targetPageText = event.target.textContent;

  if (!isNaN(Number(targetPageText))) targetPage = Number(targetPageText);
  if (targetPageText === '>') {
    targetPage = currentPage === totalPages ? totalPages : currentPage + 1;
  }
  if (targetPageText === '<') {
    targetPage = currentPage === 1 ? 1 : currentPage - 1;
  }
  if (targetPageText === ' ...') targetPage = currentPage - (maxPages - 4);
  if (targetPageText === '... ') targetPage = currentPage + (maxPages - 4);
  currentPage = targetPage;
  return currentPage;
}

/**
 *
 * @param {Number} currentPage - the current active page
 * @param {Number} totalPages - the total number of pages
 * @returns {Array} of text content for buttons in pagination line
 */
function paginate(currentPage, totalPages) {
  const output = [];
  let startPage;
  let endPage;
  const offsetPages = Math.floor(maxPages / 2);

  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= offsetPages) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + offsetPages >= totalPages) {
      startPage = totalPages - offsetPages * 2;
      endPage = totalPages;
    } else {
      startPage = currentPage - offsetPages;
      endPage = currentPage + offsetPages;
    }
  }
  for (let i = startPage; i <= endPage; i += 1) {
    output.push(i);
  }

  if (maxPages >= 9) {
    output.splice(0, 1, 1);
    output.splice(output.length - 1, 1, totalPages);
    if (currentPage - 1 > offsetPages && totalPages > maxPages) {
      output.splice(1, 1, ' ...');
    }
    if (currentPage + 1 + offsetPages < totalPages && totalPages > maxPages)
      output.splice(output.length - 2, 1, '... ');
  }
  return output;
}

/**
 * marking up pagination line
 * @param {Array} output - text content for buttons in pagination line output
 * @param {DOM element} paginationElem - where to put pagination line
 */
function markupPagination(output, paginationElem) {
  let markup = output.reduce((acc, item) => {
    const pagiClass =
      item === currentPage
        ? 'class="pagination-button pagination-button-current"'
        : 'class="pagination-button"';
    return (acc += `<button type="button" ${pagiClass}>${item}</button>`);
  }, ``);
  if (totalPages > maxPages) {
    if (currentPage !== 1) {
      markup =
        `<button type="button" class="pagination-button">&lt;</button>` +
        markup;
    }
    if (currentPage !== totalPages) {
      markup += `<button type="button" class="pagination-button">&gt;</button>`;
    }
  }

  paginationElem.innerHTML = '';
  paginationElem.insertAdjacentHTML('beforeend', markup);
}

window.addEventListener('resize', () => {
  const isMatch = window.matchMedia('(min-width: 768px)').matches;
  maxPages = isMatch ? 9 : 5;
  updatePagination(currentPage, totalPages, paginationElem);
});
