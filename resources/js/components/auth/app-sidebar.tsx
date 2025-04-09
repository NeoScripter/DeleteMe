import { NavMain } from '@/components/auth/nav-main';
import { NavUser } from '@/components/auth/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/lib/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, HouseIcon, FileStack, BookLock, Scale, ScrollText } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Панель управления',
        href: '/admin',
        icon: LayoutGrid,
    },
    {
        title: 'Главная страница',
        href: '/admin/home',
        icon: HouseIcon,
    },
    {
        title: 'Общие элементы',
        href: '/admin/shared',
        icon: FileStack,
    },
    {
        title: 'Политика конфиденциальности',
        href: '/admin/policy',
        icon: BookLock,
    },
    {
        title: 'Правила сервиса',
        href: '/admin/rules',
        icon: Scale,
    },
    {
        title: 'Пользовательское соглашение',
        href: '/admin/agreement',
        icon: ScrollText,
    },
];

/* const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
]; */

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={route('admin.dashboard')} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
