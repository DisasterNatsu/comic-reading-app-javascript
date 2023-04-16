import React from "react";
import { Dropdown, Avatar, Text, Grid } from "@nextui-org/react";

const UserDropdown = () => {
	return (
		<Grid.Container justify="flex-start" gap={2}>
			<Grid>
				<Dropdown placement="bottom-left">
					<Dropdown.Trigger>
						<Avatar
							bordered
							size="lg"
							as="button"
							color="secondary"
							src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9154ca3-ea1c-485f-8670-322ea732109b/dey34s8-dc1c21a1-fdcb-4951-9e9f-38794038dc9e.jpg/v1/fill/w_1280,h_1710,q_75,strp/yang_kai___martial_peak_by_bibekanand_dey34s8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxMCIsInBhdGgiOiJcL2ZcL2M5MTU0Y2EzLWVhMWMtNDg1Zi04NjcwLTMyMmVhNzMyMTA5YlwvZGV5MzRzOC1kYzFjMjFhMS1mZGNiLTQ5NTEtOWU5Zi0zODc5NDAzOGRjOWUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1SUoFu9Y1uLp5WEYVr7W4w3-evucQ7HkYjrElaZSTbA"
						/>
					</Dropdown.Trigger>
					<Dropdown.Menu color="secondary" aria-label="Avatar Actions">
						<Dropdown.Item key="profile" css={{ height: "$18" }}>
							<Text b color="inherit" css={{ d: "flex" }}>
								Signed in as
							</Text>
							<Text b color="inherit" css={{ d: "flex" }}>
								Username
							</Text>
						</Dropdown.Item>
						<Dropdown.Item key="settings" withDivider>
							My Settings
						</Dropdown.Item>
						<Dropdown.Item key="analytics" withDivider>
							Analytics
						</Dropdown.Item>
						<Dropdown.Item key="system">System</Dropdown.Item>
						<Dropdown.Item key="configurations">Configurations</Dropdown.Item>
						<Dropdown.Item key="help_and_feedback" withDivider>
							Help & Feedback
						</Dropdown.Item>
						<Dropdown.Item key="logout" color="error" withDivider>
							Log Out
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Grid>
		</Grid.Container>
	);
};

export default UserDropdown;
