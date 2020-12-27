// Replace DELETE_MATCHING with the text on the scrobbles you want to delete
const DELETE_MATCHING = "whirr";

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


function get_rows() {
  const rows_nl = document.querySelectorAll(ROW_CLS);
  const rows = Array.from(rows_nl);

  return rows;
}


async function handle_row(row, match) {
  const text = row.textContent.toLowerCase();

  if (text.includes(match)) {
    const delete_btn = row.querySelector(DELETE_CLS);
    delete_btn.click();

    await sleep(DEL_SLEEP);
  }
}


async function delete_tracks(rows, match) {
  match = match.toLowerCase();

  for (const row of rows) {
    await handle_row(row, match);
  }
}


function next_page() {
  const next_link = document.querySelector(NEXT_LINK);

  if (next_link !== null) {
    next_link.click();
    return true;
  }

  return false;
}


async function main() {
  while (true) {
    const rows = get_rows();
    await delete_tracks(rows, DELETE_MATCHING);

  	if (ALL_PAGES && next_page()) {
  	  await sleep(PAGE_SLEEP);
  	  continue;
  	} else {
  	  break;
  	}
  }
}


await main();
