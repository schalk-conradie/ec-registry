import {
  ArrowUpRightIcon,
  AccessibilityIcon,
  BookOpenIcon,
  CheckIcon,
  FileTextIcon,
  LayersIcon,
  PackageIcon,
  PaletteIcon,
  SlidersHorizontalIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  catalogGroups,
  componentItems,
  getDependencyCount,
  getFileTarget,
  getPublishedStorybookHref,
  packageDependencies,
  registryItems,
  supportItems,
  type RegistryItem,
} from "@/lib/registry-data"

const buildSteps = [
  {
    title: "Validate",
    description: "Check the registry manifest and item files.",
    command: "npm run validate:registry",
  },
  {
    title: "Build Registry",
    description: "Write static JSON endpoints into public/r.",
    command: "npm run build:registry",
  },
  {
    title: "Build All",
    description: "Generate registry JSON, Vite output, and Storybook.",
    command: "npm run build:all",
  },
]

const themeLinks = [
  {
    title: "Theme Overview",
    description: "Fluent-aligned color, typography, density, and component previews.",
    href: "/storybook-static/index.html?path=/story/theme--overview",
    icon: PaletteIcon,
  },
  {
    title: "Design Principles",
    description: "Detailed Fluent principles and review criteria for registry pages.",
    href: "/storybook-static/index.html?path=/story/theme--design-principles",
    icon: AccessibilityIcon,
  },
  {
    title: "Theme Designer",
    description: "Generate brand ramps, edit tokens, import variables, and export CSS.",
    href: "/storybook-static/index.html?path=/story/theme--theme-designer",
    icon: SlidersHorizontalIcon,
  },
]

function StatCard({
  title,
  value,
  description,
}: {
  title: string
  value: string | number
  description: string
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-3xl font-semibold">{value}</CardContent>
    </Card>
  )
}

function DependencySummary({ item }: { item: RegistryItem }) {
  const packageCount = item.dependencies?.length ?? 0
  const registryCount = item.registryDependencies?.length ?? 0

  if (!packageCount && !registryCount) {
    return <span>No dependencies</span>
  }

  return (
    <span>
      {packageCount} package / {registryCount} registry
    </span>
  )
}

function ComponentCard({ item }: { item: RegistryItem }) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>
          <code>{item.name}</code>
        </CardDescription>
        <CardAction>
          <Badge variant={getDependencyCount(item) ? "secondary" : "outline"}>
            <DependencySummary item={item} />
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-3">
        <p className="min-h-10 text-sm leading-5 text-muted-foreground">
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
          <a href={`/r/${item.name}.json`}>
            <FileTextIcon />
            JSON
          </a>
        </Button>
        <Button asChild size="sm" variant="ghost">
          <a href={getPublishedStorybookHref(item)}>
            <BookOpenIcon />
            Story
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

function App() {
  return (
    <main className="min-h-svh bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="flex min-w-0 flex-col gap-4">
            <Badge className="w-fit" variant="secondary">
              shadcn/ui registry
            </Badge>
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold tracking-normal">
                EC Registry
              </h1>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                Static registry JSON, Storybook documentation, and a grouped
                catalog for every published EC UI component, hook, and support
                utility.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild>
                <a href="/r/registry.json">
                  <FileTextIcon />
                  Registry index
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="/storybook-static/index.html">
                  <BookOpenIcon />
                  Storybook build
                </a>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Local Install Alias</CardTitle>
              <CardDescription>
                Use the generated static endpoints with shadcn.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <code className="block overflow-x-auto rounded bg-muted p-3 text-xs">
                npx shadcn@latest registry add
                @ec=http://localhost:6006/r/{"{name}"}.json
              </code>
              <code className="block overflow-x-auto rounded bg-muted p-3 text-xs">
                npx shadcn@latest add @ec/button
              </code>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            description="Components, hooks, and support utilities."
            title="Registry Items"
            value={registryItems.length}
          />
          <StatCard
            description="Dedicated Storybook component pages."
            title="UI Components"
            value={componentItems.length}
          />
          <StatCard
            description="Utility and hook registry entries."
            title="Support Items"
            value={supportItems.length}
          />
          <StatCard
            description="Unique package dependency declarations."
            title="Package Deps"
            value={packageDependencies.length}
          />
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <PaletteIcon className="size-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold tracking-normal">
                Theme System
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Fluent 2 design guidance, registry tokens, and an interactive
              theme designer are documented in Storybook.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {themeLinks.map((link) => {
              const Icon = link.icon

              return (
                <Card key={link.href}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="size-4 text-primary" />
                      {link.title}
                    </CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild size="sm" variant="outline">
                      <a href={link.href}>
                        <BookOpenIcon />
                        Open
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <LayersIcon className="size-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold tracking-normal">
                Component Catalog
              </h2>
            </div>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              Each card links to its generated JSON endpoint and its Storybook
              page. Dependency counts combine package dependencies and registry
              dependencies from the source registry metadata.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {catalogGroups.map((group) => (
              <section key={group.title} className="flex flex-col gap-3">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold tracking-normal">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                  <Badge variant="outline">{group.items.length} items</Badge>
                </div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {group.items.map((item) => (
                    <ComponentCard key={item.name} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Support Registry Items</CardTitle>
              <CardDescription>
                Shared entries installed by component dependencies.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {supportItems.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-3 rounded-lg border bg-background p-3 sm:grid-cols-[1fr_auto]"
                >
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium">{item.title}</span>
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <code className="mt-2 block truncate rounded bg-muted px-2 py-1 text-xs">
                      {getFileTarget(item)}
                    </code>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <a href={`/r/${item.name}.json`}>
                      <ArrowUpRightIcon />
                      JSON
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checks and Build Path</CardTitle>
              <CardDescription>
                Commands used to validate and publish the catalog.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {buildSteps.map((step) => (
                <div
                  key={step.command}
                  className="grid gap-2 rounded-lg border bg-background p-3"
                >
                  <div className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-primary" />
                    <span className="font-medium">{step.title}</span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                  <code className="overflow-x-auto rounded bg-muted px-2 py-1 text-xs">
                    {step.command}
                  </code>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Card>
            <CardHeader>
              <CardTitle>Package Dependencies</CardTitle>
              <CardDescription>
                External packages declared by published UI items.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {packageDependencies.map((dependency) => (
                <Badge key={dependency} variant="outline">
                  <PackageIcon />
                  {dependency}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Published Paths</CardTitle>
              <CardDescription>
                Static files expected after the registry build.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                "/r/registry.json",
                "/r/button.json",
                "/r/use-mobile.json",
                "/storybook-static/index.html",
              ].map((path) => (
                <code key={path} className="rounded bg-muted px-2 py-1 text-xs">
                  {path}
                </code>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}

export default App
