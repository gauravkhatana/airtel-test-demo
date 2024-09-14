import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'airtel-map-temp';

  context = { expand: false };
  inputValue = false;
  isTableVisible = false;
  fault = false;
  searchActive = false;
  isAcsOffCanvas = false;
  isSidebarOpen = false;

  selectedTabIndex = 0;
  activeButton = 0;

  searchInput = '';
  globalSearchInput = '';
  toBeSearched = 'Type somthing to search';
  items = [''];
  filteredItems: string[] = [];

  constructor(private router: Router) {}

  filterSearch(filter: string) {
    if (this.searchInput.length < 1) {
      this.toBeSearched = 'Type somthing to search';
    } else {
      this.toBeSearched = this.searchInput;
    }

    // this.filteredItems = this.items.filter(item => item.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1);
    // if (this.filteredItems.length<1 ){
    //   this.filteredItems=["Nothing Found"];
    // }
  }

  // Check if the current route matches the provided path
  isActive(path: string): boolean {
    return this.router.url === path;
  }

  toogleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  tableVisible() {
    this.isTableVisible = true;
  }
  tableHidden() {
    this.isTableVisible = false;
  }

  toggleExpand(event: Event): void {
    this.isAcsOffCanvas = !this.isAcsOffCanvas;
    this.context.expand = !this.context.expand;
  }

  handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue = input.checked;
  }

  handleToggle(buttonNumber: number): void {
    this.activeButton = this.activeButton === buttonNumber ? 0 : buttonNumber;
  }

  fields = [
    { label: 'Node Name:' },
    { label: 'Alarm Type:' },
    { label: 'Severity Level:' },
    { label: 'SLA:' },
    { label: 'Alarm Status:' },
    { label: 'Occurred At:' },
    { label: 'Cleared On:' },
  ];

  // Sample effective nodes
  effectiveNodes = [{ name: '012367078_DSL' }];

  // Sample node items under each effective node
  nodeItems = [
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
    { name: '045215728380_wifi' },
    { name: '045215728381_wifi' },
    { name: '045215728382_wifi' },
  ];

  // Sample OLTs with nested ODFs and other details
  olts = [
    {
      name: 'OLT 1',
      hasDetails: true,
      odfs: [
        {
          name: 'ODF 1',
          hasDetails: true,
          fats: [
            { name: 'FAT 1', hasDetails: true, items: ['Item A', 'Item B'] },
            { name: 'FAT 2', hasDetails: false, items: [] },
          ],
        },
        {
          name: 'ODF 2',
          hasDetails: true,
          fats: [{ name: 'FAT 3', hasDetails: true, items: ['Item C'] }],
          otherOdFs: [],
        },
        {
          name: 'ODF 3',
          hasDetails: false,
          fats: [],
          otherOdFs: [],
        },
        {
          name: 'ODF 4',
          hasDetails: false,
          fats: [],
          otherOdFs: [],
        },
        {
          name: 'ODF 5',
          hasDetails: true,
          fats: [{ name: 'FAT 4', hasDetails: false, items: [] }],
          otherOdFs: [],
        },
      ],
    },
    {
      name: 'OLT 2',
      hasDetails: true,
      odfs: [],
    },
  ];

  toggleExpandTheme(event: Event) {
    this.context.expand = !this.context.expand;
  }

  toggleSidebar(event: Event) {
    document
      .getElementsByClassName('app')[0]
      .classList.toggle('app-sidebar-minified');
  }
}
