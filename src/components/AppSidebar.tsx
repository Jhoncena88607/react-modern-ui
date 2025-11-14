import { LayoutDashboard, Coins, Users, FileText, TrendingUp, BarChart3, Building2, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Token", url: "#", icon: Coins, subItems: [
    { title: "Token actions", url: "/token-actions" },
    { title: "Agents", url: "/agents" },
  ]},
  { title: "Investors", url: "#", icon: Users, subItems: [
    { title: "Investor List", url: "/investors" },
    { title: "Candidates", url: "/investors/candidates" },
    { title: "Position Reports", url: "/investors/position-reports" },
    { title: "Requests", url: "/investors/requests" },
  ]},
  { title: "Transactions", url: "/transactions", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Primary Market", url: "/primary-market", icon: TrendingUp },
  { title: "Secondary Market", url: "/secondary-market", icon: BarChart3 },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <div className="p-4 flex items-center gap-3 border-b border-border">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-amber-600" />
          </div>
          {open && (
            <div>
              <h2 className="font-semibold text-sm">USP</h2>
              <p className="text-xs text-muted-foreground">UrbanSpace Properties</p>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <>
                      <SidebarMenuButton asChild>
                        <div className="flex items-center cursor-default">
                          <item.icon className="w-4 h-4" />
                          {open && <span>{item.title}</span>}
                        </div>
                      </SidebarMenuButton>
                      {open && item.subItems.map((subItem) => (
                        <SidebarMenuButton key={subItem.title} asChild className="pl-8">
                          <NavLink to={subItem.url} activeClassName="bg-primary/10 text-primary font-medium">
                            <span className="text-sm">{subItem.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      ))}
                    </>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} end activeClassName="bg-primary/10 text-primary font-medium">
                        <item.icon className="w-4 h-4" />
                        {open && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
