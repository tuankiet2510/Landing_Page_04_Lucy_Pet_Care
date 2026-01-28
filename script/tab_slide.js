var slide_tab_index = 1;

/*
function plus_Tab(n) {
  show_Tab_content((slide_tab_index += n));
}
  */
function current_Tab(n) {
  show_Tab_content((slide_tab_index = n));
}
function show_Tab_content(n) {
  var i;
  const tab_content_items = document.getElementsByClassName("tab__content-item");
  //const tab_item_btns = document.getElementsByClassName("tab__item-btn");
  const tab__items = document.getElementsByClassName("tab__item");
  /*
  if (n > tab_content_items.length) {
    slide_tab_index = 1;
  }
  if (n < 1) {
    slide_tab_index = tab_content_items.length;
  }
    */
  for (i = 0; i < tab_content_items.length; i++) {
    tab_content_items[i].style.display = "none";
  }
  for (i = 0; i < tab__items.length; i++) {
    tab__items[i].className = tab__items[i].className.replace(" tab__item--active", "");
  }
  tab_content_items[slide_tab_index - 1].style.display = "block";
  tab__items[slide_tab_index - 1].className += " tab__item--active";
}
export function initTabSlider() {
  show_Tab_content(slide_tab_index);
  // expose current_Tab so existing inline onclick="current_Tab(...)" still works
  window.current_Tab = current_Tab;
}
