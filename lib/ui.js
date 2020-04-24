import {html, render} from '/lib/lit-html.bundled.js'

export const menuLabel = (label) => html`
        <div class="menu-label">${label}</div>
`;

export const menuItem = (label, url, option = {}) => {
  const icon = option.icon ? html`<i class="material-icons">${option.icon}</i>` : "";
  return html`
    <li><a href="${url}">${icon} ${label}</a></li>
  `;
}

export const menuList = (items) => {
  return html`
        <ul class="menu-list">
          ${items.map((item) => menuItem(...item))}
        </ul>
    `;
}

const siteDrawer = (menuItems) => {
  return html`
  <input id="drawer-trigger" type="checkbox">
  <label id="l-drawer-close" for="drawer-trigger"></label>
  <aside id="l-drawer">
    <section class="section">
      <nav class="menu">
        ${menuItems}
      </nav>
    </section>
  </aside>
  `;
}

export const drawerInit = (menuData, parentId=null) => {
  if (!parentId) {
    var base = document.createElement('div');
    parentId = 'drawer';
    base.id = parentId;
    document.body.appendChild(base);
  }

  render(siteDrawer(menuData), document.getElementById(parentId));

  document.querySelector('#drawer_switch').addEventListener('click', function() {
    document.getElementById("drawer-trigger").checked = true;
  });
}

