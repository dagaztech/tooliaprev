import { Component, OnInit } from '@angular/core';
import { MenuType, RouteInfo } from './sidebar.metadata';

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public ROUTES: RouteInfo[] = [
        { path: 'inicio', title: 'Inicio', menuType: MenuType.LEFT, icon: 'pe-7s-home' },
        { path: 'mis-audiencias', title: 'Mis Audiencias', menuType: MenuType.LEFT, icon:'pe-7s-graph2' },
        { path: 'analisis-territorial', title: 'Análisis Territorial', menuType: MenuType.LEFT, icon:'pe-7s-graph' },
        { path: 'analisis-competencia', title: 'Análisis de Competencia', menuType: MenuType.LEFT, icon:'pe-7s-way' },
        { path: 'usuarios', title: 'Gestión de Usuarios', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    ];
    public menuItems: any[];
    isCollapsed = true;
    constructor() {}
    ngOnInit() {
        this.menuItems = this.ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    }
    // public get menuIcon(): string {
    //     return this.isCollapsed ? '☰' : '✖';
    // }
    // public getMenuItemClasses(menuItem: any) {
    //     return {
    //         'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    //     };
    // }
}
