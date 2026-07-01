import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts"
import { toast } from "sonner"
import {
  CheckIcon,
  ChevronRightIcon,
  CopyIcon,
  DownloadIcon,
  FileTextIcon,
  HomeIcon,
  InboxIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  SparklesIcon,
  StarIcon,
  TerminalIcon,
  TrashIcon,
  UserIcon,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  AttachmentTrigger,
} from "@/components/ui/attachment"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Combobox,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxChip,
  ComboboxContent,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DirectionProvider, useDirection } from "@/components/ui/direction"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Label } from "@/components/ui/label"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  catalogGroups,
  componentItems,
  componentNames,
  getComponentItemByStoryName,
  getDependencyCount,
  getFileTarget,
  getStorybookManagerHref,
  type RegistryItem,
} from "@/lib/registry-data"
import { cn } from "@/lib/utils"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

function DependencyTags({
  values,
  emptyLabel,
}: {
  values?: string[]
  emptyLabel: string
}) {
  if (!values?.length) {
    return <span className="text-xs text-muted-foreground">{emptyLabel}</span>
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {values.map((value) => (
        <code
          key={value}
          className="rounded border bg-muted px-1.5 py-0.5 text-xs"
        >
          {value}
        </code>
      ))}
    </div>
  )
}

function ComponentStoryLayout({
  children,
  item,
}: {
  children: React.ReactNode
  item?: RegistryItem
}) {
  if (!item) {
    return (
      <main className="min-h-svh bg-background p-6 text-foreground">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>
    )
  }

  return (
    <main className="min-h-svh bg-background p-6 text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <header className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex min-w-0 flex-col gap-2">
            <Badge className="w-fit" variant="secondary">
              {item.type}
            </Badge>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold tracking-normal">
                {item.title}
              </h1>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-start gap-2">
            <Button asChild size="sm">
              <a href={`/r/${item.name}.json`}>Registry JSON</a>
            </Button>
            <Button asChild size="sm" variant="outline">
              <a href={getStorybookManagerHref(item)} target="_top">
                Story link
              </a>
            </Button>
          </div>
        </header>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="min-w-0 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold tracking-normal">
                Live example
              </h2>
              <Badge variant="outline">{item.name}</Badge>
            </div>
            {children}
          </section>

          <aside className="grid content-start gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Registry Details</CardTitle>
                <CardDescription>Published item metadata.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm">
                <div className="grid gap-1">
                  <span className="text-xs font-medium uppercase text-muted-foreground">
                    Target
                  </span>
                  <code className="rounded bg-muted px-2 py-1 text-xs">
                    {getFileTarget(item)}
                  </code>
                </div>
                <div className="grid gap-1">
                  <span className="text-xs font-medium uppercase text-muted-foreground">
                    Package dependencies
                  </span>
                  <DependencyTags
                    emptyLabel="No package dependencies"
                    values={item.dependencies}
                  />
                </div>
                <div className="grid gap-1">
                  <span className="text-xs font-medium uppercase text-muted-foreground">
                    Registry dependencies
                  </span>
                  <DependencyTags
                    emptyLabel="No registry dependencies"
                    values={item.registryDependencies}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Install</CardTitle>
                <CardDescription>Local registry alias command.</CardDescription>
              </CardHeader>
              <CardContent>
                <code className="block overflow-x-auto rounded bg-muted p-3 text-xs">
                  npx shadcn@latest add @ec/{item.name}
                </code>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  )
}

const meta = {
  title: "Components",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story, context) => {
      if (context.name === "Overview") {
        return <Story />
      }

      return (
        <ComponentStoryLayout item={getComponentItemByStoryName(context.name)}>
          <Story />
        </ComponentStoryLayout>
      )
    },
  ],
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function StorySurface({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex min-h-80 w-full items-center justify-center rounded-lg border bg-card p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  )
}

function Stack({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("flex flex-col gap-4", className)}>{children}</div>
}

