import { Tabs } from "flowbite-react";

export default function ProductTabs() {
	return (
		<div className="flex justify-between w-full">
			<Tabs style='underline'>
				<Tabs.Item active title='All Plants'>
				</Tabs.Item>
				<Tabs.Item active title='New Arrivals'>
				</Tabs.Item>
				<Tabs.Item active title='Sale'>
				</Tabs.Item>
			</Tabs>

			<div className='flex gap-2 items-center '>
				<p>Short by:</p>
				<select className='border-none outline-none ring-offset-none' value={"Default sorting"}>
					<option value='Default sorting'>Default sorting</option>
				</select>
			</div>
		</div>
	);
}
