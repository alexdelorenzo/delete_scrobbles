// Replace DELETE_MATCHING with the text in the scrobbles you want to delete
const DELETE_MATCHING = "YOUR TEXT HERE";

// Change to true if you want to cycle through all pages to delete scrobbles
const ALL_PAGES = false;


const ROW_CLS = ".chartlist-row";
const DELETE_CLS = ".more-item--delete";
const PAGINATOR_CLS = ".pagination-page";
const NEXT_CLS = ".pagination-next";
const NEXT_LINK = `${NEXT_CLS} > a`;

const DEL_SLEEP = 600;
const PAGE_SLEEP = 5000;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function getRows() {
  const rowNodes = document.querySelectorAll(ROW_CLS);
  const rows = Array.from(rowNodes);

  return rows;
}


async function handleRow(row, match) {
  const text = row.textContent.toLowerCase();

  if (text.includes(match)) {
    const deleteBtn = row.querySelector(DELETE_CLS);
    deleteBtn.click();

    await sleep(DEL_SLEEP);
  }
}


async function deleteTracks(rows, match) {
  match = match.toLowerCase();

  for (const row of rows) {
    await handleRow(row, match);
  }
}


function nextPage() {
  const nextLink = document.querySelector(NEXT_LINK);

  if (nextLink !== null) {
    nextLink.click();
    return true;
  }

  return false;
}


async function main() {
  while (true) {
    const rows = getRows();
    await deleteTracks(rows, DELETE_MATCHING);

    if (ALL_PAGES && nextPage()) {
      await sleep(PAGE_SLEEP);
     } else {
      break;
     }
  }
}


await main();