function DirectionValue() {
  const direction = useDirection()
  return <Badge variant="secondary">direction: {direction}</Badge>
}

function ComboboxExample() {
  const teams = ["Design", "Engineering", "Support"]

  return (
    <Combobox defaultValue="Design" items={teams}>
      <ComboboxInput className="w-64" placeholder="Select a team" showClear>
        <ComboboxValue />
        <ComboboxTrigger />
      </ComboboxInput>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxGroup>
            <ComboboxLabel>Teams</ComboboxLabel>
            <ComboboxCollection>
              {(team) => (
                <ComboboxItem key={team} value={team}>
                  {team}
                </ComboboxItem>
              )}
            </ComboboxCollection>
          </ComboboxGroup>
          <ComboboxSeparator />
          <ComboboxEmpty>No teams found.</ComboboxEmpty>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function ComboboxChipsExample() {
  return (
    <Combobox multiple defaultValue={["react", "tailwind"]}>
      <ComboboxChips className="w-80">
        <ComboboxChip>React</ComboboxChip>
        <ComboboxChip>Tailwind</ComboboxChip>
        <ComboboxChipsInput placeholder="Add tag" />
      </ComboboxChips>
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="storybook">Storybook</ComboboxItem>
          <ComboboxItem value="registry">Registry</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

function SidebarExample() {
  return (
    <SidebarProvider className="min-h-[360px] overflow-hidden rounded-lg border">
      <Sidebar collapsible="none">
        <SidebarHeader>
          <SidebarInput placeholder="Search" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add item">
              <PlusIcon />
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <HomeIcon />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                  <SidebarMenuAction>
                    <MoreHorizontalIcon />
                  </SidebarMenuAction>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <InboxIcon />
                    <span>Inbox</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>8</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SettingsIcon />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton />
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton href="#">Project alpha</SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <UserIcon />
                <span>Schalk</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="min-w-0">
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Registry preview</span>
        </header>
        <div className="p-4 text-sm text-muted-foreground">
          Sidebar inset content.
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export const Overview: Story = {
  render: () => (
    <main className="min-h-svh bg-background p-6 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-normal">
            Components
          </h1>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            The registry publishes {componentNames.length} shadcn/ui component
            story pages. Each component page includes a live example, install
            command, package dependencies, registry dependencies, and target
            file metadata from the local registry.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Component Stories</CardTitle>
              <CardDescription>Dedicated UI story pages.</CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">
              {componentItems.length}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Groups</CardTitle>
              <CardDescription>Catalog navigation sections.</CardDescription>
            </CardHeader>
            <CardContent className="text-3xl font-semibold">
              {catalogGroups.length}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Registry Output</CardTitle>
              <CardDescription>Static JSON endpoint prefix.</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="rounded bg-muted px-2 py-1 text-sm">
                /r/{"{name}"}.json
              </code>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          {catalogGroups.map((group) => (
            <section key={group.title} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-semibold tracking-normal">
                  {group.title}
                </h2>
                <p className="text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <Card key={item.name}>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>
                        <code>{item.name}</code>
                      </CardDescription>
                      <CardAction>
                        <Badge variant="secondary">
                          {getDependencyCount(item)} deps
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardContent className="grid gap-3 text-sm">
                      <p className="leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="grid gap-1">
                        <span className="text-xs font-medium uppercase text-muted-foreground">
                          Target
                        </span>
                        <code className="truncate rounded bg-muted px-2 py-1 text-xs">
                          {getFileTarget(item)}
                        </code>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                      <Button asChild size="sm" variant="outline">
                        <a href={`/r/${item.name}.json`}>JSON</a>
                      </Button>
                      <Button asChild size="sm" variant="ghost">
                        <a href={getStorybookManagerHref(item)} target="_top">
                          Story
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  ),
}

export const AccordionStory: Story = {
  name: "Accordion",
  render: () => (
    <StorySurface>
      <Accordion
        className="w-full max-w-md"
        type="single"
        collapsible
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Registry output</AccordionTrigger>
          <AccordionContent>
            Static JSON is generated into public/r by shadcn build.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Install target</AccordionTrigger>
          <AccordionContent>
            Component files target the consumer project&apos;s configured UI
            directory.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </StorySurface>
  ),
}

export const AlertDialogStory: Story = {
  name: "Alert Dialog",
  render: () => (
    <StorySurface>
      <AlertDialog defaultOpen>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete item</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <TrashIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete registry item?</AlertDialogTitle>
            <AlertDialogDescription>
              This action is shown as a destructive confirmation pattern.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </StorySurface>
  ),
}

export const AlertStory: Story = {
  name: "Alert",
  render: () => (
    <StorySurface>
      <Alert className="max-w-lg">
        <TerminalIcon />
        <AlertTitle>Registry build complete</AlertTitle>
        <AlertDescription>
          Generated JSON is available under public/r.
        </AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">
            View
          </Button>
        </AlertAction>
      </Alert>
    </StorySurface>
  ),
}

export const AspectRatioStory: Story = {
  name: "Aspect Ratio",
  render: () => (
    <StorySurface>
      <AspectRatio className="w-full max-w-lg overflow-hidden rounded-lg border" ratio={16 / 9}>
        <div className="flex size-full items-center justify-center bg-muted text-sm text-muted-foreground">
          16:9 preview
        </div>
      </AspectRatio>
    </StorySurface>
  ),
}

export const AttachmentStory: Story = {
  name: "Attachment",
  render: () => (
    <StorySurface>
      <AttachmentGroup className="max-w-xl">
        <Attachment>
          <AttachmentMedia>
            <FileTextIcon />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>registry.json</AttachmentTitle>
            <AttachmentDescription>4 KB</AttachmentDescription>
          </AttachmentContent>
          <AttachmentActions>
            <AttachmentAction aria-label="Download">
              <DownloadIcon />
            </AttachmentAction>
          </AttachmentActions>
          <AttachmentTrigger aria-label="Open registry file" />
        </Attachment>
        <Attachment state="uploading">
          <AttachmentMedia>
            <Spinner />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>button.json</AttachmentTitle>
            <AttachmentDescription>Uploading</AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      </AttachmentGroup>
    </StorySurface>
  ),
}

export const AvatarStory: Story = {
  name: "Avatar",
  render: () => (
    <StorySurface>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>EC</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>12</AvatarGroupCount>
      </AvatarGroup>
    </StorySurface>
  ),
}

export const BadgeStory: Story = {
  name: "Badge",
  render: () => (
    <StorySurface>
      <div className="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
    </StorySurface>
  ),
}

export const BreadcrumbStory: Story = {
  name: "Breadcrumb",
  render: () => (
    <StorySurface>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Registry</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Components</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </StorySurface>
  ),
}

export const BubbleStory: Story = {
  name: "Bubble",
  render: () => (
    <StorySurface>
      <BubbleGroup className="w-full max-w-md">
        <Bubble>
          <BubbleContent>Can the registry publish Button?</BubbleContent>
        </Bubble>
        <Bubble align="end" variant="secondary">
          <BubbleContent>Yes, it builds to button.json.</BubbleContent>
          <BubbleReactions>✓</BubbleReactions>
        </Bubble>
      </BubbleGroup>
    </StorySurface>
  ),
}

export const ButtonGroupStory: Story = {
  name: "Button Group",
  render: () => (
    <StorySurface>
      <ButtonGroup>
        <Button variant="outline">Copy</Button>
        <ButtonGroupSeparator />
        <ButtonGroupText>
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </ButtonGroupText>
      </ButtonGroup>
    </StorySurface>
  ),
}

export const ButtonStory: Story = {
  name: "Button",
  render: () => (
    <StorySurface>
      <div className="flex flex-wrap gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="icon" aria-label="Add item">
          <PlusIcon />
        </Button>
      </div>
    </StorySurface>
  ),
}

export const CalendarStory: Story = {
  name: "Calendar",
  render: () => (
    <StorySurface>
      <Calendar
        mode="single"
        defaultMonth={new Date(2026, 5, 1)}
        selected={new Date(2026, 5, 30)}
      />
    </StorySurface>
  ),
}

export const CardStory: Story = {
  name: "Card",
  render: () => (
    <StorySurface>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Registry item</CardTitle>
          <CardDescription>button.json</CardDescription>
          <CardAction>
            <Badge variant="secondary">UI</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Includes source files, dependencies, and target aliases.
        </CardContent>
        <CardFooter>
          <Button size="sm">Install</Button>
        </CardFooter>
      </Card>
    </StorySurface>
  ),
}

export const CarouselStory: Story = {
  name: "Carousel",
  render: () => (
    <StorySurface>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {[1, 2, 3].map((item) => (
            <CarouselItem key={item}>
              <div className="flex aspect-square items-center justify-center rounded-lg border bg-muted text-4xl font-semibold">
                {item}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </StorySurface>
  ),
}

export const ChartStory: Story = {
  name: "Chart",
  render: () => (
    <StorySurface>
      <ChartContainer className="h-72 w-full max-w-xl" config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="month"
            tickLine={false}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </StorySurface>
  ),
}

export const CheckboxStory: Story = {
  name: "Checkbox",
  render: () => (
    <StorySurface>
      <Field orientation="horizontal">
        <Checkbox id="storybook-checkbox" defaultChecked />
        <FieldLabel htmlFor="storybook-checkbox">Publish to registry</FieldLabel>
      </Field>
    </StorySurface>
  ),
}

export const CollapsibleStory: Story = {
  name: "Collapsible",
  render: () => (
    <StorySurface>
      <Collapsible className="w-full max-w-md" defaultOpen>
        <CollapsibleTrigger asChild>
          <Button className="w-full justify-between" variant="outline">
            Build commands
            <ChevronRightIcon />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-3 rounded-lg border bg-muted p-3">
          <code className="text-sm">npm run build:registry</code>
        </CollapsibleContent>
      </Collapsible>
    </StorySurface>
  ),
}

export const ComboboxStory: Story = {
  name: "Combobox",
  render: () => (
    <StorySurface>
      <Stack>
        <ComboboxExample />
        <ComboboxChipsExample />
      </Stack>
    </StorySurface>
  ),
}

export const CommandStory: Story = {
  name: "Command",
  render: () => (
    <StorySurface className="items-start gap-4">
      <Command className="w-full max-w-md border">
        <CommandInput placeholder="Search components" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Components">
            <CommandItem>
              <Button className="size-5" size="icon-sm" variant="ghost">
                <CopyIcon />
              </Button>
              Button
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SparklesIcon />
              Theme
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
      <CommandDialog defaultOpen title="Registry command palette">
        <Command>
          <CommandInput placeholder="Search registry actions" />
          <CommandList>
            <CommandGroup heading="Actions">
              <CommandItem data-checked>
                <CheckIcon />
                Validate registry
              </CommandItem>
              <CommandItem>
                <DownloadIcon />
                Build static JSON
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </StorySurface>
  ),
}

export const ContextMenuStory: Story = {
  name: "Context Menu",
  render: () => (
    <StorySurface>
      <ContextMenu open modal={false}>
        <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-lg border border-dashed text-sm">
          Right click
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>Registry item</ContextMenuLabel>
          <ContextMenuGroup>
            <ContextMenuItem>
              Copy URL
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuCheckboxItem checked>
              Include dependencies
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="json">
            <ContextMenuRadioItem value="json">JSON</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSub defaultOpen>
            <ContextMenuSubTrigger>More</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>View source</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    </StorySurface>
  ),
}

export const DialogStory: Story = {
  name: "Dialog",
  render: () => (
    <StorySurface>
      <Dialog defaultOpen>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Registry namespace</DialogTitle>
            <DialogDescription>
              Configure a namespace once and install items by name.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </StorySurface>
  ),
}

export const DirectionStory: Story = {
  name: "Direction",
  render: () => (
    <StorySurface>
      <DirectionProvider dir="rtl" direction="rtl">
        <Stack className="items-center">
          <DirectionValue />
          <Button variant="outline">RTL action</Button>
        </Stack>
      </DirectionProvider>
    </StorySurface>
  ),
}

export const DrawerStory: Story = {
  name: "Drawer",
  render: () => (
    <StorySurface>
      <Drawer defaultOpen direction="right">
        <DrawerTrigger asChild>
          <Button>Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Component registry</DrawerTitle>
            <DrawerDescription>
              Drawer content follows the same theme tokens.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </StorySurface>
  ),
}

export const DropdownMenuStory: Story = {
  name: "Dropdown Menu",
  render: () => (
    <StorySurface>
      <DropdownMenu defaultOpen modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Copy
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem checked>
              Include source
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="npm">
            <DropdownMenuRadioItem value="npm">npm</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSub defaultOpen>
            <DropdownMenuSubTrigger>Advanced</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Validate</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </StorySurface>
  ),
}

export const EmptyStory: Story = {
  name: "Empty",
  render: () => (
    <StorySurface>
      <Empty className="max-w-md border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <InboxIcon />
          </EmptyMedia>
          <EmptyTitle>No custom blocks yet</EmptyTitle>
          <EmptyDescription>
            Add blocks when the registry needs app-level compositions.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">Create block</Button>
        </EmptyContent>
      </Empty>
    </StorySurface>
  ),
}

export const FieldStory: Story = {
  name: "Field",
  render: () => (
    <StorySurface>
      <FieldSet className="w-full max-w-md">
        <FieldLegend>Registry settings</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="registry-name">Name</FieldLabel>
            <Input id="registry-name" defaultValue="ec-registry" />
            <FieldDescription>Used by the generated registry index.</FieldDescription>
          </Field>
          <FieldSeparator>Output</FieldSeparator>
          <Field orientation="horizontal" data-invalid>
            <FieldContent>
              <FieldTitle>Homepage</FieldTitle>
              <FieldDescription>Update before publishing.</FieldDescription>
              <FieldError>Replace the placeholder GitHub Pages URL.</FieldError>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </StorySurface>
  ),
}

export const HoverCardStory: Story = {
  name: "Hover Card",
  render: () => (
    <StorySurface>
      <HoverCard defaultOpen>
        <HoverCardTrigger asChild>
          <Button variant="link">@ec-registry/button</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <p className="text-sm font-medium">Button</p>
            <p className="text-sm text-muted-foreground">
              Installs to the configured shadcn UI directory.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </StorySurface>
  ),
}

export const InputGroupStory: Story = {
  name: "Input Group",
  render: () => (
    <StorySurface>
      <Stack className="w-full max-w-md">
        <InputGroup>
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search registry items" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Notes</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea placeholder="Describe the component change" />
        </InputGroup>
      </Stack>
    </StorySurface>
  ),
}

export const InputOTPStory: Story = {
  name: "Input OTP",
  render: () => (
    <StorySurface>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </StorySurface>
  ),
}

export const InputStory: Story = {
  name: "Input",
  render: () => (
    <StorySurface>
      <Stack className="w-full max-w-sm">
        <Input placeholder="Component name" defaultValue="button" />
        <Input aria-invalid placeholder="Invalid registry URL" />
        <Input disabled placeholder="Disabled input" />
      </Stack>
    </StorySurface>
  ),
}

export const ItemStory: Story = {
  name: "Item",
  render: () => (
    <StorySurface>
      <ItemGroup className="max-w-lg">
        <Item variant="outline">
          <ItemHeader>
            <ItemTitle>button.json</ItemTitle>
            <Badge variant="secondary">registry:ui</Badge>
          </ItemHeader>
          <ItemMedia variant="icon">
            <FileTextIcon />
          </ItemMedia>
          <ItemContent>
            <ItemDescription>
              Source file, dependencies, and target path.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">View</Button>
          </ItemActions>
          <ItemFooter>
            <span className="text-xs text-muted-foreground">public/r</span>
          </ItemFooter>
        </Item>
        <ItemSeparator />
      </ItemGroup>
    </StorySurface>
  ),
}

export const KbdStory: Story = {
  name: "Kbd",
  render: () => (
    <StorySurface>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </StorySurface>
  ),
}

export const LabelStory: Story = {
  name: "Label",
  render: () => (
    <StorySurface>
      <div className="grid w-full max-w-sm gap-2">
        <Label htmlFor="label-input">Registry name</Label>
        <Input id="label-input" defaultValue="ec-registry" />
      </div>
    </StorySurface>
  ),
}

export const MarkerStory: Story = {
  name: "Marker",
  render: () => (
    <StorySurface>
      <Stack className="w-full max-w-md">
        <Marker>
          <MarkerIcon>
            <CheckIcon />
          </MarkerIcon>
          <MarkerContent>Registry JSON validated.</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>Components</MarkerContent>
        </Marker>
      </Stack>
    </StorySurface>
  ),
}

export const MenubarStory: Story = {
  name: "Menubar",
  render: () => (
    <StorySurface>
      <Menubar defaultValue="registry">
        <MenubarMenu value="registry">
          <MenubarTrigger>Registry</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Build</MenubarLabel>
            <MenubarGroup>
              <MenubarItem>
                Validate
                <MenubarShortcut>⌘V</MenubarShortcut>
              </MenubarItem>
              <MenubarCheckboxItem checked>Static output</MenubarCheckboxItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarRadioGroup value="npm">
              <MenubarRadioItem value="npm">npm</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSub defaultOpen>
              <MenubarSubTrigger>More</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Open output</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </StorySurface>
  ),
}

export const MessageScrollerStory: Story = {
  name: "Message Scroller",
  render: () => (
    <StorySurface>
      <MessageScrollerProvider>
        <MessageScroller className="h-72 w-full max-w-md rounded-lg border">
          <MessageScrollerViewport>
            <MessageScrollerContent className="p-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <MessageScrollerItem key={item}>
                  <Bubble variant={item % 2 ? "muted" : "secondary"}>
                    <BubbleContent>Registry event {item}</BubbleContent>
                  </Bubble>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>
    </StorySurface>
  ),
}

export const MessageStory: Story = {
  name: "Message",
  render: () => (
    <StorySurface>
      <MessageGroup className="w-full max-w-md">
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <MessageHeader>Registry</MessageHeader>
            <Bubble>
              <BubbleContent>Build completed.</BubbleContent>
            </Bubble>
            <MessageFooter>Now serving public/r.</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>
    </StorySurface>
  ),
}

export const NativeSelectStory: Story = {
  name: "Native Select",
  render: () => (
    <StorySurface>
      <NativeSelect defaultValue="button">
        <NativeSelectOptGroup label="Components">
          <NativeSelectOption value="button">Button</NativeSelectOption>
          <NativeSelectOption value="input">Input</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </StorySurface>
  ),
}

export const NavigationMenuStory: Story = {
  name: "Navigation Menu",
  render: () => (
    <StorySurface>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Registry</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-80 gap-2 p-4">
                <NavigationMenuLink className="rounded-md p-3 hover:bg-muted" href="#">
                  Components
                </NavigationMenuLink>
                <NavigationMenuLink className="rounded-md p-3 hover:bg-muted" href="#">
                  Theme
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </StorySurface>
  ),
}

export const PaginationStory: Story = {
  name: "Pagination",
  render: () => (
    <StorySurface>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </StorySurface>
  ),
}

export const PopoverStory: Story = {
  name: "Popover",
  render: () => (
    <StorySurface>
      <Popover defaultOpen>
        <PopoverAnchor className="sr-only" />
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Registry URL</PopoverTitle>
            <PopoverDescription>
              Use the public GitHub Pages URL once published.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </StorySurface>
  ),
}

export const ProgressStory: Story = {
  name: "Progress",
  render: () => (
    <StorySurface>
      <Stack className="w-full max-w-sm">
        <Progress value={28} />
        <Progress value={68} />
        <Progress value={100} />
      </Stack>
    </StorySurface>
  ),
}

export const RadioGroupStory: Story = {
  name: "Radio Group",
  render: () => (
    <StorySurface>
      <RadioGroup className="grid gap-3" defaultValue="npm">
        <Field orientation="horizontal">
          <RadioGroupItem id="radio-npm" value="npm" />
          <FieldLabel htmlFor="radio-npm">npm</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="radio-static" value="static" />
          <FieldLabel htmlFor="radio-static">Static JSON</FieldLabel>
        </Field>
      </RadioGroup>
    </StorySurface>
  ),
}

export const ResizableStory: Story = {
  name: "Resizable",
  render: () => (
    <StorySurface>
      <ResizablePanelGroup
        className="min-h-48 max-w-xl rounded-lg border"
        orientation="horizontal"
      >
        <ResizablePanel defaultSize={35} className="p-4">
          Source
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} className="p-4">
          Output
        </ResizablePanel>
      </ResizablePanelGroup>
    </StorySurface>
  ),
}

export const ScrollAreaStory: Story = {
  name: "Scroll Area",
  render: () => (
    <StorySurface>
      <ScrollArea className="h-56 w-72 rounded-lg border">
        <div className="space-y-3 p-4">
          {componentNames.slice(0, 20).map((name) => (
            <div key={name} className="text-sm">{name}</div>
          ))}
        </div>
        <ScrollBar />
      </ScrollArea>
    </StorySurface>
  ),
}

export const SelectStory: Story = {
  name: "Select",
  render: () => (
    <StorySurface>
      <Select defaultValue="button" open>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Select component" />
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton />
          <SelectGroup>
            <SelectLabel>Components</SelectLabel>
            <SelectItem value="button">Button</SelectItem>
            <SelectItem value="card">Card</SelectItem>
            <SelectSeparator />
            <SelectItem value="table">Table</SelectItem>
          </SelectGroup>
          <SelectScrollDownButton />
        </SelectContent>
      </Select>
    </StorySurface>
  ),
}

export const SeparatorStory: Story = {
  name: "Separator",
  render: () => (
    <StorySurface>
      <div className="flex w-full max-w-sm items-center gap-4">
        <div className="flex-1">
          <div className="text-sm font-medium">Registry</div>
          <Separator className="my-4" />
          <div className="text-sm text-muted-foreground">
            Components and hooks
          </div>
        </div>
        <Separator className="h-16" orientation="vertical" />
        <Badge variant="outline">62 items</Badge>
      </div>
    </StorySurface>
  ),
}

export const SheetStory: Story = {
  name: "Sheet",
  render: () => (
    <StorySurface>
      <Sheet defaultOpen>
        <SheetTrigger asChild>
          <Button>Open sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Registry item</SheetTitle>
            <SheetDescription>
              Inspect generated files before publishing.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </StorySurface>
  ),
}

export const SidebarStory: Story = {
  name: "Sidebar",
  render: () => (
    <StorySurface className="block p-0">
      <SidebarExample />
    </StorySurface>
  ),
}

export const SkeletonStory: Story = {
  name: "Skeleton",
  render: () => (
    <StorySurface>
      <div className="flex w-full max-w-sm items-center gap-3">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    </StorySurface>
  ),
}

export const SliderStory: Story = {
  name: "Slider",
  render: () => (
    <StorySurface>
      <Stack className="w-full max-w-sm">
        <Slider defaultValue={[45]} max={100} />
        <Slider defaultValue={[20, 80]} max={100} />
        <Slider defaultValue={[65]} disabled max={100} />
      </Stack>
    </StorySurface>
  ),
}

export const SonnerStory: Story = {
  name: "Sonner",
  render: () => (
    <StorySurface>
      <Button onClick={() => toast("Registry item copied")}>Show toast</Button>
      <Toaster />
    </StorySurface>
  ),
}

export const SpinnerStory: Story = {
  name: "Spinner",
  render: () => (
    <StorySurface>
      <Spinner className="size-8" />
    </StorySurface>
  ),
}

export const SwitchStory: Story = {
  name: "Switch",
  render: () => (
    <StorySurface>
      <Field orientation="horizontal">
        <Switch id="switch-publish" defaultChecked />
        <FieldLabel htmlFor="switch-publish">Publish registry output</FieldLabel>
      </Field>
    </StorySurface>
  ),
}

export const TableStory: Story = {
  name: "Table",
  render: () => (
    <StorySurface>
      <Table className="max-w-xl">
        <TableCaption>Generated registry files.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Files</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>button</TableCell>
            <TableCell>registry:ui</TableCell>
            <TableCell className="text-right">1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>use-mobile</TableCell>
            <TableCell>registry:hook</TableCell>
            <TableCell className="text-right">1</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">62</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </StorySurface>
  ),
}

export const TabsStory: Story = {
  name: "Tabs",
  render: () => (
    <StorySurface>
      <Tabs className="w-full max-w-md" defaultValue="components">
        <TabsList>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
        </TabsList>
        <TabsContent value="components">
          <Card>
            <CardContent className="p-4 text-sm">
              Component registry items.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="theme">
          <Card>
            <CardContent className="p-4 text-sm">Theme tokens.</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </StorySurface>
  ),
}

export const TextareaStory: Story = {
  name: "Textarea",
  render: () => (
    <StorySurface>
      <Stack className="w-full max-w-md">
        <Textarea defaultValue="Document component behavior and visual states." />
        <Textarea aria-invalid placeholder="Invalid notes" />
        <Textarea disabled placeholder="Disabled textarea" />
      </Stack>
    </StorySurface>
  ),
}

export const ToggleGroupStory: Story = {
  name: "Toggle Group",
  render: () => (
    <StorySurface>
      <Stack>
        <ToggleGroup defaultValue={["components"]} type="multiple">
          <ToggleGroupItem value="theme">Theme</ToggleGroupItem>
          <ToggleGroupItem value="components">Components</ToggleGroupItem>
          <ToggleGroupItem value="registry">Registry</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup defaultValue="left" type="single">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right" disabled>
            Right
          </ToggleGroupItem>
        </ToggleGroup>
      </Stack>
    </StorySurface>
  ),
}

export const ToggleStory: Story = {
  name: "Toggle",
  render: () => (
    <StorySurface>
      <div className="flex gap-2">
        <Toggle aria-label="Toggle starred" defaultPressed>
          <StarIcon />
        </Toggle>
        <Toggle aria-label="Toggle copy">
          <CopyIcon />
        </Toggle>
        <Toggle aria-label="Disabled toggle" disabled>
          <StarIcon />
        </Toggle>
      </div>
    </StorySurface>
  ),
}

export const TooltipStory: Story = {
  name: "Tooltip",
  render: () => (
    <StorySurface>
      <TooltipProvider>
        <Tooltip defaultOpen>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover</Button>
          </TooltipTrigger>
          <TooltipContent>Generated from the local registry.</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </StorySurface>
  ),
}
