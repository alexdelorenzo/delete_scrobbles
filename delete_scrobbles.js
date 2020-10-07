// Replace DELETE_MATCHING with the text on the scrobbles you want to delete
const DELETE_MATCHING = "Your text here";

const ROW_CLS = ".chartlist-row";
const DELETE_CLS = ".more-item--delete";
const SLEEP_FOR = 600;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function get_rows() {
  const rows_nl = document.querySelectorAll(ROW_CLS);
  const rows = Array.from(rows_nl);

  return rows;
}

function handle_row(row, match) {
  const text = row.textContent.toLowerCase();

  if (text.includes(match)) {
    const delete_btn = row.querySelector(DELETE_CLS);
    delete_btn.click();
  }
}


async function delete_tracks(rows, match) {
  match = match.toLowerCase();

  for (const row of rows) {
    handle_row(row, match);

    await sleep(SLEEP_FOR);

  }
}


async function main() {
  const rows = get_rows();
  await delete_tracks(rows, DELETE_MATCHING);
}


await main();
