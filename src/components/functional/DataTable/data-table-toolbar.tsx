import { Table } from "@tanstack/react-table";
import { Cross2Icon, PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button/button";
import { Input } from "@/components/ui/Input/input";

import { AddTransactions } from "@/apps/lists/transactions/components/add-transactions";
import { statuses } from "@/apps/lists/transactions/data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { DataTableViewOptions } from"./data-table-view-options";

interface DataTableToolbarProps<TData> {
    table: Table<TData>
  }
  
export function DataTableToolbar<TData>({
    table,
  }: DataTableToolbarProps<TData>) {


    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                    table.getColumn("email")?.setFilterValue(event.target.value)
                }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                    column={table.getColumn("status")}
                    title="Status"
                    options={statuses}
                    />
                )}
                {isFiltered && (
                    <Button
                    variant="ghost"
                    onClick={() => table.resetColumnFilters()}
                    className="h-8 px-2 lg:px-3"
                    >
                    Reset
                    <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
                {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu> */}
            </div>
            <AddTransactions />
            <DataTableViewOptions table={table} />
        </div>
    )
}