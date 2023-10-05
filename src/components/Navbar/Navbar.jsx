
import { Navbar, NavbarContent, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { IconSearch } from "../Icons/IconSearch";

export default function App() {
    return (
        <Navbar maxWidth="full" isBordered>
            <NavbarContent as="div" className="items-center" justify="start">
                <Input classNames={{
                    base: "sm:max-w-[10rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<IconSearch size={18} />}
                    type="search"
                />
            </NavbarContent>
            <NavbarContent as="div" className="items-center" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="default"
                            name="ThucNobita"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu className="" aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" color="primary">Nguyễn Vũ Minh Thức</DropdownItem>
                        <DropdownItem key="settings">Settings</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
