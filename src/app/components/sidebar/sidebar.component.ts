import { Component } from '@angular/core';
interface ISidebarMenu {
  icon?: string;
  textField: { emoji?: string; text: string };
  subItems?: string[];
  isOpened?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  loopedLis: ISidebarMenu[] = [];
  openedSideNav: boolean = false;
  ngOnInit(): void {
    this.generateMenuItems();
  }
  openedSide() {
    this.openedSideNav = !this.openedSideNav;
  }

  generateMenuItems() {
    this.loopedLis = [
      {
        textField: {
          text: 'Link 1',
        },
      },
      {
        icon: 'fa-solid fa-chevron-down',
        textField: {
          emoji: '📚',
          text: 'Category 2',
        },
        subItems: ['Link 3', 'Link 4'],
        isOpened: false,
      },
      {
        icon: 'fa-solid fa-chevron-down',
        textField: {
          emoji: '👍',
          text: 'Category 3',
        },
        subItems: ['Link 5', 'Link 6'],
        isOpened: false,
      },
    ];
  }

  toggleCollapse(item: ISidebarMenu, index: number) {
    this.loopedLis.forEach((menuItem, index) => {
      if (menuItem !== item && index != 0) {
        menuItem.isOpened = false;
        menuItem.icon = 'fa-solid fa-chevron-down';
      }
    });
    if (index != 0) {
      item.isOpened = !item.isOpened;
      item.icon = item.isOpened
        ? 'fa-solid fa-chevron-up'
        : 'fa-solid fa-chevron-down';
    }
  }
}
