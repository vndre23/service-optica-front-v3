import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  listItems = [
    {
      label:"Dashboard",
      icon: "fa-solid fa-chart-pie",
      router: ''
    },
    {
      label: "Products",
      icon: "fa-solid fa-briefcase",
      router: ''
    },
    {
      label: "Category",
      icon: "fa-solid fa-tags",
      router: ''
    },
    {
      label: "Workers",
      icon: "fa-solid fa-people-group",
      router: ''
    },
    {
      label: "Customers",
      icon: "fa-solid fa-users",
      router: 'customers/list'
    },
    {
      label: "Work Order",
      icon: "fa-solid fa-receipt",
      router: ''
    },
    {
      label: "Prescription",
      icon: "fa-solid fa-eye",
      router: ''
    }
  ];
  @Input()
  isViewSidebar = true;
}
